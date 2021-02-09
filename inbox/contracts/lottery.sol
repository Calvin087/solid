pragma solidity ^0.4.17;

contract Lottery {
    address public manager;

// dynamic array of addys only
    address[] public players;

// Constructor function, grabbing the global
// variable msg and taking off the sender address value
    function Lottery() public {
        manager = msg.sender;
    }

// This function expects money eth = payable

// Require(boolen/condition) ensures this
// passes, otherwise revert to start

    function enter() public payable {
        require(msg.value > .01 ether);

        players.push(msg.sender); 
    }

// View = not modifying any data or state
// Only returning info

// kecakk256 block and diff, now = date are global
// diff is a number
// kecakk256 returns a hash so we convert to int
// --"kecakk256" multiple params is deprecated--

    function random() private view returns(uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public {
        uint index = random() % players.length;
// This will return an adress in the array of players
// addresses have a built in function called transfer,
// that can send money to them. 

// this. refers to the current instance of this class
// Balance apparently is the amount of money contained within it
// --this.balance is deprecated--
        players[index].transfer(this.balance);
    }
}
