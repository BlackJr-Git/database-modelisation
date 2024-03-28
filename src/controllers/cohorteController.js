const { PrismaClient } = require("@prisma/client");

const { Cohorte } = new PrismaClient();

/*
--------------------------
Retrieve one cohorte from 
the database.
--------------------------
*/
async function getOneCohorte(req, res, next) {
  const { cohorteId } = req.params;
  try {
    const cohorte = await Cohorte.findUnique({
      where: {
        id: +cohorteId,
      },
    });

    if (cohorte) {
      return res.send(cohorte);
    }
    return res
      .status(404)
      .send(`La cohorte avec l'id : ${cohorteId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

/*
  --------------------------
  Retrieve all cohortes from 
  the database.
  --------------------------
*/
async function getAllCohortes(req, res, next) {
  try {
    const cohortes = await Cohorte.findMany({
      include: {
        Apprenant: {}
      }
    });
    return res.status(200).send(cohortes);
  } catch (error) {
    console.log(error);
    return res.status(404).send("erreur lors de la lectures de vos donnees");
  }
}

/*
    --------------------------
    Create and save a new cohorte
    in the database
    --------------------------
*/
async function createCohorte(req, res, next) {
  const cohorte = req.body;
  try {
    const newCohorte = await Cohorte.create({ data: cohorte });
    return res.send(newCohorte);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send("Les données de votre session sont incompletes");
  }
}

/*
    --------------------------
    Update a cohorte by the id 
    in the request
    --------------------------
*/
async function updateCohorte(req, res, next) {
  const { cohorteId } = req.params;
  try {
    const updateCohorte = await Cohorte.update({
      where: {
        id: +cohorteId,
      },
      data: {
        description: "Marketing Digital",
      },
    });

    if (updateCohorte.id) {
      return res.status(201).send(updateCohorte);
    }
    return res
      .status(404)
      .send(`La cohorte avec l'id : ${cohorteId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la modifiacation des donnes");
  }
}

/*
    --------------------------
    Delete a cohorte with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteCohorte(req, res, next) {
  const { cohorteId } = req.params;

  try {
    const deleteCohorte = await Cohorte.delete({
      where: {
        id: +cohorteId,
      },
    });

    if (deleteCohorte.id) {
      return res.status(200).send(deleteCohorte);
    }

    return res
      .status(404)
      .send(`La session avec l'id : ${cohorteId} n'existe pas`);
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .send(`La session avec l'id ${cohorteId}  n'a pas été trouvée.`);
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
    Delete all cohortes from 
    the database.
    --------------------------
*/
async function deleteAllCohortes(req, res, next) {
  try {
    const deleteCohorte = await Cohorte.deleteMany({});

    return res.status(200).send(deleteCohorte);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la supression des donnees");
  }
}

module.exports = {
  getOneCohorte: getOneCohorte,
  getAllCohortes: getAllCohortes,
  createCohorte: createCohorte,
  updateCohorte: updateCohorte,
  deleteCohorte: deleteCohorte,
  deleteAllCohortes: deleteAllCohortes,
};
