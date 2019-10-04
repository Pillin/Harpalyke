const { OK } = require("http-status-codes");
const { multiply } = require("../libraries/calculator");
const { multiplyOp } = require("../libraries/constants");

const CalculationSchema = require("../models/calculation");
const OperatorSchema = require("../models/operator");

const getAndSolveResult = async (req, res, next) => {
  const { firstValue, secondValue } = req.body;
  const result = multiply(firstValue, secondValue);

  const operator = await OperatorSchema.findOneOrCreate(multiplyOp);
  await CalculationSchema.save({ firstValue, secondValue, result, operator });

  res.status(OK).json({ status: "success", result });
  next();
};

module.exports = {
  getAndSolveResult
};
