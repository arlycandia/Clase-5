import { DataType, DataTypes } from "sequelize";
import sequelize from "../config/db";

const Category = sequelize.define("categories", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  name: { type: DataTypes.STRING(60), allowNull: false },
});
