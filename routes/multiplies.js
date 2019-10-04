const express = require("express");

const router = express.Router();
const controller = require("../controllers/multiply");

router.post("/", controller.getAndSolveResult);

module.exports = router;
