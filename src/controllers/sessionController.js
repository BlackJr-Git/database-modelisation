const { PrismaClient } = require("@prisma/client");

const { Session } = new PrismaClient();

/*
--------------------------
Retrieve one session from 
the database.
--------------------------
*/
async function getOneSession(req, res, next) {
  const { sessionId } = req.params;
  try {
    const session = await Session.findUnique({
      where: {
        id: +sessionId,
      },
    });

    if (session) {
      return res.send(session);
    }
    return res
      .status(404)
      .send(`La session avec l'id : ${sessionId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

/*
  --------------------------
  Retrieve all sessions from 
  the database.
  --------------------------
*/
async function getAllSessions(req, res, next) {
  try {
    const sessions = await Session.findMany();
    return res.status(200).send(sessions);
  } catch (error) {
    console.log(error);
    return res.status(404).send("erreur lors de la lectures de vos donnees");
  }
}

/*
    --------------------------
    Create and save a new session
    in the database
    --------------------------
*/
async function createSession(req, res, next) {
  const session = req.body;
  try {
    const newSession = await Session.create({ data: session });
    return res.send(newSession);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send("Les données de votre session sont incompletes");
  }
}

/*
    --------------------------
    Update a session by the id 
    in the request
    --------------------------
*/
async function updateSession(req, res, next) {
  const { sessionId } = req.params;
  try {
    const updateSession = await Session.update({
      where: {
        id: +sessionId,
      },
      data: {
        type: "courte",
      },
    });

    if (updateSession.id) {
      return res.status(201).send(updateSession);
    }
    return res
      .status(404)
      .send(`La session avec l'id : ${sessionId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la modifiacation des donnes");
  }
}

/*
    --------------------------
    Delete a session with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteSession(req, res, next) {
  const { sessionId } = req.params;

  try {
    const deleteSession = await Session.delete({
      where: {
        id: +sessionId,
      },
    });

    if (deleteSession.id) {
      return res.status(200).send(deleteSession);
    }

    return res
      .status(404)
      .send(`La session avec l'id : ${sessionId} n'existe pas`);
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .send(`La session avec l'id ${sessionId}  n'a pas été trouvée.`);
    } else {
      console.error(error);
      return res
        .status(500)
        .send("Une erreur est survenue lors de la suppression de la session.");
    }
  }
}

/*
    --------------------------
    Delete all session from 
    the database.
    --------------------------
*/
async function deleteAllSessions(req, res, next) {
  try {
    const deleteSessions = await Session.deleteMany({});

    return res.status(200).send(deleteSessions);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la supression des donnees");
  }
}

module.exports = {
  getOneSession: getOneSession,
  getAllSessions: getAllSessions,
  createSession: createSession,
  updateSession: updateSession,
  deleteSession: deleteSession,
  deleteAllSessions: deleteAllSessions,
};
