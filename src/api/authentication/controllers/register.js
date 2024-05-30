const { pool } = require("../../../db/connectDb");

const register = async (req, res) => {
  const data = req.body;
  const query = `INSERT INTO users(username, email, pass, userrole)
  VALUES($1, $2, $3, $4) RETURNING *;`;
  const values = [data.name, data.email, data.password, data.role];
  try {
    const response = await pool.query(query, values);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send(error);
  }
};

module.exports = register;
