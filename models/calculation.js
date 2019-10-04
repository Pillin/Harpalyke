const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalculationSchema = new Schema({
  firstValue: { type: Number, required: true },
  secondValue: { type: Number, required: true },
  result: { type: Number, required: true },
  operator: { type: Schema.Types.ObjectId, ref: "Operator", required: true }
});

module.exports = mongoose.model("Calculation", CalculationSchema);
