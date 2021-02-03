const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");
// compile produces a giant object, here we desctructure it
// interface = ABI code

const web3 = new Web3(ganache.provider()); // new instance of web3
// defines which network we're connecting to.

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of accounts
  // Web3 is almost always a promise
  accounts = await web3.eth.getAccounts();

  // Deploying a contract
  // Create an instance using a Contract constructor function
  //// Interact with existing or deploy new
  // Web3 has more than one coin, we use eth
  // Deploy does NOT send anything. It prepares an object
  // Send is what deploys to the network

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
