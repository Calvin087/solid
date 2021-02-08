const HDWallerProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// Unlocking accounts and deciding which node to connect to
const provider = new HDWallerProvider(
  //   Mnumonic phrase from Meta test account
  "clean owner taste vessel admit emotion describe avocado frame eager future injury",
  // infura api key
  "https://rinkeby.infura.io/v3/cb456769fcae4577a92bb261ff6f3cc7"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["your mum"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to ", result.options.address);
};
deploy();
