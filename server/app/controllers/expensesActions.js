const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const { amount, category, userId, categoryId } = req.body;

    const expensesRecord = await tables.Expenses.create({
      amount,
      category,
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

module.exports = {
  add,
  browse,
};
