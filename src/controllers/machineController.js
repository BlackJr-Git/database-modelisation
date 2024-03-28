const { PrismaClient } = require("@prisma/client");

const { Ordinateur } = new PrismaClient();

/*
--------------------------
Retrieve one machines from 
the database.
--------------------------
*/
async function getOneMachine(req, res, next) {
  const { machineId } = req.params;
  try {
    const machine = await Ordinateur.findUnique({
      where: {
        id: +machineId,
      },
    });

    if (machine.id) {
      return res.send(machine);
    }
    return res
      .status(404)
      .send(`La session avec l'id : ${machineId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("erreur lors de la lecture de vos données");
  }
}

/*
  --------------------------
  Retrieve all machines from 
  the database.
  --------------------------
*/
async function getAllMachines(req, res, next) {
  try {
    const machines = await Ordinateur.findMany();
    return res.status(200).send(machines);
  } catch (error) {
    console.log(error);
    return res.status(404).send("erreur lors de la lectures de vos donnees");
  }
}

/*
    --------------------------
    Create and save a new machines
    in the database
    --------------------------
*/
async function createMachine(req, res, next) {
  const machine = req.body;
  try {
    const newMachine = await Ordinateur.create({ data: machine });
    return res.send(newMachine);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send("Les données de votre session sont incompletes");
  }
}

/*
    --------------------------
    Update a machines by the id 
    in the request
    --------------------------
*/
async function updateMachine(req, res, next) {
  const { machineId } = req.params;
  try {
    const updateMachine = await Ordinateur.update({
      where: {
        id: +machineId,
      },
      data: {
        modele: "Zenbook 15",
      },
    });

    if (updateMachine.id) {
      return res.status(201).send(updateMachine);
    }
    return res
      .status(404)
      .send(`La session avec l'id : ${machineId} n'existe pas`);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la modifiacation des donnes");
  }
}

/*
    --------------------------
    Delete a machines with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteMachine(req, res, next) {
  const { machineId } = req.params;
  try {
    const deleteMachine = await Ordinateur.delete({
      where: {
        id: +machineId,
      },
    });

    if (deleteMachine.id) {
      return res.status(200).send(deleteMachine);
    }

    return res
      .status(404)
      .send(`La session avec l'id : ${machineId} n'existe pas`);
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .send(`La session avec l'id ${machineId}  n'a pas été trouvée.`);
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
    Delete all machines from 
    the database.
    --------------------------
*/
async function deleteAllMachines(req, res, next) {
  try {
    const deleteMachine = await Ordinateur.deleteMany({});

    return res.status(200).send(deleteMachine);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erreur lors de la supression des donnees");
  }
}

module.exports = {
  getOneMachine: getOneMachine,
  getAllMachines: getAllMachines,
  createMachine: createMachine,
  updateMachine: updateMachine,
  deleteMachine: deleteMachine,
  deleteAllMachines: deleteAllMachines,
};
