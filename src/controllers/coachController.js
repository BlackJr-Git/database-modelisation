const { PrismaClient } = require("@prisma/client");

const { Coach } = new PrismaClient();

/*
--------------------------
Retrieve one coach from 
the database.
--------------------------
*/
async function getOneCoach(req, res, next) {
  const { coachId } = req.params;
  try {
    const coach = await Coach.findUnique({
      where: {
        id: +coachId,
      },
    });

    if (coach.id) {
      return res.send(coach);
    }
    return res
      .status(404)
      .send(`La cohorte avec l'id : ${coachId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

/*
  --------------------------
  Retrieve all coaches from 
  the database.
  --------------------------
*/
async function getAllCoaches(req, res, next) {
  try {
    const coaches = await Coach.findMany();
    return res.status(200).send(coaches);
  } catch (error) {
    console.log(error);
    return res.status(404).send("erreur lors de la lectures de vos donnees");
  }
}

/*
    --------------------------
    Create and save a new coach
    in the database
    --------------------------
*/
async function createCoach(req, res, next) {
  const coach = req.body;
  try {
    const newCoach = await Coach.create({ data: coach });
    return res.send(newCoach);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send("Les données de votre coach sont incompletes");
  }
}

/*
    --------------------------
    Update a coach by the id 
    in the request
    --------------------------
*/
async function updateCoach(req, res, next) {
  const { coachId } = req.params;
  try {
    const updateCoach = await Coach.update({
      where: {
        id: +coachId,
      },
      data: {
        description: "Marketing Digital",
      },
    });

    if (updateCoach.id) {
      return res.status(201).send(updateCoach);
    }
    return res
      .status(404)
      .send(`L'apprenant avec l'id : ${coachId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la modification des donnes");
  }
}

/*
    --------------------------
    Delete a coach with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteCoach(req, res, next) {
  const { coachId } = req.params;

  try {
    const deleteCoach = await Coach.delete({
      where: {
        id: +coachId,
      },
    });

    if (deleteCoach.id) {
      return res.status(200).send(deleteCoach);
    }

    return res
      .status(404)
      .send(`Le coach avec l'id : ${coachId} n'existe pas`);
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .send(`Le coach avec l'id ${coachId}  n'a pas été trouvée.`);
    } else {
      console.error(error);
      return res
        .status(500)
        .send("Une erreur est survenue lors de la suppression du coach.");
    }
  }
}

/*
    --------------------------
    Delete all coaches from 
    the database.
    --------------------------
*/
async function deleteAllCoaches(req, res, next) {
  try {
    const deleteCoaches = await Coach.deleteMany({});

    return res.status(200).send(deleteCoaches);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la supression des donnees");
  }
}

module.exports = {
  getOneCoach: getOneCoach,
  getAllCoaches: getAllCoaches,
  createCoach: createCoach,
  updateCoach: updateCoach,
  deleteCoach: deleteCoach,
  deleteAllCoaches: deleteAllCoaches,
};
