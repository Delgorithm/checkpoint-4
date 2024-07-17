const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");
const CategorySeeder = require("./CategorySeeder");

class ExpensesSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "Expenses",
      truncate: true,
      dependencies: [UserSeeder, CategorySeeder],
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const amount = this.faker.finance.amount();
      const date = this.faker.date.past();
      const userRef = this.getRef(`user_${Math.floor(Math.random() * 10)}`);
      const categoryRef = this.getRef(
        `category_${Math.floor(Math.random() * 5)}`
      );
      const description = this.faker.lorem.sentence();

      if (userRef && categoryRef) {
        const fakeExpense = {
          amount,
          date,
          user_id: userRef.insertId,
          category_id: categoryRef.insertId,
          description,
        };

        this.insert(fakeExpense);
      } else {
        console.error("User or Category reference not found");
      }
    }
  }
}

module.exports = ExpensesSeeder;
