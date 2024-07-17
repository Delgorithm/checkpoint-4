const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "Category",
      truncate: true,
    });
  }

  run() {
    const categories = [
      "Food",
      "Transport",
      "Health",
      "Entertainment",
      "Other",
    ];
    for (let i = 0; i < categories.length; i += 1) {
      const type = categories[i];
      const fakeCategory = { type, refName: `category_${i}` };
      this.insert(fakeCategory);
    }
  }
}

module.exports = CategorySeeder;
