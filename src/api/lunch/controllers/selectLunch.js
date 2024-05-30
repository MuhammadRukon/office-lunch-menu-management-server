const { pool } = require("./../../../db/connectDb.js");

const selectLunch = async (req, res) => {
  const { lunch_id, employee_id } = req.body;
  const values = [lunch_id, employee_id];
  const query = `INSERT INTO employee_choice(lunch_id, employee_id)
    VALUES($1, $2) RETURNING *;`;
  try {
    const response = await pool.query(query, values);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = selectLunch;
