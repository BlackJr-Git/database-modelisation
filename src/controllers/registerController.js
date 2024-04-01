const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../utils/hashPassword");

const { Coach, Apprenant } = new PrismaClient();

/*
    --------------------------
    Create and save a new coach
    in the database
    --------------------------
*/
async function registerCoach(req, res, next) {
  const coach = req.body;
  coach.password = await hashPassword(coach.password);
  try {
    const newCoach = await Coach.create({ data: coach });
    return res.send(newCoach);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send("Erreur lors de l'enregistrement de vos donnee");
  }
}

/*
    --------------------------
    Create and save a new student
    in the database
    --------------------------
*/
async function registerStudent(req, res, next) {
  const student = req.body;
  student.password = await hashPassword(student.password);
  try {
    const newStudent = await Apprenant.create({ data: student });
    return res.send(newStudent);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Erreur lors de l'enregistrement de vos donnee");
  }
}

module.exports = {
  registerCoach: registerCoach,
  registerStudent: registerStudent,
};
