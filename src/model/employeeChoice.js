const choiceSchema = `
CREATE TABLE IF NOT EXISTS employee_choice (
    id SERIAL PRIMARY KEY,
    lunch_id INT NOT NULL,
    employee_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES users(id),
    FOREIGN KEY (lunch_id) REFERENCES lunch_options(id)
  );`

module.exports = choiceSchema;
