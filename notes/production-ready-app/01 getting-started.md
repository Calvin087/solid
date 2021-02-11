### Request Struct / Structs

Placing structs above all variables. Priority?

Defining a struct does not instanciate a variable. It provides a type. Like address or bool.

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
    //  = Request({}) is about creating it

        Request newRequest = Request({
           description: description,
           value: value,
           recipient: recipient;
           complete: false;
        });

        requests.push(newRequest)
    }

```
