const routes = require("express").Router();
const multiplyRouters = require("./multiplies");
const divideRouters = require("./divides");

routes.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

routes.use("/multiplies/", multiplyRouters);
routes.use("/divides/", divideRouters);

module.exports = routes;
