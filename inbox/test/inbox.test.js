const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.providor()); // new instance of web3
// defines which network we're connecting to.

class Car {
  par() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe("car class", () => {
  it("can park", () => {
    const car = new Car();
    assert.strictEqual(car.park(), "stopped");
  });
});
