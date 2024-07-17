const AbstractRepository = require("./AbstractRepository");

class ExpensesRepository extends AbstractRepository {
  constructor() {
    super({ table: "Expenses" });
  }

  async create(expense) {
    const { amount, date, userId, categoryId, description } = expense;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (amount, date, user_id, category_id, description) VALUES (?, ?, ?, ?, ?)`,
      [amount, date, userId, categoryId, description]
    );

    return result.insertId;
  }
}

module.exports = ExpensesRepository;
