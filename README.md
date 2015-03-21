# TimelyNote
An OS X automation script that creates &amp; auto-saves TextEdit files with a time-stamp

## Motivation
TimelyNote was created because I regularly use TextEdit as my scratch pad on my Mac for creating notes. Sometimes I have 10-20 TextEdit windows open at once, and when I want to shut-down my computer I am forced to manually review all my notes to decided whether I want to save them or not. This is time consuming. Basically, this has caused me to never really shut down or restart my mac because of the hassle of reviewing all my notes and having to determine whether or not I should save them.

## Solution

TimelyNote helps by creating a blank TextEdit document, and saving it with a time-stamp by default upon creation. Thus, you can keep all your notes in one directory, indexed by time-stamp. And when you need to quickly shutdown or restart your Mac, you can just save everything in one common file-naming scheme and locate your important notes later using <code>grep</code>. 

## Instructions

Edit the $USER variable to match your user name on your mac. To get this variable, open Terminal and type <code>echo $USER</code>.
Create the Notes folder in your Documents folder. In Terminal, <code> mkdir ~/Documents/Notes </code>.

Open the Automator application, create a <code>New Service</code>.
Choose service receives <code>no input</code> in <code> any application</code>.
Drag the <code>Run JavaScript</code> action to the main workflow area.
Paste TimelyNote.js into the code area.
Save the Automator File as TimelyNote.
In the Automator menu choose Services > Services Preferences
Scroll to the bottom of the list of Services shortcuts and select a shortcut for TimelyNote. I chose <code>Command + Shift + Y </code>. Be sure to disable <code>Command + Shift + Y </code> for its previous default action. 

## Next Steps

A Script which organizes the Notes into folder hierarchically by year and month. Sorted by day.
Also a Script which runs <code>textutil -convert txt</code> recursively on the entire directory for better <code>grepping</code>

