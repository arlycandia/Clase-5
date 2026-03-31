import { DataTypes } from "sequelize";
import Sequelize from "../config/db.js";
import sequelize from "../config/db.js";

const Course = sequelize.define(
  "courses",
  {
    id: {
      type: DataTypes.INTEGER,
      PrimaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true, //crear una columna llamada createAT y undateAT
  },
);

export default Course;
