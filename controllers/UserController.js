let UserModel = require("../models/UserModel");
let _ = require("lodash");
module.exports = (router) => {
  router.post("/Users/:id", async (req, res) => {
    try {
      let userObj = await UserModel.createUser(req.body, req.params);
      if (userObj) {
        res.status(200).send(userObj);
      } else {
        res.status(204).send([]);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  router.get("/Users/:start/:count", async (req, res) => {
    try {
      let userObj = await UserModel.getUsers(req.params);
      if (_.isEmpty(userObj)) {
        res.status(204).send([]);
      } else {
        res.status(200).send(userObj);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
