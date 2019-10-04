const routes = require("express").Router();
const multiplyRouters = require("./multiplies");
const divideRouters = require("./divides");

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

routes.use("/multiplies/", multiplyRouters);
routes.use("/divides/", divideRouters);

module.exports = routes;
