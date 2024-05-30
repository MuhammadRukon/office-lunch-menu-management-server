const { pool } = require("../../../db/connectDb");

const getMenu = (req, res) => {
  const {date} = req.body;
  const value = [date]
    pool
      .query("SELECT * FROM lunch_options WHERE available_date = $1;", value)
      .then((response) => res.send(response.rows))
      .catch((err) => {
        res.send("Error occurred while fetching users:"+ err);
        console.error("Error occurred while fetching users:"+ err);
      });
  }

  module.exports = getMenu;