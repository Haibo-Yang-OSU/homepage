---
title: 'Linux Command Line'
date: 2020-08-19
permalink: /posts/2020/08/blog-post-3/
tags:
  - Linux
  - Command Line
  - tool
---

# Common Commands
---------

man: short for manual, get more information on a specific command.
ls: list directory contents.
cd: change directory.
pwd: print working directory.
mkdir: make directory.
rmdir: remove directory (only works if empty).

ls -l: list additional details beyond the name.
ls -lt: sort by time last modified (-t flag), best combined with -l.
ls -ltr: reverse the results so the oldest files are at the top.
ls -a: show all files including hidden ones.

mkdir -p: -p stands for creating parent directory if it does not exist.

rm -r: -r stands for recursive. Delete both files and directories regardless of whether it contains any content.

touch: creates a file or updates the timestamp on an existing file.
cat: outputs the full contents of a file.
head: returns the first X lines of a file starting at the top.
tail: returns the first X lines of a file starting at the bottom.
cp: copies a file or directory.
rm: remove a file or directory.
mv: moves a file or directory.
less: displays contents of file while allowing easy scrolling up and down.
diff: compares two files for differences.
cmp: checks if two files are identical on a byte-by-byte level.
file: gets information on file type.
file file1: get file1 type.
type command1: get command type.
which command1: find location of the executable.
whereis command1: find the executable location, source location, and manual pages for the command.

head/tail -n #: -n + # specify the amount of lines.
cp -r: copy whole folders.
mv: overwrites a file without a warning if it already exists.

# File/Folder Navigation
------

## Basics
------
Options for ls:
-a: show hidden files and directories
--color: color highlighted output
-F: symbol at the end of file name to indicate type
-i: show file index number (inode number)
-l: long format with details
-t: sort by date time
-S: sort by size
-r: reverse order
-R: recursively list current folder and subfolders

Directory symbol:
. : represents the current working directory
.. : represents the folder containing the working directory
~ : represents the home folder for the current user

ln -s original_file link_file: create a file called link_file in your working directory which points to original_file.
ln original_file link_file: create a hark link, can only be applied to file not file folder.

pushd: acts like cd but it creats a stack of directories so you can easily return to your current directory.
popd: pop current directory from the stack and move one to the right.
cd -: navigate into whatever directory you were in previously.

ranger: a command-line program which makes file and directory exploration quick and easy.
Install ranger, sudo apt-get install ranger
ranger: get a three-pane view. Pressing up and down will change your selection on the middle pane. Press right to go deeper into the directory displayed on the right, and left to explore the parent directory.
keyboard shortcuts:
S: open the directory selected in the far left pane to be opened in a bash session. From that point, if you press ctrl+d or manually run exit, you will return to ranger.
s: open a small text box in the bottom left of your screen where a shell command can be input.
Q: quit ranger and return you to the command line.
@: allow you to enter a bash command without leaving ranger.
~: switch between the three levels of directory view and a view that focuses on just the current one, press it again to go back.
o: display a list of possible ways to sort the files in the current directory.

# History and Shortcuts
------
By default most systems will only contain about 2000 commands before deleting old history.
You can increase that number by modifying you ~/.bashrc for HISTSIZE and HISIFILESIZE.

history: show the history.
history | grep command1: look for the command1 history.
!number: run the corresponding command.

shortcuts
tab key when double tapped activates autocomplete.
etc.

* or ?: file globbing or wildcards

# scripts and pipes
























