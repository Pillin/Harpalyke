const { assert } = require("chai");
const { INVALID_FIRST_VALUE, INVALID_SECOND_VALUE, INVALID_DIVISION_PER_ZERO } = require("../../libraries/constants");
const { multiply, divide } = require("../../libraries/calculator");

describe("Libraries/calculator", () => {
  describe("multiply", () => {
    it("correct multiply two interger numbers", () => {
      assert.equal(multiply(2, 3), 6);
    });
    it("Incorrect multiply at least one string numbers", () => {
      assert.equal(multiply("2", 3), 6);
    });
    it("correct multiply two float and interger numbers", () => {
      assert.equal(multiply(2.2, 3), 6.6);
    });
    it("correct multiply at least one zero number", () => {
      assert.equal(multiply(2.2, 0), 0);
    });
    it("correct multiply at least one negative number", () => {
      assert.equal(multiply(2.2, -3), -6.6);
    });
    it("Incorrect multiply at least one boolean", () => {
      assert.throws(() => multiply(true, 2.2), INVALID_FIRST_VALUE);
    });
    it("Incorrect multiply at least one undefined", () => {
      assert.throws(() => multiply(2.2, undefined), INVALID_SECOND_VALUE);
    });
    it("Incorrect multiply at least one NaN", () => {
      assert.throws(() => multiply(2.2, "NaN"), INVALID_SECOND_VALUE);
    });
  });
  describe("divide", () => {
    it("correct divide two interger numbers", () => {
      assert.equal(divide(4, 2), 2);
    });
    it("Incorrect divide at least one string numbers", () => {
      assert.equal(divide("4", 2), 2);
    });
    it("correct divide two float and interger numbers", () => {
      assert.equal(divide(6, 3), 2.0);
    });
    it("Incorrect divide at least one zero number", () => {
      assert.throws(() => divide(2.2, 0), INVALID_DIVISION_PER_ZERO);
    });
    it("correct divide at least one negative number", () => {
      assert.equal(divide(2.2, -3), -0.733);
    });
    it("Incorrect divide at least one boolean", () => {
      assert.throws(() => divide(true, 2.2), INVALID_FIRST_VALUE);
    });
    it("Incorrect divide at least one undefined", () => {
      assert.throws(() => divide(2.2, undefined), INVALID_SECOND_VALUE);
    });
    it("Incorrect divide at least one NaN", () => {
      assert.throws(() => divide(2.2, "NaN"), INVALID_SECOND_VALUE);
    });
  });
});
