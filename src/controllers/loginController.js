const { PrismaClient } = require("@prisma/client");
const { comparePassword } = require("../utils/hashPassword");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { Coach, Apprenant } = new PrismaClient();

/*
    --------------------------
  Sign in a coach
    --------------------------
*/
async function loginCoach(req, res, next) {
  const user = req.body;
  try {
    const coach = await Coach.findUnique({
      where: {
        email: user.email,
      },
    });

    if (coach) {
      const isPasswordValid = await comparePassword(
        user.password,
        coach.password
      );
      if (isPasswordValid) {
        const { password, ...userInfo } = coach;
        let token = jwt.sign(userInfo, process.env.SECRET_PRIVATE_KEY);
        return res.send({
          userInfo: userInfo,
          token: token,
        });
      }

      return res.send("Mot de passe incorrect ");
    }
    return res.status(404).send(`Adresse mail introuvable`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

/*
    --------------------------
    Sign In a student
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
    return res.status(404).send(`Adresse mail introuvable`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

async function test(req, res, next) {
  res.send("test ok");
}

module.exports = {
  loginCoach: loginCoach,
  loginStudent: loginStudent,
  test: test,
};
