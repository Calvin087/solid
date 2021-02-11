import Web3 from "web3";

window.ethereum.enable();

const currentProvider = window.web3.currentProvider;
const web3 = new Web3(currentProvider);

export default web3;
