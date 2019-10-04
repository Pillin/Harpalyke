const mongoose = require("mongoose");

const { Schema } = mongoose;

const OperatorSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true }
});

const model = mongoose.model("Operator", OperatorSchema);

module.exports = model;
