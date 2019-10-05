const express = require("express");
const controller = require("../controllers/divide");
const { validateParams } = require("../middlewares/params");

const router = express.Router();

router.post("/", validateParams, controller.getAndSolveResult);

module.exports = router;
