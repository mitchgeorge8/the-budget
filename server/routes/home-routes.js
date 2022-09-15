const router = require("express").Router();
const { User } = require("../models");

router.get("/", (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
});

module.exports = router;
