const express = require("express");
const controller = require("../controllers/divide");
const { validateParams, validateZeroParam } = require("../middlewares/params");

const router = express.Router();

router.post("/", validateParams, validateZeroParam, controller.getAndSolveResult);

module.exports = router;
