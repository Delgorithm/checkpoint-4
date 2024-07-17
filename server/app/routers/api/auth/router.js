const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/usersActions");
const { verifyUser } = require("../../../middleware/verifyUser");
const { verifyToken } = require("../../../middleware/verifyToken");
const {
  verifyHashPassword,
} = require("../../../middleware/verifyHashPassword");

router.post("/users", verifyHashPassword, userActions.add);

router.post("/login", verifyUser);

router.use(verifyToken);

module.exports = router;
