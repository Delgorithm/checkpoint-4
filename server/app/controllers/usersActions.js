const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.User.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.User.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { email, hashedPassword, isAdmin } = req.body;
    const newUser = {
      email,
      hashedPassword,
      isAdmin: isAdmin || 0,
    };

    const result = await tables.User.create(newUser);

    res.status(201).json({
      msg: "User created successfully",
      userId: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
