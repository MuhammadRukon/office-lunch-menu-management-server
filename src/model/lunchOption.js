const lunchSchema = `
CREATE TABLE IF NOT EXISTS lunch_options (
    id SERIAL PRIMARY KEY,
    dish_name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    available_date DATE,
    CONSTRAINT unique_dish_per_date UNIQUE (dish_name, available_date)
  );`

module.exports = lunchSchema;
