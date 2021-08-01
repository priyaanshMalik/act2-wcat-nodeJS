build wcat commnad (*implementation of cat command of linux terminal*)

# It is used to display or make a copy content of one or more files in the terminal 
General Syntax: `node wcat.js [options] [filepaths]` 
> option to remove big line break (-s) 
> option to add line number to non empty lines (-b) 
> option to add line numbers to all lines (-n) 

Commands: 
1. node wcat.js filepath => displays content of the file in the terminal 
2. node wcat.js filepathi filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order. 
3. node wcat.js -s filepath => convert big line breaks into a singular line break 
4. node wcat -n filepath => give numbering to all the lines 5- node wcat -b filepath => give numbering to non-empty lines We can mix and match the options. 

**Edge cases: 1- If file entered is not found then it gives file does not exist error. 2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.**

**Ignore** yet to be implemented features
> node wcat filenamepath > filename2path => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist. 
> node wcat filename >> filename2 => append all the content of filename into filename2 8- node wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2 
