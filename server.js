const express = require("express");

const app = express();

const pino = require("express-pino-logger")();
const logger = require("pino")();
const dotenv = require("dotenv");
const routes = require("./routes");
const databaseConfig = require("./config/database");

app.use(pino);
dotenv.config();
databaseConfig(logger);

app.use(express.json());
app.use("/api/", routes);
app.listen(3000, () => logger.info("server started"));
