const { Router } = require("express");

const {
  getAllCoaches,
  getOneCoach,
  createCoach,
  updateCoach,
  deleteCoach,
  deleteAllCoaches
} = require("../controllers/coachController");

const coachRouter = Router();

//Get all coaches
coachRouter.get(`/`, getAllCoaches);

// get one coach by coachId
coachRouter.get(`/:coachId`, getOneCoach);

//Create a new coach
coachRouter.post(`/add`, createCoach);

//Update coach by studentId
coachRouter.put(`/update/:coachId`, updateCoach);

//Delete coach by studentId
coachRouter.delete(`/delete/:coachId`, deleteCoach);

//Delete all coaches
coachRouter.delete(`/delete`, deleteAllCoaches);

module.exports = coachRouter ;
