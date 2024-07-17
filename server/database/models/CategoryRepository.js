const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "Category" });
  }

  async create(Category) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (category) VALUES (?)`,
      [Category.category]
    );
    return result.insertId;
  }
}

module.exports = CategoryRepository;
