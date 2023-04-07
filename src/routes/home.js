const { Router } = require("express");
const { getModuleInfo } = require("../services/module");

const HomeRouter = Router();
HomeRouter.get("/", (req, resp) => {
  return resp.json(getModuleInfo());
});

module.exports = {
  HomeRouter,
};
