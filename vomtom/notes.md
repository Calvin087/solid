## Checks effects interaction pattern

Look this up for security situations. Apparently to do with the re-entry.

- Check if you can do something
- Produce the effect
- Interaction with outside addresses etc is last.

### Variables

All variables are initialised as their default, so false, "", 0.

There is no undefined or null in solidity

### Wrap Around

Numbers that go past -0 become another long number. This an automatic wrap around.

### Memory / Storage

Memory is typically cheaper than storage in terms of wei.

### Fixed Points

These are not supported apparently. If you need decimals in the contract.

### Strings

Are treated as arrays of data, you can't index into a specific character in a string.

Strings are also expensive to save and there are no real built in methods that work with them in solidity.

### Balance syntax update

```js

function getBalance() public view returns(uint) {
    return address(this).balance
}

```

```js

uint public balanceReceived;

function receiveMoney() public payable {
    balanceReceived += msg.value
}

```

```js

function withdrawMoney() public {
    address payable to = msg.sender

    to.transfer(this.getBalance())
}

```

### Start Stop Pause

**Setting th owner of a contract**
set the owner in the constructor function.

```js

address owner;

constructor() public {
    owner = msg.sender;
}

require(msg.sender == owner, "error messages here")
```

**Pausing**

```js
bool public paused; //false by default

function setPaused(bool _paused) public {
    require(msg.sender == owner, "you are not owner")
    pause = _paused
}

function withdrawMoney() public {
    require(msg.sender == owner, "you are not owner")
    require(!paused "contract is paused")
    to.transfer(this.getBalance())
}
```

**Destroying a smart contract**
They can't be completly removed from a block.

Calling an internal function called self destruct. It gets one argument which is an address that receives all the remaining funds upon destruction.

```js

function destroySmartContract(address payable _to) public {
    require(msg.sender == owner, "you are not owner")
    selfdestruct(_to)
}

```

### Sending Partial amounts

```js

function withdrawPartialFunds(address payable _to, uint _amount) public {
    require(balanceReceived[msg.sender] >= _amount, "not enough funds");
    balanceReceived[msg.sender] -= _amount;
    _to.transer(_amount);
}

```

### Errors +Atomic

When errors occur (even after a state change), everything is reverted back to it's original state. You can NOT catch errors in Solidity contracts.

**Revert op (0xfd) for Require**
When the error occurs, the remaining gas is returned to the user.

**Invalid op (0xfe) for Assert**
This consumes the gas. Assert should only really be triggered if something crazy happens otherwise shouldn't come into play.
