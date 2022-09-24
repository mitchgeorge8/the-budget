const router = require("express").Router();
const { getBudgets } = require("../../controllers/budgets-controller");

// /api/budgets
router.route("/").get(getBudgets);

// /transactions
// router.route("/login").post(login);

// /reports
// router.route("/logout").post(logout);

// /settings
// router.route("/logout").post(logout);

module.exports = router;
