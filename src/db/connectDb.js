const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.USER,
  database: process.env.DB_LOCAL,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const connectDb = async () => {
  console.log("Connecting to database");
  await pool.connect();
  console.log("Connected to database");
};

module.exports = {pool, connectDb};