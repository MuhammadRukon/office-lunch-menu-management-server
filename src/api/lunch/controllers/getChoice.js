const { pool } = require("./../../../db/connectDb.js");

const getChoice = async (req, res) => {
  const query = `SELECT 
    employee_choice.id AS id,
    users.username AS user_name,
    users.email AS user_email,
    users.id AS user_id,
    lunch_options.id AS dish_id,
    lunch_options.dish_name AS dish_name,
    lunch_options.description AS dish_desc,
    lunch_options.available_date
    FROM 
    employee_choice
    INNER JOIN 
    users ON employee_choice.employee_id = users.id
    INNER JOIN 
    lunch_options ON employee_choice.lunch_id = lunch_options.id;`;
  const response = await pool.query(query);
  res.send(response);
};

module.exports = getChoice;
