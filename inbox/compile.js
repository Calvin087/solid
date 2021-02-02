const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"]; // 1 = number of contracts?
// We're now exporting all compiled contracts
// We then index into the contracts element with the key :Inbox
