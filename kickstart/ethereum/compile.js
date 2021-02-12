const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Step 1 from Plan
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); // deletes the build folder

//  Step 2 from Plan
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// Step 3 from Plan
const output = solc.compile(source, 1).contracts;
// Output will have 2 objects, Campaign + Campaign Factory

fs.ensureDirSync(buildPath);
// checks to see if dir/folder exists, if not, creates it

// Step 4

for (let contract in output) {
  // looping out the contracts in output, saving them individually
  fs.outputFileSync(
    path.resolve(buildPath, contract + ".json"), // file name
    output[contract] // file data, lookup contract in output variable
  );
}
