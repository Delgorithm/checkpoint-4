const express = require("express");

const router = express.Router();

const { add, browse } = require("../../../controllers/expensesActions");

router.post("/", add);

router.get("/", browse);

module.exports = router;
