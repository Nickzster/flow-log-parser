/* 
flow log parser
Written in node v20.17.0
*/
import path from "path";
import { promises as fs } from "fs";
import { protocol_numbers } from "./iana-protocol-numbers.mjs";
// log file utilities

const AVAILABLE_FIELDS_DEFAULT = [
  "version",
  "account-id",
  "interface-id",
  "srcaddr",
  "dstaddr",
  "srcport",
  "dstport",
  "protocol",
  "packets",
  "bytes",
  "start",
  "end",
  "action",
  "log-status",
];

const handleFields = (key, value) => {
  if (key === "protocol") {
    try {
      const IANAInt = parseInt(value, 10);
      const protocolName = protocol_numbers[IANAInt].name;
      return protocolName;
    } catch (err) {
      return value;
    }
  }
  return value;
};

const parseLineFromLog = (line, format) => {
  const linesArr = line.trim().split(" ");

  if (linesArr.length !== format.length) {
    console.warn("WARNING: skipping flow log is not in default format");
    return null;
  }

  return linesArr.reduce((acc, line, idx) => {
    const key = format[idx];
    const value = handleFields(key, line);
    acc[key] = value;
    return acc;
  }, {});
};

// parseLog parses an input log file and returns an array of log lines.
// Each line is parsed (parseLine) and builds an object for each field in a single log line.
// and returns it as an array consisting of these data structures.
// Any log lines that do not match the default format are skipped.
const parseLog = (buf) => {
  const logfile = buf.toString();
  return logfile
    .trim()
    .split("\n")
    .map((line) => parseLineFromLog(line, AVAILABLE_FIELDS_DEFAULT))
    .filter((parsed) => parsed !== null);
};

// lookup table utilities

const serialize = (k, v) => `${k},${v}`.toLowerCase();
const LOOKUP_DEFAULT_FORMAT = ["dstport", "protocol", "tag"];

const parseCSVLine = (line, format) => {
  const linesArr = line.trim().split(",");

  if (linesArr.length !== format.length) {
    console.warn(
      "WARNING: skipping lookup condition that is not in default format!",
    );
    console.log(JSON.stringify(line));
    return null;
  }

  if (linesArr[0] === "" || linesArr[1] === "" || linesArr[2] === "") {
    console.warn("WARNING: skipping lookup condition with empty values!");
    console.log(JSON.stringify(line));
    return null;
  }

  return {
    key: serialize(linesArr[0], linesArr[1]),
    value: linesArr[2],
  };
};

// buildLookupTable parses a lookup csv file and builds a lookup table in memory.
// It parses each line (parseCSVLine) and builds a key/value pair mapping.
// Any malformed lines are skipped.
const buildLookupTable = (buf) => {
  const csv = buf.toString();
  return csv
    .trim()
    .split("\n")
    .reduce((acc, line) => {
      const parsed = parseCSVLine(line, LOOKUP_DEFAULT_FORMAT);
      if (parsed !== null) acc[parsed.key] = parsed.value;
      return acc;
    }, {});
};

// command line utilities
const HELP_TEXT = `
usage: node main.mjs [OPTIONS]
  --lookup-file: specify a lookup file. Must be in same directory as program. Defaults to example.csv
  --output-file: specify an output file. Must be in the same directory as program. Defaults to output.txt
  --logfile: specify a log file to process. Must be in the same directory as program. Defaults to example.log
`;

const parseArgs = async () => {
  const processedArgs = {
    logfile: "example.log",
    lookup: "example.csv",
    output: "processed.txt",
  };

  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i];
    switch (arg) {
      case "--logfile": {
        processedArgs.logfile = process.argv[i + 1];
        break;
      }

      case "--lookup-file": {
        processedArgs.lookup = process.argv[i + 1];
        break;
      }

      case "--output-file": {
        processedArgs.output = process.argv[i + 1];
        break;
      }

      case "--help": {
        console.log(HELP_TEXT);
        process.exit(0);
      }

      default:
        continue;
    }
  }

  try {
    const [logfileIsValid, lookupIsValid, outputIsValid] = await Promise.all([
      fs.lstat(path.join(process.cwd(), processedArgs.logfile)),
      fs.lstat(path.join(process.cwd(), processedArgs.lookup)),
      fs.lstat(path.join(process.cwd(), processedArgs.output)),
    ]);

    if (!logfileIsValid.isFile()) {
      console.error("bad logfile was given", processedArgs.logfile);
      return null;
    }

    if (!lookupIsValid.isFile()) {
      console.error("bad lookup was given", processedArgs.lookup);
      return null;
    }

    if (!outputIsValid.isFile()) {
      console.error("bad output file was given", processedArgs.output);
      return null;
    }

    return processedArgs;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// entry point
async function main() {
  const parsedArgs = await parseArgs();

  if (parsedArgs === null) process.exit(1);

  const LOGFILE = parsedArgs.logfile;
  const LOOKUP = parsedArgs.lookup;
  const OUTFILE = parsedArgs.output;

  console.log("reading lookup file", path.join(process.cwd(), LOOKUP));
  const lookupBuffer = await fs.readFile(path.join(process.cwd(), LOOKUP));

  console.log("reading log file", path.join(process.cwd(), LOGFILE));
  const logfileBuffer = await fs.readFile(path.join(process.cwd(), LOGFILE));

  const tagCounts = new Map([["untagged", 0]]);
  const portProtocolCounts = new Map();

  const logs = parseLog(logfileBuffer);
  const table = buildLookupTable(lookupBuffer);

  logs.forEach((log) => {
    const portProtocolKey = serialize(log.dstport, log.protocol);
    let tag = table[portProtocolKey];

    // count tags
    if (tag === undefined) tag = "untagged";
    if (!tagCounts.get(tag)) tagCounts.set(tag, 0);
    tagCounts.set(tag, tagCounts.get(tag) + 1);

    // count protocols
    if (!portProtocolCounts.get(portProtocolKey))
      portProtocolCounts.set(portProtocolKey, 0);

    portProtocolCounts.set(
      portProtocolKey,
      portProtocolCounts.get(portProtocolKey) + 1,
    );
  });

  let output = "";

  output += "Tag counts\n";
  for (let [k, v] of tagCounts) {
    output += `${k}=${v}\n`;
  }

  output += "\nDest. Port, Protocol counts\n";
  for (let [k, v] of portProtocolCounts) {
    output += `${k}=${v}\n`;
  }

  const outFile = path.join(process.cwd(), OUTFILE);
  console.log("writing results to", outFile);
  await fs.writeFile(outFile, output);

  process.exit(0);
}

main();
