const { PrismaClient } = require("@prisma/client");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

const { Coach, Apprenant } = new PrismaClient();

/*
    --------------------------
    Create and save a new coach
    in the database
    --------------------------
*/
async function loginCoach(req, res, next) {
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
    Create and save a new coach
    in the database
    --------------------------
*/
async function loginStudent(req, res, next) {
  const student = req.body;
  try {
    const apprenant = await Apprenant.findUnique({
      where: {
        email: student.email,
      },
    });

    if (apprenant.id) {
      const isPasswordValid = await comparePassword(
        student.password,
        apprenant.password
      );
      if (isPasswordValid) {
        return res.send(apprenant);
      }

      return res.send("Mot de passe incorrect ");
    }
    return res
      .status(404)
      .send(`Adresse mail introuvable`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

module.exports = {
  loginCoach: loginCoach,
  loginStudent: loginStudent,
};
