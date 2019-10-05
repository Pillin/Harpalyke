const { OK } = require("http-status-codes");

const { divide } = require("../libraries/calculator");
const { divideOp } = require("../libraries/constants");
const { findOneOrCreate } = require("../libraries/models");

const CalculationSchema = require("../models/calculation");
const OperatorSchema = require("../models/operator");

const getAndSolveResult = async (req, res, next) => {
  const { firstValue, secondValue } = req.body;
  const result = divide(firstValue, secondValue);

  const operator = await findOneOrCreate(OperatorSchema)(divideOp);
  await CalculationSchema.create({ firstValue, secondValue, result, operator });

  res.status(OK).json({ status: "success", result });
  next();
};

module.exports = {
  getAndSolveResult
};
