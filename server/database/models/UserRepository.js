const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "User" });
  }

  async create(user) {
    const {
      firstname,
      lastname,
      email,
      hashedPassword,
      isAdmin,
      registrationDate,
    } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashed_password, is_Admin, registration_date) VALUES (?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, email, hashedPassword, isAdmin, registrationDate]
    );
    return result.insertId;
  }
}

module.exports = UserRepository;
