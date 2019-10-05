const { BAD_REQUEST } = require("http-status-codes");
const { NOT_NUMBER_MESSAGE, INVALID_DIVISION_PER_ZERO } = require("../libraries/constants");
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

const validateZeroParam = (req, res, next) => {
  const errors = [];
  const { secondValue } = req.body;
  if (parseInt(secondValue, 2) === 0) {
    errors.push({ name: "secondValue", message: INVALID_DIVISION_PER_ZERO });
  }
  if (!errors.length) return next();
  res.status(BAD_REQUEST).json({
    status: "error",
    errors
  });
  return res.end();
};

module.exports = {
  validateParams,
  validateZeroParam
};
