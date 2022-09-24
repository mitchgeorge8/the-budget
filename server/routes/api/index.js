const router = require("express").Router();
const userRoutes = require("./user-routes");
const budgetsRoutes = require("./budgets-routes");

router.use("/users", userRoutes);
router.use("/budgets", budgetsRoutes);

module.exports = router;
