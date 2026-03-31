import { Sequelize } from "sequelize";
import "dotenv/config";

const { DB_USER, DB_DATABASE, DB_PASSWORD, DB_HOST, DB_PORT, DIALECT } =
  process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST || "localhost",
  port: DB_PORT || 5432,
  dialect: DIALECT || "postgres", // aquí defines el motor
  logging: false,
});

export default sequelize;
