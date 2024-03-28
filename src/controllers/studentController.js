const { PrismaClient } = require("@prisma/client");

const { Apprenant } = new PrismaClient();

/*
--------------------------
Retrieve one student from 
the database.
--------------------------
*/
async function getOneStudent(req, res, next) {
  const { StudentId } = req.params;
  try {
    const apprenant = await Apprenant.findUnique({
      where: {
        id: +StudentId,
      },
    });

    if (apprenant.id) {
      return res.send(apprenant);
    }
    return res
      .status(404)
      .send(`La cohorte avec l'id : ${StudentId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

/*
  --------------------------
  Retrieve all students from 
  the database.
  --------------------------
*/
async function getAllStudents(req, res, next) {
  try {
    const apprenants = await Apprenant.findMany();
    return res.status(200).send(apprenants);
  } catch (error) {
    console.log(error);
    return res.status(404).send("erreur lors de la lectures de vos donnees");
  }
}

/*
    --------------------------
    Create and save a new student
    in the database
    --------------------------
*/
async function createStudent(req, res, next) {
  const apprenant = req.body;
  try {
    const newApprenant = await Apprenant.create({ data: apprenant });
    return res.send(newApprenant);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send("Les données de votre apprenant sont incompletes");
  }
}

/*
    --------------------------
    Update a student by the id 
    in the request
    --------------------------
*/
async function updateStudent(req, res, next) {
  const { StudentId } = req.params;
  try {
    const updateApprenant = await Apprenant.update({
      where: {
        id: +StudentId,
      },
      data: {
        description: "Marketing Digital",
      },
    });

    if (updateApprenant.id) {
      return res.status(201).send(updateApprenant);
    }
    return res
      .status(404)
      .send(`L'apprenant avec l'id : ${StudentId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la modification des donnes");
  }
}

/*
    --------------------------
    Delete a product with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteStudent(req, res, next) {
  const { studentId } = req.params;

  try {
    const deleteApprenant = await Apprenant.delete({
      where: {
        id: +studentId,
      },
    });

    if (deleteApprenant.id) {
      return res.status(200).send(deleteApprenant);
    }

    return res
      .status(404)
      .send(`La session avec l'id : ${studentId} n'existe pas`);
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .send(`La session avec l'id ${studentId}  n'a pas été trouvée.`);
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
    Delete all products from 
    the database.
    --------------------------
*/
async function deleteAllStudents(req, res, next) {
  try {
    const deleteApprenants = await Apprenant.deleteMany({});

    return res.status(200).send(deleteApprenants);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la supression des donnees");
  }
}

module.exports = {
  getOneStudent: getOneStudent,
  getAllStudents: getAllStudents,
  createStudent: createStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent,
  deleteAllStudents: deleteAllStudents,
};
