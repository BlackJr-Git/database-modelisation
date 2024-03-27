const { Router } = require("express");
const sessionRouter = Router();

const {
  getAllSessions,
  getOneSession,
  createSession,
  updateSession,
  deleteSession,
  deleteAllSessions,
} = require("../controllers/sessionController");

//Get all sessions
sessionRouter.get(`/`, getAllSessions);

// get one session by sessionId
sessionRouter.get(`/:sessionId`, getOneSession);

//Create a new session
sessionRouter.post(`/add`, createSession);
 
//Update session by sessionId
sessionRouter.put(`/update/:sessionId`, updateSession);

//Delete session by sessionId
sessionRouter.delete(`/delete/:sessionId`, deleteSession);

//Delete all sessions
sessionRouter.delete(`/delete`, deleteAllSessions);



module.exports = sessionRouter;
