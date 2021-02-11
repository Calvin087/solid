import logo from "./logo.svg";
import web3 from "./web3";
import lottery from "./lottery";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const managerInfo = await lottery.methods.manager().call();
      const playersInfo = await lottery.methods.getPlayers().call();
      const balanceInfo = await web3.eth.getBalance(lottery.options.address);
      setManager(managerInfo);
      setPlayers(playersInfo);
      setBalance(balanceInfo);
    };
    getInfo();
  }, []);

  const onsubmit = async (formSubmission) => {
    formSubmission.preventDefault();
    const accounts = await web3.eth.getAccounts();
    setDisplayMessage("Waiting 30seconds for transaction to process");
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, "ether"),
    });
    setDisplayMessage("You have succesfully been entered");
  };

  const pickWinnerButton = async () => {
    const accounts = await web3.eth.getAccounts();
    setDisplayMessage("Waiting for success");
    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });
    setDisplayMessage("A winner has been picked");
  };

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}. </p>
      <p>There are {players.length} entered</p>
      <p>Competing to win {web3.utils.fromWei(balance, "ether")} ether.</p>
      <hr />
      <form onSubmit={onsubmit}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter </label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>
        <button>Enter</button>
      </form>
      <hr />
      <h4>Ready to pick a winner</h4>
      <button onClick={() => pickWinnerButton()}>Pick a winner!</button>
      <hr />
      <h1>{displayMessage}</h1>
    </div>
  );
}

export default App;
