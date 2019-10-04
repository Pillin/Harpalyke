const { isValidNumber } = require("./validation");
const { DIGIT_NUMBERS, INVALID_FIRST_VALUE, INVALID_SECOND_VALUE, INVALID_DIVISION_PER_ZERO } = require("./constants");

const calcOperation = (operationFunction, ...values) => values.reduce((acc, value) => operationFunction(acc, value));

const multiply = (firstValue, secondValue) => {
  if (!isValidNumber(firstValue)) throw new Error(INVALID_FIRST_VALUE);
  if (!isValidNumber(secondValue)) throw new Error(INVALID_SECOND_VALUE);
  return calcOperation((acc, value) => acc * value, firstValue, secondValue).toFixed(DIGIT_NUMBERS);
};

const divide = (firstValue, secondValue) => {
  if (!isValidNumber(firstValue)) throw new Error(INVALID_FIRST_VALUE);
  if (!isValidNumber(secondValue)) throw new Error(INVALID_SECOND_VALUE);
  if (secondValue === 0) throw new Error(INVALID_DIVISION_PER_ZERO);
  return calcOperation((acc, val) => acc / val, firstValue, secondValue).toFixed(DIGIT_NUMBERS);
};

module.exports = {
  multiply,
  divide
};
