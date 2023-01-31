require("dotenv").config();

const { DB_Username, DB_Password, DB_Hostname, DB_Name, DB_Dialect } =
  process.env;
module.exports = {
  development: {
    username: DB_Username,
    password: DB_Password,
    database: DB_Name,
    host: DB_Hostname,
    dialect: DB_Dialect,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: DB_Hostname,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
