const { Router } = require("express");
const loginRouter = Router();

const { loginCoach, loginStudent } = require("../controllers/loginController");

//login student
loginRouter.post(`/apprenants`, loginStudent);

// login coach
loginRouter.post(`/coach`, loginCoach);

module.exports = loginRouter;
