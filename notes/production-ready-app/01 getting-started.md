### Request Struct / Structs

Placing structs above all variables. Priority?

Defining a struct does not instanciate a variable. It provides a type. Like address or bool.

We don't have to include ref types when creating a new instance ie: `mapping`. But value types we do ie: ` `

```js

struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }

Request[] public requests;
// Dynamic array of requests structs/objects

```

Ugliest format ever, but here we go

```js

function createRequest(string description, uint value, address recipient) public restricted {
    //  Preps sol that we're going to create a variable of type Request
    //  variable name = newRequest / similar to 'address[] manager'
    //  = Request({}) is about creating the instance

        Request newRequest = Request({
           description: description,
           value: value,
           recipient: recipient;
           complete: false;
        });

        requests.push(newRequest)
    }

```

### Storage Space / Memory

It seems like there's a problem when two variables are holding the same data but point elsewhere (duplicate info), the **keyword** storage points the new variable to the exact same location - not duplicating, but pointing.

**Storage Keyword**
Pointing variables to the same place as an already existing location. Maintaining data between function calls.

```
int[] public numbers
int[] myArray = numbers <- x
int[] storage myArray = numbers <- o
```

**Memory Keyword**
More like RAM, once the function is finished, this data goes away/reset

Basically makes a clean copy for the duration of the function.

```
int[] public numbers
int[] myArray = numbers <- x
int[] memory myArray = numbers <- o
```

**Copies**
When passing a value to a function, we're making a copy, if the new function makes changes to that param it won't affect the original value. Storage / Memory

**Data**
Sometimes Storage and memory refer to where our contract is storing data, arrays, strings etc. Storage between function calls - like a hard drive - it remains in long term storage.

**Variables**
Sometimes it refers to how it's storing variables in the contract. Memory is a tempory space, like RAM. Function `arguments` are like Memory/Ram

### Saving Money / Gas

**Use mappings over arrays**
Having dynamic arrays with for loops will eventually cost tonnes of gas to calculate, basically big O problems.

Avoid arrays wherever possible.

Arrays -> Linear Time
Mapping/jsObjects -> Constant Time

### Mappings

Only good for single value lookups

**Keys are not stored...?**
We can't access keys, so we can't see what keys a mapping has.

The key goes into a hashing function and spits out the idex for the item required.

**Values a not iterable**
No for loops.

**All values exist**
If there is no value at the given index, instead of returning `undefined`, we'll be given a default value. Depending on the type of values we're storing ie: Map of strings, we'd get a default empty string.

### Factory Contracts

**Idea**
The concept of deploying a contract that deploys other contracts.

**Cost**
Users pay for the deployment costs and the factory deploys a new instance.

**References**
The factory can track the list of deployed contracts online

**msg.sender**
The sender now becomes the factory contract so we need to pass in the person interacting with the factory as an param to create a new contract.

```js

contract CampaignFactory {
   address[] public deployedCampaignns;

   function createCampaign(uint minimum) public {
       address newCapaign = new Campaign(minimum, msg.sender);
       deployedCampaignns.push(newCapaign);
   }
}

```
