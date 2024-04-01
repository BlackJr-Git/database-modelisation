const { Router } = require("express");
const loginRouter = Router();

const { loginCoach, loginStudent } = require("../controllers/loginController");

//Get all machines
loginRouter.post(`/apprenants`, loginStudent);

// get one machine by machineId
loginRouter.post(`/coach`, loginCoach);

module.exports = loginRouter;
