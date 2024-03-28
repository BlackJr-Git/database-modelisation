const { Router } = require("express");
const cohorteRouter = Router();

const {
  getAllCohortes,
  getOneCohorte,
  createCohorte,
  updateCohorte,
  deleteCohorte,
  deleteAllCohortes,
} = require("../controllers/cohorteController");

//Get all cohorte
cohorteRouter.get(`/`, getAllCohortes);

// get one coach by cohorteId
cohorteRouter.get(`/:cohorteId`, getOneCohorte);

//Create a new cohorte
cohorteRouter.post(`/add`, createCohorte);

//Update cohorte by cohorteId
cohorteRouter.put(`/update/:cohorteId`, updateCohorte);

//Delete cohorte by cohorteId
cohorteRouter.delete(`/delete/:cohorteId`, deleteCohorte);

//Delete all cohortes
cohorteRouter.delete(`/delete`, deleteAllCohortes);

module.exports = cohorteRouter;
