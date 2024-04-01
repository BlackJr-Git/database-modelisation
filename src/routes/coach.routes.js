const { Router } = require("express");

const {
  getAllCoaches,
  getOneCoach,
  createCoach,
  updateCoach,
  deleteCoach,
  deleteAllCoaches
} = require("../controllers/coachController");

const auth = require("../middlewares/auth")

const coachRouter = Router();

//Get all coaches
coachRouter.get(`/`,auth, getAllCoaches);

// get one coach by coachId
coachRouter.get(`/:coachId`,auth, getOneCoach);

//Create a new coach
coachRouter.post(`/add`,auth, createCoach);

//Update coach by studentId
coachRouter.put(`/update/:coachId`,auth, updateCoach);

//Delete coach by studentId
coachRouter.delete(`/delete/:coachId`,auth, deleteCoach);

//Delete all coaches
coachRouter.delete(`/delete`,auth, deleteAllCoaches);

module.exports = coachRouter ;
