const assert = require("assert");
const Libraries = require("../../libraries/constants");

describe("Libraries/Constants", () => {
  it("should be NOT_NUMBER_MESSAGE text the same", () => {
    assert.equal(Libraries.NOT_NUMBER_MESSAGE, "The value isn't a number");
  });
});
