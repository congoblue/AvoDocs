const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const { execSync } = require("child_process");
const { program } = require("../website/node_modules/commander");

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Command line options
program
  .option('-v, --manversion <version>', 'specify which version to produce, use --version next to produce the /docs folder')
  .option('-s, --section <section>', 'specify a specific section to output, e.g. --section synergy')
  .version('0.0.1')
  .parse(process.argv);

try {
  process.chdir(__dirname);
} catch (err) {
  console.error(`Failed to change directory: ${err}`);
}

if(program.section) {
  createPDF("12.0", program.section);
}
else {
  createPDF("12.0")
}

/**
 * Converts `filename` to a MarkDown title anchor link.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @return {string} A MarkDown title anchor link, e.g. `#cues-creating-a-cue.md`
 */
function filenameToTitleLink(filename) {
  return "#" + filename.replace("/","-");
}

/**
 * Replaces the YAML block in the file with a heading
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the file with YAML block in
 * @return {string} The content with the YAML block replaced
 */
function replaceYaml(filename,content) {
  return content.replace(/^---(?:[\n]|.)*title: *([\w ]*)(?:[\n]|.(?!--))*---/mgi,function (match,title) {
    titleLink = filenameToTitleLink(filename);
    if (filename.match("/")) {
      // sub page, e.g.:
      // # Cues {#cues.md}
      return `# ${title} {${titleLink}}`;
    }
    else {
      // heading page, e.g.:
      // # {#cues.md}
      // \part{Cues}
      return `# {${titleLink}}\n\\part{${title}}`;
    }
  });
}

/**
 * Replaces the image URIs with relative paths (not absolute paths)
 * From ![alt](/path/to/img)
 * To   ![alt](path/to/img)
 * Also warns about missing alt text and images.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the file with the images in
 * @return {string} The content with the images fixed
 */
function replaceImagePaths(filename,content) {
  return content.replace(/!\[([^\]]*)\]\(\/(?!\/)([^\)]*)\)/mg, function (match,alt,src) {
    src = `../website/static/${src}`;
    if (!fs.existsSync(src)) {
      // check image exists
      process.emitWarning(`${filename}: Image '${src}' not found`);
      return '';
    }
    if (!alt) {
      // check alt text is defined for image
      process.emitWarning(`${filename}: No alt text set for '${src}'`);
    }
    return `![${alt}](${src})`
  });
}

/**
 * Format a MarkDown file ready for PDF
 * @param {string} docsPath Path to the docs folder, e.g. `../docs/`
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @return {string} The formatted MarkDown
 */
function formatMd(docsPath,filename) {
  let filepath = docsPath + filename;

  if (!fs.existsSync(filepath)) {
    process.emitWarning(`${filename}: Not found`);
    return '';
  }
  
  let content = fs.readFileSync(filepath, 'utf-8');

  // replace YAML blocks with title
  content = replaceYaml(filename,content);

  // fix the absolute image paths
  content = replaceImagePaths(filename,content);

  content += "\n\n";

  return content;
}

/**
 * Generate a PDF version of the MarkDown file
 * @param {string} inputMdPath Path to the MD file to convert, e.g. `output/pdf.md`
 * @param {string} version Version of the manual, e.g. "12.0"
 */
function generatePDF(filePath,version) {
  console.log("Producing PDF")

  const command = `
DATE=$(date "+%d %B %Y")
ISODATE=$(date "+%F %H-%M-%S")
VERSION="Titan ${version}"

pandoc --template "PDF/eisvogel_avo.latex" \
  -o "output/$ISODATE $VERSION Manual $DATE.pdf" \
  --pdf-engine=xelatex \
  --highlight-style kate \
  --metadata-file PDF/header.yaml \
  --toc \
  -fmarkdown-implicit_figures \
  --self-contained \
  -M date="$DATE" \
  -M footer-center="$DATE" \
  -M footer-left="$VERSION Manual" \
  -M subtitle="$VERSION" \
  ${filePath}`;

  var hrstart = process.hrtime();

  execSync(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
  });

  var hrend = process.hrtime(hrstart);
  console.log('PDF produced in %ds', hrend[0]);
}

/**
 * Create the docs for the specified `version` & `section`
 * @param {string} version Version of the docs to produce, e.g. `12.0` or `next` to produce the latest
 * @param {string} section (Optional) Which section to output, e.g. `synergy`
 */
function createPDF(version,section=null) {
  // get the path of the sidebar
  let sidebarPath = "../website/sidebars.json";
  let sidebarFile = fs.readFileSync(sidebarPath);
  let sidebar = JSON.parse(sidebarFile);

  // get the path for docs of the version
  docsPath = __dirname + "/../docs/"

  // format the files
  let output = "";

  for(let sec in sidebar.docs) {
    if(!section || section.toLowerCase() == sec.toLowerCase()) {
      for(let page of sidebar.docs[sec]) {
        output += formatMd(docsPath,page+'.md');
      }
    }
  }

  // create formatted MD file
  fs.writeFileSync("output/pdf.md", output, function(err) {
    if(err) {
      return console.log(err);
    }
  });

  // generate the PDF
  generatePDF('output/pdf.md',version)
}