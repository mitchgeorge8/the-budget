const { User } = require("../models");
require("dotenv").config();

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      req.session.loggedIn = true;
      req.session.userId = user.id;
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(400).json({ message: "Email address not found." });
        return;
      }

      const password = await user.isCorrectPassword(req.body.password);
      if (!password) {
        res.status(400).json({ message: "Incorrect password." });
        return;
      }

      req.session.loggedIn = true;
      req.session.userId = user.id;
      res.json({ message: "You are now logged in." });
      return;
    } catch (err) {
      console.log(err);
      res.status(500);
      return;
    }
  },
  logout(req, res) {
    if (req.session.loggedIn) {
      req.session.destroy((err) => {
        if (err) {
          res.status(400).json({ message: "Unable to log out." });
        }
        res.clearCookie(process.env.SESS_NAME);
      });
      return;
    } else {
      res.status(500);
      return;
    }
  },
  getUser: async (req, res) => {
    if (!req.session.loggedIn) {
      res.sendStatus(403);
      return;
    }
    try {
      const user = await User.findOne({ _id: req.session.userId });
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500);
      return;
    }
  },
};

module.exports = userController;
