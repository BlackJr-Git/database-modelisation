const { Router } = require("express");
const machineRouter = Router();

const {
  getAllMachines,
  getOneMachine,
  createMachine,
  updateMachine,
  deleteMachine,
  deleteAllMachines,
} = require("../controllers/machineController");

//Get all coaches
machineRouter.get(`/`, getAllMachines);

// get one coach by coachId
machineRouter.get(`/:coachId`, getOneMachine);

//Create a new coach
machineRouter.post(`/add`, createMachine);

//Update coach by studentId
machineRouter.put(`/update/:coachId`, updateMachine);

//Delete coach by studentId
machineRouter.delete(`/delete/:coachId`, deleteMachine);

//Delete all coaches
machineRouter.delete(`/delete`, deleteAllMachines);

module.exports = machineRouter;
