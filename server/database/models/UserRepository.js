const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "User" });
  }

  async create(user) {
    const { email, hashedPassword, isAdmin } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password, is_Admin) VALUES (?, ?, ?)`,
      [email, hashedPassword, isAdmin]
    );
    return result.insertId;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0]; // Assuming email is unique, there should be at most one row
  }
}

module.exports = UserRepository;
