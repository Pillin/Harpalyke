const express = require("express");
const app = express();
const routes = require("./routes");
const dotenv = require("dotenv");
const databaseConfig = require("./config/database");

dotenv.config();
databaseConfig();

app.use(express.json());
app.use("/api/", routes);
app.listen(3000, () => console.log("server started"));
