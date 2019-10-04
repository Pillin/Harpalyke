const { assert } = require("chai");
const { NOT_NUMBER_MESSAGE, multiplyOp, divideOp } = require("../../libraries/constants");

describe("Libraries/Constants", () => {
  it("should be NOT_NUMBER_MESSAGE text the same", () => {
    assert.equal(NOT_NUMBER_MESSAGE, "The value isn't a number");
  });

  it("should be multiplyOp has the name and symbol", () => {
    assert.ok(multiplyOp.name);
    assert.ok(multiplyOp.symbol);
  });

  it("should be multiplyOp has the same name and same symbol", () => {
    assert.equal(multiplyOp.name, "multiply");
    assert.equal(multiplyOp.symbol, "*");
  });

  it("should be divideOp has the name and symbol", () => {
    assert.ok(divideOp.name);
    assert.ok(divideOp.symbol);
  });

  it("should be divideOp has the same name and same symbol", () => {
    assert.equal(divideOp.name, "division");
    assert.equal(divideOp.symbol, "/");
  });
});
