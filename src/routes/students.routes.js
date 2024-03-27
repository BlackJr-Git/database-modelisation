const { Router } = require("express");

const {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  deleteAllStudents,
} = require("../controllers/studentController");

const studentRouter = Router();

//Get all students
studentRouter.get(`/`, getAllStudents);

// get one student by studentId
studentRouter.get(`/:StudentId`, getOneStudent);

//Create a new student
studentRouter.post(`/add`, createStudent);

//Update student by studentId
studentRouter.put(`/update/:StudentId`, updateStudent);

//Delete student by studentId
studentRouter.delete(`/delete/:StudentId`, deleteStudent);

//Delete all students
studentRouter.delete(`/delete`, deleteAllStudents);

module.exports = studentRouter;
