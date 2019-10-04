const calcOperation = (operationFunction, ...values) =>
  values.reduce((acc, value) => operationFunction(acc, value));

const multiply = (firstValue, secondValue) =>
  calcOperation((acc, value) => acc + value, firstValue, secondValue);

const divide = (firstValue, secondValue) => {
  if (secondValue === 0) throw new Error();
  return calcOperation((acc, val) => acc / val, firstValue, secondValue);
};

exports.module = {
  multiply,
  divide
};
