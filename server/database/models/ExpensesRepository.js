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

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT Expenses.id, Expenses.amount, Expenses.date, Expenses.user_id, Expenses.category_id, Expenses.description, Category.type AS category
      FROM ${this.table}
      INNER JOIN Category ON Expenses.category_id = Category.id
      ORDER BY Expenses.id DESC
    `);
    return rows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? `,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = ExpensesRepository;
