const express = require("express");
const controller = require("../controllers/multiply");
const { validateParams } = require("../middlewares/params");

const router = express.Router();

router.post("/", validateParams, controller.getAndSolveResult);

module.exports = router;
