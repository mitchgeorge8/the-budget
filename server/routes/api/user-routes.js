const router = require("express").Router();
const {
  createUser,
  login,
  logout,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").post(createUser);

// /api/users/login
router.route("/login").post(login);

// /api/users/logout
router.route("/logout").post(logout);

module.exports = router;
