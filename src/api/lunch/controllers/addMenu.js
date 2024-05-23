const { pool } = require("../../../db/connectDb");

const addMenu = (req, res) => {
  const data = req.body;
console.log(data);
  const name = data.dishName;
  const desc = data.description;
  const date = data.date;
  const query = `INSERT INTO lunch_options (dish_name, description, available_date)
        VALUES ($1, $2, $3);
        ;`;
  const values = [name, desc, date];

  pool
    .query(query, values)
    .then((response) => res.send(response))
    .catch((err) => {
      res.send(err);
    });
};

module.exports = addMenu;
