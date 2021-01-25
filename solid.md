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
