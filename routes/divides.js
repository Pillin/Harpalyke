const express = require("express");

const router = express.Router();
const controller = require("../controllers/divide");

router.post("/", controller.getAndSolveResult);

module.exports = router;
