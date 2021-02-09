const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
// compile produces a giant object, here we desctructure it
// interface = ABI code

const provider = ganache.provider();
const web3 = new Web3(provider);
// new instance of web3
// defines which network we're connecting to.

const { interface, bytecode } = require("../compile");

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

  inbox.setProvider(provider);
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    // checking the the deployment worked, checking addy exists
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    // We use call to recieve info
    assert.strictEqual(message, "Hi there!");
  });

  it("changes the message", async () => {
    await inbox.methods
      .setMessage("noob")
      .send({ from: accounts[0], gas: "1000000" });
    // We use send to modify with who and how much
    // It returns the hash / receipt if success or error
    const message = await inbox.methods.message().call();
    assert.strictEqual(message, "noob");
  });
});
