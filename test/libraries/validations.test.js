const { assert } = require("chai");
const { isValidNumber } = require("../../libraries/validation");

describe("Libraries/Validation", () => {
  it("isValidNumber is correct with number string", () => {
    assert.ok(isValidNumber("1"));
  });
  it("isValidNumber is correct with decimal string, delimiter .", () => {
    assert.ok(isValidNumber("1.0"));
  });
  it("isValidNumber is correct with negative number string", () => {
    assert.ok(isValidNumber("-1"));
  });
  it("isValidNumber is correct with number", () => {
    assert.ok(isValidNumber(1));
  });
  it("isValidNumber is correct with decimal, delimiter .", () => {
    assert.ok(isValidNumber(1.0));
  });
  it("isValidNumber is correct with negative number", () => {
    assert.ok(isValidNumber(-1));
  });
  it("isValidNumber is not correct with decimal string, delimiter ,", () => {
    assert.equal(isValidNumber("1,0"), false);
  });
  it("isValidNumber is not correct with symbols", () => {
    assert.equal(isValidNumber("%"), false);
  });
  it("isValidNumber is not correct with letter", () => {
    assert.equal(isValidNumber("a"), false);
  });
  it("isValidNumber is not correct with space", () => {
    assert.equal(isValidNumber(" "), false);
  });
  it("isValidNumber is not correct with NaN", () => {
    assert.equal(isValidNumber("NaN"), false);
  });
  it("isValidNumber is not correct with undefined", () => {
    assert.equal(isValidNumber(undefined), false);
  });
  it("isValidNumber is not correct with boolean - false", () => {
    assert.equal(isValidNumber(false), false);
  });
  it("isValidNumber is not correct with boolean - true", () => {
    assert.equal(isValidNumber(true), false);
  });
});
