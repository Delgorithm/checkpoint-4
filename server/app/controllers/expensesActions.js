const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const { amount, userId, categoryId } = req.body;

    // console.log("Controller : ", req.body);

    const expensesRecord = await tables.Expenses.create({
      amount,
      userId,
      categoryId,
    });

    res.status(201).json({
      msg: "Upload successful",
      expensesRecord,
    });
  } catch (dbErr) {
    console.error("Error saving to database", dbErr);
    next(dbErr);
  }
};

const browse = async (req, res, next) => {
  try {
    const allExpenses = await tables.Expenses.readAll();
    res.json(allExpenses);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await tables.Expenses.delete(id);
    if (result) {
      res.status(200).json({ msg: "Expense deleted successfully" });
    } else {
      res.status(404).json({ msg: "Expense not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  browse,
  destroy,
};
