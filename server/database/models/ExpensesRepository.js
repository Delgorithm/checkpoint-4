const AbstractRepository = require("./AbstractRepository");

class ExpensesRepository extends AbstractRepository {
  constructor() {
    super({ table: "Expenses" });
  }

  async create(expenses) {
    const { amount, userId, categoryId, description } = expenses;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (amount, user_id, category_id, description) VALUES (?, ?, ?, ?)`,
      [amount, userId, categoryId, description]
    );

    return result.insertId;
  }
}

module.exports = ExpensesRepository;
