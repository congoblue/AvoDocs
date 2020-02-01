---
id: version-12.0-using-a-cue
title: Using a cue
sidebar_label: Using a cue
original_id: using-a-cue
---

Because it's possible to play back a large number of cues at the same
time, the console has to have rules on how it combines the output from
different cues. These are called HTP and LTP rules.

Combining cues with HTP and LTP
-------------------------------

Control channels are handled in two ways:

-   Dimmer or intensity channels work on the principle of "Highest Takes
    Precedence" (HTP). If an HTP channel is active at different levels
    in several cues, the highest level will be output. When you fade out
    a cue, the HTP channels fade out with it.

-   All other channels work on the principle of "Latest Takes
    Precedence" (LTP). The latest change takes over from any other
    values, so the most recent cue to be turned on is the one which is
    output. When you fade out a cue, LTP channels retain their values
    until changed by another cue.

Playing back a cue
------------------

To fire (play back) a cue, raise the fader. (Make sure there are no
values in the programmer by pressing the Clear button, because anything
in the programmer will override the playback).

-   You can fire several cues at once.

-   The HTP levels in the cue will be mastered by the fader level; for
    example if you set the fader at 50% then all HTP levels will be 50%
    of their programmed values.

-   LTP channels are triggered as soon as the fader goes above 0%. If a
    fade time is programmed the LTP channels will start to fade; if
    there is no fade time they will snap to position (unless the cue is
    set to Mode 2 in which case they fade with the fader position; see
    the timings section 8.5 on page 211 for details of modes).

-   You can Flash the cue by pressing the grey flash button. You can
    Swop (solo) the cue by pressing the blue Swop button (all other
    active cues will turn off while the button is pressed). This assumes
    you haven't reassigned the function of the buttons using Key
    Profiles, see below.

-   You can Preload the cue by assigning the Preload function to the
    blue or grey buttons using Key Profiles. Preload sets the attributes
    of fixtures in the playback which are not currently active in any
    other playbacks. This is useful to avoid the fixtures visibly moving
    into position or changing colours or gobos when you raise the fader
    of the cue. To assign Preload, hold \<Avo\> Shift and press \[Edit
    Key Profile\], then press the button you want to assign (also see
    section 16.1.7 on page 314.) Note that this will assign the function
    to all buttons of the same type.

-   You can fire a one-shot cue with timings by assigning the Go
    function to one of the handle buttons using Key Profiles. This
    allows you to fire the cue without needing to hold down a button
    while the timing completes. You can also fire the cue again without
    needing to release it.

-   You can set playbacks to high priority if you do not want them to be
    overridden by other playbacks using the same fixtures. For example,
    if you have a couple of fixtures acting as a spotlight, but they are
    also programmed into some colour washes, you probably want the
    spotlight cue to take priority over the colour washes. See section
    8.6.1 on page 217.

Changing playback pages
-----------------------

The console allows multiple pages of playbacks. Page buttons are
provided near the faders or you can also touch the top and bottom of the
roller graphic on the screen. If you touch the middle of the roller
graphic you can jump to a page number by entering the number.

-   If you have stored cues on the touch select buttons, you select
    different pages using the Playbacks page touch buttons.

    **For consoles without motorised faders:**

-   Playbacks which are fired when you change page remain active. If you
    want to fire a cue on a fader which is already up from a previous
    page, lower the fader to zero then raise it again. The cue from the
    previous page will stop and the cue from the new page will fire.

-   If you return to a page with an active playback, the fader will not
    resume control of the playback until it matches the current level of
    the playback. This prevents the playback level jumping when the
    fader is first moved. If a playback is active from another page the
    display area is purple and shows the page number at the top in light
    blue. You can change this behaviour using the \[Playback Paging\]
    user setting, see section 16.1.6 on page 313

    **For consoles with motorised faders:**

-   Playbacks which are fired when you change page remain active, but
    thanks to the motorised faders you can then use the fader to fire a
    playback from the new page. If you want to kill the original
    playback you need to return to the page it is on and lower the fader
    back to zero. If a playback is active from another page the display
    area is purple and shows the page number at the top in light blue.
    You can change this behaviour to be like consoles without motorised
    faders using the \[Playback Paging\] user setting, see section
    16.1.6 on page 313 .

-   You can set a legend for each playback page. The legend is shown on
    the 'Pages' roller on the screen. Use \[Set Legend\] from the main
    Program menu then \[Page Legends\]. While in this menu you can
    change the page to set legends for different pages.

-   If your console features the 20 executor buttons on the top right of
    the console, they can be paged using two of the macro buttons. The
    page change macros are part of the fixture library; if you do not
    see the macros, download and install the latest library.. The same
    applies to the 10 static playback faders on the Tiger Touch.

Viewing active playbacks
------------------------

The Active Playbacks window shows details of which playbacks are active.
When you have a number of layered playbacks with different effects, this
provides an easy way to see which playback is causing which effect. Each
button shows the playback legend, which page they are from and which
attributes are affected. To show the window press \<View/Open\>, \[Open
Workspace Window\], \[Active Playbacks\].

![](/docs/images/image235.png)

Click on a playback to instantly kill it. You can also press \[Playback
Options\] followed by the playback in this window to change parameters
of the playback.

Speed and Size Masters
----------------------

Playbacks can be assigned to Speed and Size Masters which allow you to
modify the speed and size of shapes or effects stored in a cue using a
separate master fader (or in the case of chases, to modify the speed of
the chase). This is really useful to modify the look when several
playbacks are running at the same time.

You can also assign the fader of the playback the effect is stored in to
control shape speed or size using the Playback Options -- Fader
settings, see section 8.6.3 on page 218.

Speed and Size Masters are described in detail in section 13.1.4 on page
280.

Releasing running playbacks
---------------------------

You can release a running playback to its previous state by pressing
\<Release\> (\<Off\> button on Pearl Expert), then the select button of
the playback to be released. Channels will release back to their state
in the previous playback until no playbacks are left to be released. If
the \[Release to Home\] setting on the Release menu is Enabled, channels
will go to the power-on state, which you can program (see next section).
If the option is disabled, channels will remain in the state of the last
playback. You can release all running playbacks by pressing \<Release\>
then \[Release all playbacks\].

You can also configure the key profile so that the blue or grey buttons
can be used to release the playback.

Channels will always release with a fade time, this defaults to 2
seconds but you can change it using \[Master Release Time\] in the
Release menu. You can also set an individual release time for the
playback from the Release tab of Playback Options.

-   You can instantly kill a playback by pressing \<Avo\>+the swop
    button of the playback.

-   You can set a mask so that only certain attributes release from the
    playback when the playback is killed. This uses the \[Release Mask\]
    option in the Playback Options menu (see section 8.6.5 on page 219).
    Normally all attributes will remain in the state last used in the
    playback -- for cues which trigger strobing or other effects this
    might not be what you want.

Releasing a whole page of playbacks
-----------------------------------

You can use the Release function to release a whole page of playbacks in
one operation. Press \<Release\> then the \<Goto Page\> button, or touch
the current page in the playbacks view. You will get the following
options:

\[Release this Page\]: releases all active playbacks on the current page
and playback fader group

\[Release Playbacks Not On This Page\]: releases any active playback on
the same fader group from another page

\[Release All Playbacks In This Group\]: releases any active playback in
the fader group.

"Fader Group" refers to a particular area of the console, for example
the main faders below the screen on a Tiger Touch or the top row on the
left hand side of the Arena.

Release mask - releasing individual attributes
----------------------------------------------

You can release individual fixtures or attributes, and remove fixtures
from shapes in playbacks using the release mask. There is a Global
release mask which affects all release operations, or you can set a
Local release mask which affects only the current playback.

**Global release mask**

If no local release mask is set for the playback, attributes release
according to this mask. The default is for no attributes to release.

To set the mask, press \<Release\> then \[Global Release Mask\]. The
softkey shows which attributes are enabled.

![global release
mask](/docs/images/image236.png)

**Local release mask**

To set the local release mask for a playback, select \[Playback
Options\] and press the select button of the playback. Then press
\[Release Mask\]. If the option is set to \[Mask Source Global\] then
press the option again to change to \[Mask Source Local\].

Programming the Release / Power On state
----------------------------------------

You can program the state which fixtures will go to at power on, or when
all playbacks are released. It can be useful to program this as a
general lighting state so that there is some light on the stage when the
console powers up, or when all playbacks are released.

The release state can be programmed in Shared mode or Individual mode.
In Shared mode you just have to set the desired state for one of each
type of fixture, and that state will be used for all fixtures of that
type. In Individual mode, the state of each fixture will be recorded
individually as you have set it.

1\> Set up the look you want.

2\> Press \<Record\>, then \<Release\>.

3\> Select \[Shared values\] or \[Individual values\].

4\> Press the \[Record\] softkey.

5\> The Release state is saved.

-   To test, fire some playbacks, then release them by pressing
    \<Release\> followed by the select button of the playback. The
    fixtures should return to your programmed release state.

Auto Run playbacks on power up
------------------------------

You can configure one or more playbacks to automatically run when the
console is powered on. This can be very useful for unattended
applications to set up an initial lighting state, or to run lamp on
macros.

The Run On Startup option is found in the Playback Options for each
playback. There is also a global user setting in the to enable or
disable running playbacks on startup, which provides a way to turn off
all startup playbacks rather than having to go and edit each playback..

1\> At the top level menu press \[Playback Options\] then the Swop
button of the playback you want to run

2\> Select \[Playback\] category.

3\> Set the \[Run On Startup\] option to Enabled.

4\> The Release state is saved.

Power on playbacks show a Power symbol watermark in the playback
information area above the fader. If you open the Show Library window
(see section 3.7 on page 78) there is a filter tab to Show Startup
Playbacks which allows you to list all the playbacks which are set to
run on startup.

![power on playback](/docs/images/image237.png)

Turning off individual fixtures
-------------------------------

You can turn off individual fixtures or certain attributes of them using
the Off menu. This will cause the attributes/fixtures to release to
their previous state before the playback was fired.

Press \<Off\> button followed by a playback to open the \'Off Playback
with Mask\' menu. Select the fixtures to be turned off, set mask as
required and then press \[Off\] to turn the fixtures/attributes/shapes
off.

On Titan consoles that do not have separate \<Release\> and \<Off\>
buttons, pressing \<Off\> followed by a playback will release it which
is not what you want. On these select the softkey \[Off Playback
Values\] then select the playback.

