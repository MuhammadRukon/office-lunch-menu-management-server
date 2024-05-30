const { pool } = require("./../../../db/connectDb.js");

const selectLunch = async (req, res) => {
  const { lunch_id, employee_id } = req.body;
  const values = [lunch_id, employee_id];
  console.log(lunch_id, employee_id);
  console.log(values);
  const query = `INSERT INTO employee_choice(lunch_id, employee_id)
    VALUES($1, $2) RETURNING *;`;
    const response = await pool.query(query, values);
    res.send(response);
    console.log(response);
};

module.exports = selectLunch;
