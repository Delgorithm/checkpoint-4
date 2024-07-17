const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/expensesActions");

router.post("/add", add);

module.exports = router;
