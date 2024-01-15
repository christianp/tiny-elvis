TINY ELVIS FOR WINDOWS
Freeware Version 1.01 - March 20, 1994


AUTHOR'S MESSAGE TO USERS
-------------------------
To everyone who took the time to download, beg, borrow, or
steal a copy of the original Tiny Elvis 1.00... my sincere
thanks.

I've been a bit overwhelmed by the number of messages you've
sent over the past few weeks, and surprised at your enthusiasm
for Tiny Elvis.

My thanks in particular to those of you who took the extra
time to send in suggestions for new features.  This new
release is my attempt to implement as many of them as
possible.

I'm grateful that Tiny Elvis has earned a place on your
Windows desktop, and hope you enjoy the program as much as I
did developing it.



VERSION NOTES
-------------
Version 1.01 is an interim release upgrade to the original
Tiny Elvis for Windows program.

All of the functionality of the original program is present
in this update -- PLUS the following changes have been
implemented:

1. All .WAV files included with the program have been
converted to the more universal (Windows standard) sampling
rate of 11.025 kHz.  This will allow acceptable audio playback
on systems that do not support the lower 7.333 kHz sampling
rate of the .WAV files included with previous versions of Tiny
Elvis.  You may still use the old 7.333 kHz files if you wish,
and may still substitute .WAV files of your own (as per the
documented guidelines).

2. Correction to the system menu "Configuration..." hotkey
(now "O"; formerly "C", which conflicted with "Close").

3. Correction to the Configuration dialog caption (stupid
oversight on my part -- sorry)

4. Implementation of a wider range of Elvis Interval settings
(now from 1 to 20 minutes -- thanks, Microsoft).

5. Implementation of a new "Always On Top" option in the
Configuration dialog; keeps Tiny Elvis atop any other active
applications (thanks again, Microsoft).

6. Implementation of a new "Display Interval Countdown" option
in the Configuration dialog; provides digital countdown of
interval time (in minutes and seconds) remaining until the
next Tiny E. "performance."  Adds to the already excruciating
suspense.

7. Improved support for systems using a PC speaker driver in
lieu of dedicated audio hardware.  This support is enabled via
a command line switch (/S), which is documented both in the
README.TXT text file and in the program's run-time help.  If
you are using a PC speaker driver, you MUST include the /S
command line switch.

8. Slightly improved "About..." dialog box easter egg (it's
still up to you to find it -- but you'll be rewarded if you
read this text file).

9. Additional karmic energy employed during program compilation
(fishermen refer to this as "holding your mouth right").



INTRODUCTION
------------
Tiny Elvis for Windows is inspired by the character "Tiny Elvis"
who has appeared periodically in airings of NBC's Saturday Night
Live.

For those of you unfamiliar with the television incarnation of
Tiny Elvis, he's a miniature (say, five or six inches tall?)
Elvis who likes to ride around town in his car.  His chums do
the driving while he sits on the dashboard -- I'm not making
this up -- admiring the passing scenery.  Tiny Elvis kills time
by commenting wittily on the objects around him, invariably
describing them as "huge."

Tiny Elvis' admiring entourage laughs along with his every
comment.  Inevitably, one of them lets slip with an ill-advised
aside about Tiny Elvis' size, offending the "Tiny King" and
drawing a sharp reprimand.  The result:  Humor!

Now, Tiny Elvis comes to your PC!

This Tiny Elvis will lounge around your Windows desktop as an
iconized application, replete in white jump suit and blue suede
shoes.  Every now and then, he'll pop to his feet and offer some
running commentary on your "huge" icons, windows, cursors, etc.
He will accompany his comments with broad gestures, followed by
some trademark heavy-hitting, Vegas-style posturing.

Users may adjust the interval between Tiny Elvis' comments in a
dialog box accessed via the system menu.  The interval setting
is saved in the TNYELVIS.INI file, which is stored in your
default Windows directory (e.g., C:\WINDOWS).

NOTE:  Don't worry, Tiny Elvis doesn't meddle with your WIN.INI
or SYSTEM.INI files, or place any other files in your Windows
directory (or anywhere else, for that matter).  The program
might be silly, but it minds its own business.

An extra command ("Make Tiny Elvis Talk Now") in the system menu
allows users to force Tiny Elvis into action instantly, without
waiting for the interval to expire.

The program requires Microsoft Windows version 3.1 or later.
The program's waveform audio features require a
Windows-compatible sound card (AdLib, Roland, SoundBlaster, etc.)
or other audio hardware, correctly installed and configured for
use by Windows.  All applicable waveform audio driver sets must
be installed and correctly configured, as well.

You can test your hardware/driver configuration by running the
Windows "Media Player" accessory.  If your hardware and device
drivers are correctly installed and configured, you should be
able to load and play the file .WAV file format supported by
this application.

Although Tiny Elvis can be run from a floppy disk, we strongly
recommend its installation to a hard disk.  As such, you should
have enough free hard disk space for all of Tiny Elvis' program
and support files.

Best of all, Tiny Elvis is freeware!  It is distributed free of
charge to the public domain.  As such, the program is not
intended for sale, resale, purchase, or for-profit distribution
in the shareware or retail marketplace.  In other words, you can
give it away, but you shouldn't sell it!

If Tiny Elvis for Windows amuses you, drop me a line on
CompuServe (my address is 70661,3235).  If it fails to amuse
you, well hey, at least the price was right...



PROGRAM REQUIREMENTS
--------------------
Tiny Elvis for Windows requires Microsoft Windows version 3.1 or
later.

For best results, run Tiny Elvis on a 386SX-16 or faster PC.
Animation effects will be somewhat smoother when an Windows-
accelerated video card/driver combination is used.

The program's waveform audio features require a Windows-compatible
sound card (AdLib, Roland, SoundBlaster, etc.) or other audio
hardware, correctly installed and configured for use by Windows.
All applicable waveform audio driver sets must be installed and
correctly configured, as well.

NOTE:  There is limited support for users whose PCs are not equipped
with dedicated audio hardware but are using a PC case speaker driver
for waveform audio playback.  If you are using a PC speaker driver,
you MUST include the /S command line switch as follows:

	C:\WINFUN\TNYELVIS.EXE /S

Be sure to leave a single space between the executable filename
and the switch.

The /S switch is case insensitive, meaning you may use an upper-
or lower-case "S".

NOTE:  Tiny Elvis' current audio mode (normal or speaker driver) is
always displayed in the "About..." dialog box.


You can test your hardware/driver configuration by running the
Windows "Media Player" accessory.  If your hardware and device
drivers are correctly installed and configured, you should be able
to load and play the file .WAV file format supported by this
application.

Although Tiny Elvis can be run from a floppy disk, we strongly
recommend its installation to a hard disk.  As such, you should have
enough free hard disk space for all of Tiny Elvis' program and
support files.

There are no (known) minimum memory requirements or video mode
(resolution or color depth) requirements.



PROGRAM FILES
-------------
The Tiny Elvis package is comprised of the following files:

TNYELVIS.EXE
The executable program file

TNYELVIS.HLP
The help system file

TWAV_A1.WAV, TWAV_A2.WAV, TWAV_A3.WAV,
TWAV_A4.WAV, TWAV_A5.WAV, TWAV_A6.WAV,
TWAV_B1.WAV, TWAV_B2.WAV, TWAV_B3.WAV
The waveform audio files for Tiny Elvis' spoken comments.  These
files were recorded as 8-bit, mono, at a sampling rate of
11.025 kHz, and should play acceptably via any Windows-compatible
audio driver set.



QUICK AND DIRTY SETUP
---------------------
1. Simply create a directory anywhere on an available physical or
logical hard drive on your system (e.g., C:\ELVIS).

2. Copy the Tiny Elvis program files to this directory (or move
the original .ZIP file to this directory and "un-zip").  See the
"Program Files" section above for a full list of the files.  If
you are a user of a previous version of Tiny Elvis, you may
safely overwrite all of your older files with the new versions.

3. You may run Tiny Elvis directly from Windows File Manager or
comparable alternative shell by "run"-ning the TNYELVIS.EXE file.

4. Of course, you can also assign one of the many icons in
TNYELVIS.EXE to a Program Manager group and run it from there as
well.

5. Tiny Elvis is pre-set with a default interval of 1 minute.
If you're in a hurry to see him in action, select the system
menu "Make Tiny Elvis Talk Now" command.

6. If you have any questions about program features, please
turn your attention to the Tiny Elvis help file, which is
accessed via the system menu "Help" command.



USING TINY ELVIS
----------------
Strictly speaking, there's very little that goes into "using"
Tiny Elvis.  He just lays there at the bottom of your Windows
desktop (yes, you can move him) and watches the world pass by.

The interval between his animation sequences is pre-set to a
default value of 1 minute.  You can easily change this value
by opening the Configuration dialog, which is accessed via the
system menu "Configuration..." command.  Several interval
settings are available, ranging from 1 to 20 minutes.  If the
Configuration dialog is closed via the "OK" pushbutton control,
any new selection is placed into effect.

NOTE:  If you're in a hurry to see Tiny Elvis swing into action,
and don't feel like waiting until the interval has elapsed,
select the system menu "Make Tiny Elvis Talk Now" command.



Two sets of waveform audio files are called by the program in
conjunction with Tiny Elvis' speech routines.  The first set is
comprised of the following files:

	TWAV_A1.WAV, TWAV_A2.WAV, TWAV_A3.WAV
	TWAV_A4.WAV, TWAV_A5.WAV, TWAV_A6.WAV

These files are "initial" comments spoken by Tiny Elvis, drawing
attention to a window, icon, cursor, etc.

The second set is comprised of the following files:

	TWAV_B1.WAV, TWAV_B2.WAV, TWAV_B3.WAV

These files are "follow-up" comments spoken by Tiny Elvis, who
(unable to leave well enough alone) invariably describes the
selected object as "huge."

During the Tiny Elvis animation sequence, one file is selected
at random from each of the two sets.  The two selected files are
then played in synchronization with Tiny Elvis' gestures.

NOTE:  All nine files must be present in the default Tiny Elvis
directory.  If any of the nine files are missing, the program's
voice routines will not be executed.

Waveform playback is handled completely "in the background" and
should not cut into your computer's CPU cycles, unless you are
using a PC case speaker driver and Tiny Elvis is being run with
the /S command line switch.



CONFIGURATION SETTINGS
----------------------
The Configuration dialog box provides users with a collection
of controls for enabling and adjusting a number of program
features:

Elvis Interval
--------------
This group box contains eight radiobutton controls used for
selecting the length of time between Tiny Elvis performances.

Display Interval Countdown
--------------------------
This checkbox control enables/disables the optional display
(in minutes and seconds) of the interval time remaining
until the next Tiny Elvis performance.  The time display is
added to the Tiny Elvis caption.

Always On Top
-------------
This checkbox control enables/disables an optional feature
for keeping the Tiny Elvis icon atop any other active
applications on the Windows desktop.

NOTE:  Any changes to configuration settings are placed into
effect when the Configuration dialog box is closed via the
"OK" pushbutton.

The interval timer is always paused while the Configuration
dialog is open.  The timer is reset to zero if the dialog is
closed via the "OK" pushbutton; the timer is resumed from
its previous position if the dialog is closed via the
"CANCEL" pushbutton.



DISPLAY INTERVAL COUNTDOWN CAUTIONARY NOTE
------------------------------------------
When the "Display Interval Countdown" feature is enabled, the
caption text is updated approximately once every second.

This updating will defeat most Windows screen savers (i.e.,
prevent them from blanking the screen).  If you are using a
Windows screen saver, we DO NOT recommend running Tiny Elvis
for prolonged periods of time with this feature enabled.



REPLACING THE WAVEFORM AUDIO FILES WITH SOME OF YOUR OWN
--------------------------------------------------------
After using Tiny Elvis for a while, you may wish to replace one
or more of the waveform audio files with some of your own (maybe
you're a would-be Elvis impersonator, maybe not).

Well, go right ahead.  Tiny Elvis will handle any type of
Windows-compatible waveform file you might choose to record
(remember, this is more a function of your installed drivers
than anything in the program itself).

Tiny Elvis' initial hand gestures are hard-coded to sync to the
successful completion of the "A" and "B" .WAV files.  He will
jump to his feet to "speak" the "A" file and will then wait
until that file has completed playback before making his first
hand gesture (intended to accompany the "B" file).  He will
then wait until the "B" file has finished before executing the
remainder of his gesture-and-posturing sequence.

What this means is, you don't have to worry about matching the
playback duration (or format, or file size) of the original
waveforms included with the program.  Please bear in mind that
waveform audio files recorded in stereo and/or at sampling
rates of 11 kHz of higher can become very large -- and files
recorded at rates below 11 kHz may not be compabible with all
Windows audio drivers.

Just MAKE SURE you end up with two sets of files (six files in
set one; three in set two), and that the filenames are EXACTLY
the same as my originals (see the filename listings in the
"Getting Started" topic).

Also, Tiny Elvis requires that the waveform files be located in
the same directory as TNYELVIS.EXE.  The program will not be able
to find them if they are located anywhere else.



RUN-TIME HELP
-------------
Full run-time help via the Windows Help system is supplied with
Tiny Elvis, and is accessed via the system menu "Help" command.



LEGAL AND ETHICAL ISSUES
------------------------
This program (Tiny Elvis for Windows) is hereby contributed "as
is" to the public domain.  The program, including its companion
waveform audio and documentation files, is distributed as
freeware.  As such, it is not intended for sale, resale, purchase,
or for-profit distribution in the shareware or retail marketplace.

Users are free to install and run the program on any system or
systems they wish (subject only to the program's hardware
requirements).  Users are also free to copy and re-distribute
the original files in any manner of via any channel available to
them (i.e., network, BBS, electronic information service, etc.).

Users doing so must distribute only the original files
(preferably in their original compressed format).  When so
distributed, it is the distributor's responsibility to ensure
that the program files have been kept in their original state
and format, and have not been altered, edited, disassembled, or
recompiled in any way.

That said, please do not disassemble the original executable or
edit any of its embedded resources (well, okay, on second thought
-- if you're really in DIRE need of a few Elvis icons, go ahead
and extract a few, just leave everything else alone).

Before release, this software was tested on a variety of
hardware configurations, under the most rigorous test conditions
possible.  The author therefore warrants that the software will
perform in substantial compliance with the specifications set
forth in this text, provided that the software is used only on
the computer hardware and operating system(s) for which it was
designed.

The author makes no other warranties, expressed or implied, with
respect to this software, including its quality or fitness for a
particular purpose.
 
In no event will the author, or Pegasus Development, be liable
for any direct, indirect, special, incidental, or consequential
damages arising from the use of or the inability to use this
software, even if the author has been advised of the possibility
of such damages.
 
Neither the author nor Pegasus Development is responsible for
any costs including, but not limited to, those incurred as a
result of lost profits or revenues, loss of time or use of the
software, loss of data, the cost of recovering software or data,
the cost of substitute software, claims by third parties, or
similar costs.

________


Tiny Elvis for Windows
Freeware for the Public Domain
"Software that promises nothing -- And Delivers!"

by Matthew T. Smith
CIS 70661,3235

PEGASUS DEVELOPMENT
11900 Grant Place
St. Louis, Missouri. 63131

Users interested in information about our line of "real"
applications software are invited to contact us at the above
address, or by telephone at (314) 965-5630.


"Microsoft" and "Windows" are registered trademarks of
Microsoft Corporation.  All other trademarks mentioned herein are
trademarks or registered trademarks of their respective
corporations and are hereby acknowledged.


EASTER EGG:  If you've actually read the documentation through
this far, you deserve a reward.  The Tiny Elvis easter egg,
such as it is, is displayed by "double-clicking" your mouse
on the Tiny E. icon in the "About Tiny Elvis" dialog box.  The
easter egg text is drawn from a random collection, and will
not be the same every time.
