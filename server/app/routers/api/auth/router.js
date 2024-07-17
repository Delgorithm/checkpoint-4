// routers/api/auth/router.js

const express = require("express");

const router = express.Router();

const usersActions = require("../../../controllers/usersActions");
const { verifyUser } = require("../../../middleware/verifyUser");
const { verifyToken } = require("../../../middleware/verifyToken");
const {
  verifyHashPassword,
} = require("../../../middleware/verifyHashPassword");

router.post("/users", verifyHashPassword, usersActions.add);

router.post("/login", verifyUser);

router.use(verifyToken);

module.exports = router;
