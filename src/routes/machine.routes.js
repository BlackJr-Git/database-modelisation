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

//Get all machines
machineRouter.get(`/`, getAllMachines);

// get one machine by machineId
machineRouter.get(`/:machineId`, getOneMachine);

//Create a new machine
machineRouter.post(`/add`, createMachine);

//Update machine by machineId
machineRouter.put(`/update/:machineId`, updateMachine);

//Delete machine by machineId
machineRouter.delete(`/delete/:machineId`, deleteMachine);

//Delete all machines
machineRouter.delete(`/delete`, deleteAllMachines);

module.exports = machineRouter;
