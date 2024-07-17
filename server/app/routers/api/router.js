// routers/api/router.js

const express = require("express");

const router = express.Router();

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const expensesRouter = require("./expenses/router");

router.use("/expenses", expensesRouter);

module.exports = router;
