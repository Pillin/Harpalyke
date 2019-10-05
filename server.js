const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const pino = require("express-pino-logger")();
const logger = require("pino")();
const dotenv = require("dotenv");
const routes = require("./routes");
const databaseConfig = require("./config/database");

const { PORT, NODE_ENV } = process.env;
if (NODE_ENV !== "test") {
  app.use(pino);
} else {
  logger.info = data => data;
}

dotenv.config();
databaseConfig(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/", routes);
const server = app.listen(PORT, () => logger.info("server started"));
module.exports = { app, server };
