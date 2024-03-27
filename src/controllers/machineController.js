/*
--------------------------
Retrieve one machines from 
the database.
--------------------------
*/
async function getOneMachine(req, res, next) {
  const { MachineId } = req.params;
  let machine = findProductById(MachineId);
  if (machine) {
    return res.send(machine);
  }
  return res
    .status(404)
    .send(`La machine avec l'id : ${MachineId} n'existe pas`);
}

/*
  --------------------------
  Retrieve all machines from 
  the database.
  --------------------------
*/
async function getAllMachines(req, res, next) {
  /* let { number, pages } = req.query;
  pages = pages || 1;
  number = number || 10;
  const firstIndex = (+pages - 1) * number;
  const lastIndex = +pages * number;
  const students = "productsData.slice(firstIndex, lastIndex);";
  return res.send(students); */
  return res.send('OK')
}


/*
    --------------------------
    Create and save a new machines
    in the database
    --------------------------
*/
async function createMachine(req, res, next) {
  /* const newStudent = req.body;
  if (newStudent.text) {
    newStudent.id = productsData.length + 1;
    productsData.push(newStudent);
    return res.status(201).send(productsData[productsData.length - 1]);
  }
  return res.status(404).res("Les donnée de votre apprenant sont incomplete"); */
}

/*
    --------------------------
    Update a machines by the id 
    in the request
    --------------------------
*/
async function updateMachine(req, res, next) {
  /* const product = req.body;
  const { ProductId } = req.params;
  const ProductIndex = findProductIndex(ProductId);
  if (ProductIndex < 0) {
    productsData.push(product);
    return res.status(201).send(productsData[productsData.length - 1]);
  } else {
    productsData[ProductIndex] = product;
    return res.status(200).send(productsData[ProductIndex]);
  } */
}

/*
    --------------------------
    Delete a machines with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteMachine(req, res, next) {
  /* const { ProductId } = req.params;
  const productIndex = findProductIndex(ProductId);
  const product = findProductById(ProductId);
  if (productIndex < 0) {
    return res
      .status(404)
      .send(`L'article avec l'id ${ProductId} n'existe pas`);
  } else {
    productsData.splice(productIndex, 1);
    return res.status(202).send(product);
  } */
}

/*
    --------------------------
    Delete all machines from 
    the database.
    --------------------------
*/
async function deleteAllMachines(req, res, next) {
  /* productsData = [];
  return res.send("All Products have been deleted"); */
}

module.exports = {
  getOneMachine: getOneMachine,
  getAllMachines: getAllMachines,
  createMachine: createMachine,
  updateMachine: updateMachine,
  deleteMachine: deleteMachine,
  deleteAllMachines: deleteAllMachines,
};
