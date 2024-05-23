const { pool } = require("../../../db/connectDb");

const getMenu = (req, res) => {
    pool
      .query("SELECT * FROM lunch_options;")
      .then((response) => res.send(response.rows))
      .catch((err) => {
        res.send("Error occurred while fetching users:"+ err);
        console.error("Error occurred while fetching users:"+ err);
      });
  }

  module.exports = getMenu;