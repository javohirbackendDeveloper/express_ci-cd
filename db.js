const { Pool } = require("pg");

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "postgres",
  password: "20ja08vo13hirbek",
  database: "lesson",
});

module.exports = pool;
