const express = require("express");

const router = express.Router();

const {
  add,
  browse,
  destroy,
} = require("../../../controllers/expensesActions");

router.post("/", add);

router.get("/", browse);

router.delete("/:id", destroy);

module.exports = router;
