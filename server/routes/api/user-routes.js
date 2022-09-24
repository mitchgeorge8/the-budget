const router = require("express").Router();
const {
  createUser,
  login,
  logout,
  getUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").post(createUser);

// /api/users/login
router.route("/login").post(login);

// /api/users/logout
router.route("/logout").post(logout);

// /api/users/user
router.route("/user").get(getUser);

module.exports = router;
