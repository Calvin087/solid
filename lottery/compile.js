const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Lottery"]; // 1 = number of contracts?
// We're now exporting all compiled contracts
// We then index into the contracts element with the key :Inbox
