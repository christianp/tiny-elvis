# Tiny Elvis in JavaScript
 
Christian Lawson-Perfect (https://somethingorotherwhatever.com,
christian@lawson-perfect.uk), 2024, based on the original by Matthew T. Smith
for Pegasus Development, 1994.

Tiny Elvis was a Windows 3.1 program written by Matthew T. Smith. It placed a
tiny pixel-art Elvis on your desktop, who would occasionally comment on the
enormity of the things around him.

I've recreated Tiny Elvis as a web page, using the original art and sounds.
The README says the program is in the public domain, but asks us to only
distribute the original files without disassembling the executable. There's a
vague bit saying it's OK to extract the icons.

I think that extracting the picture files 30 years later is probably OK,
but to be safe the git repository only includes the files from the original
zip package, along with a Makefile to extract the art and convert it to png
format, using `wrestool` and imagemagick's `convert` command.

I didn't do anything with the Easter Egg messages which you could activate in
the original by double-clicking the E icon in the "About Tiny Elvis" dialog.

To recreate the files after cloning the repository, run `make extract_icons`
and then `make default resources`.
