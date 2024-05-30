const { Pool } = require("pg");
require("dotenv").config();
const choiceSchema = require("./../model/employeeChoice");
const lunchSchema = require("./../model/lunchOption");
const userSchema = require("./../model/userModel");

const createDatabaseQuery = `
  CREATE DATABASE ${process.env.DB_LOCAL}
  WITH OWNER = ${process.env.USER}
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1;
`;

const initialPool = new Pool({
  user: process.env.USER,
  database: "postgres",
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DB_LOCAL,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});
const createTablesQuery = userSchema + lunchSchema + choiceSchema;
// connect to postgres db
const connectDb = async () => {
  try {
    console.log("Connecting to database...");
    await pool.connect();
    console.log("Connected to database");
  } catch (error) {
    if (error.code === "3D000") {
      console.log("Database does not exist. Creating database...");
      await createDatabase();
    } else {
      throw error;
    }
  }
};

// create db if doesn't exist
const createDatabase = async () => {
  const client = await initialPool.connect();
  await client.query(createDatabaseQuery);
  createTables();
  console.log("database created successfully");
  
  connectDb();
};
const createTables = async()=>{
  const client = await pool.connect();
  const res = await client.query(createTablesQuery);
  console.log(res);
  console.log("tables successfully created");
}


module.exports = { pool, connectDb };
