const { BAD_REQUEST } = require("http-status-codes");
const { NOT_NUMBER_MESSAGE } = require("../libraries/constants");
const { isValidNumber } = require("../libraries/validation");

const validateParams = (req, res, next) => {
  const errors = [];
  const { firstValue, secondValue } = req.body;
  if (!isValidNumber(firstValue)) {
    errors.push({ name: "firstValue", message: NOT_NUMBER_MESSAGE });
  }
  if (!isValidNumber(secondValue)) {
    errors.push({ name: "secondValue", message: NOT_NUMBER_MESSAGE });
  }

  if (!errors.length) return next();
  res.status(BAD_REQUEST).json({
    status: "error",
    errors
  });
  return res.end();
};

module.exports = {
  validateParams
};
