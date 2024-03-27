/*
--------------------------
Retrieve one coach from 
the database.
--------------------------
*/
async function getOneCoach(req, res, next) {
  const { CoachId } = req.params;
  const coach = ''
  if (coach) {
    return res.send(coach);
  }
  return res.status(404).send(`Le coach avec l'id : ${CoachId} n'existe pas`);
}



/*
  --------------------------
  Retrieve all coaches from 
  the database.
  --------------------------
*/
async function getAllCoaches(req, res, next) {
  /* let { number, pages } = req.query;
  pages = pages || 1;
  number = number || 10;
  const firstIndex = (+pages - 1) * number;
  const lastIndex = +pages * number;
  const students = "productsData.slice(firstIndex, lastIndex);";
  return res.send(students); */
  return res.send("OK");
}

/*
    --------------------------
    Create and save a new coach
    in the database
    --------------------------
*/
async function createCoach(req, res, next) {
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
    Update a coach by the id 
    in the request
    --------------------------
*/
async function updateCoach(req, res, next) {
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
    Delete a coach with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteCoach(req, res, next) {
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
    Delete all coaches from 
    the database.
    --------------------------
*/
async function deleteAllCoaches(req, res, next) {
  /* productsData = [];
  return res.send("All Products have been deleted"); */
}

module.exports = {
  getOneCoach: getOneCoach,
  getAllCoaches: getAllCoaches,
  createCoach: createCoach,
  updateCoach: updateCoach,
  deleteCoach: deleteCoach,
  deleteAllCoaches: deleteAllCoaches,
};
