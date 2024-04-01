const { Router } = require("express");
const registerRouter = Router();

const {
  registerCoach,
  registerStudent,
} = require("../controllers/registerController");

//Create a new student
registerRouter.post(`/apprenants`, registerStudent);

//Create new coach
registerRouter.post(`/coaches`, registerCoach);

module.exports = registerRouter;
