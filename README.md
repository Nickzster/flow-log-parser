# Flow Log Records Parser

This project is a flow log records parser based on [AWS VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-log-records.html).

# Setup
1. Install NodeJS 20.17.0 or newer.
2. Run the program: `node main.mjs`. This will dump everything into the output file specified (default is `processed.txt`).
3. View the output contents via `cat processed.txt`.

For usage help, run `node main.mjs --help`.

# Assumptions

1. This parser can process version 2 default formatted logs. Any other version will be ignored by this parser, and a warning message will be displayed.
2. The CSV Lookup table only accepts the format of `dstport,protocol,tag`. Any other formats specified in the .csv file will be ignored, and a warning message will be displayed.
3. Only destination port + protocol counts will be added to the output file.
4. To get the IANA protocol number mapping, I used [this file](https://github.com/bahamas10/node-protocol-numbers/blob/master/protocol-numbers.js).` 

# Next Steps

Here is what I would like to do with this program next:

1. Build `stdin` and `stdout` functionality so that log messages can be tailed and passed directly in for processing.
2. Make the program dynamically handle different formats and versions depending on the structure of the log. It would be nice to process each line as it is fed into the program, and update the counts in real time.
3. Figure out a better way to maintain the IANA protocol numbers. For simplicity sake, I want to keep this program lightweight and free of dependencies as much as possible.
4. Fix the output processing. Since JavaScript strings are immutable, the string concatenation will need to be improved depending on the input size. 
5. Get clearer requirements around edge cases and modify the program to handle them.


