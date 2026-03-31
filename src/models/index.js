import Course from "../models/Course.js";
import Category from "./Category.js";

// Relacion 1 a muchos
// Una Categoria tiene muchos cursos

Course.hasMany(Category, { foreignKey: "CategoryID", onDelete: "CASCADE " });

// UN CURSO PERTENECE

Course.belongsTo(Category, { foreignKey: "categoryID" });

export { Category, Course };
