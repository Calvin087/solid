- [Questions](#questions)
- [Contract Transaction - blank To field](#contract-transaction---blank-to-field)
- [Invoking Functions on contracts](#invoking-functions-on-contracts)
- [Prices](#prices)
- [Truffle](#truffle)

### Questions

- How do you retroactively make updates to a contract?

### Contract Transaction - blank To field

Leaving the 'to' field empty signifies that we're creating a new contract. So if we send a transaction into the network and we leave to blank. It means we're trying to create a new contract.

### Invoking Functions on contracts

Any time we want to change anything on the BChain, we have to submit a transaction - we then have to wait for that to be mined and approved, before it takes action.

- Calling is free
- Sending / changing data costs
  - Time
  - Money
  - Returns the transaction Hash

### Prices

Not easy to predict how much the gas will be. Non simple calcs like for loops for example.

If the gas limit is set too low, the function stops dead and nothing more executes.

- **gasPrice** - Amount the sender is willing to pay per unit to get transaction processed
- **startGas/gasLimit** - Units of gas that this transaction can consume.

```js

pragma solidity ^0.4.17;

contract Inbox { // like building a class

    string public message;
    // variable type / visibility / variable name
    // become persistent on the BChain
    // opposite of local vars that get thrown out after execution

    // ========

    // Spelt the same as the Class makes it a
    // constructor function.
    // Called immediately on deployment

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    // ========

    // Class methods

    // We're modifying the contract here so we can't
    // use the _view_ type in the name.

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // Name - Function Type - Return types
    // Public / Private
    // (View == Constant) Does this modify any contract data?
    // -- View means we're not modifying data
    // Pure means no side effects
    // Payable means we may be trying to send money

    // Returns tells us what is going to be returned.
    // Only used on view or constant fuctions
    function getMessage() public view returns (string) {
        return message
    }
}

```

### Truffle
