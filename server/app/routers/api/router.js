const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const expensesRouter = require("./expenses/router");

router.use("/expenses", expensesRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
