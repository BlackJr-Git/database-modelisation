const { Router } = require("express");
const loginRouter = Router();

const { loginCoach, loginStudent,test } = require("../controllers/loginController");
const authToken = require("../middlewares/auth")

//login student
loginRouter.post(`/apprenants`, loginStudent);

// login coach
loginRouter.post(`/coach`, loginCoach);


// login coach
loginRouter.post(`/test`,authToken, test);

module.exports = loginRouter;
