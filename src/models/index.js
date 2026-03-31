import Course from "./Courses.js";
import Category from "./Category.js";

//Relacion 1 a muchos
//una categoria tiene muchos cursos

Category.hasMany(Course, { foreignKey: "categoryID", onDelete: "CASCADE" });

//un curso pertenece a una categoria

Course.belongsTo(Category, { foreignKey: "categoryID" });

export { Category, Course };
