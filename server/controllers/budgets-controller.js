const { User } = require("../models");

const budgetsController = {
  getBudgets: async (req, res) => {
    console.log(req.session);

    if (!req.session.loggedIn) {
      res.redirect("/login");
    }

    // try {
    //   const user = await User.create(req.body);
    //   req.session.loggedIn = true;
    //   req.session.userId = user.id;
    //   res.json(user);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  },
  getTransactions: async (req, res) => {
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
        res.json({ message: "Logout successful." });
        res.redirect("/login");
      });
    } else {
      res.status(404).end();
    }
  },
};

module.exports = budgetsController;
