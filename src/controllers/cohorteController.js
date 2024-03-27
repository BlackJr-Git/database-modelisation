/*
--------------------------
Retrieve one cohorte from 
the database.
--------------------------
*/
async function getOneCohorte(req, res, next) {
  const { CohorteId } = req.params;
  let cohorte = findProductById(CohorteId);
  if (cohorte) {
    return res.send(cohorte);
  }
  return res
    .status(404)
    .send(`La cohorte avec l'id : ${CohorteId} n'existe pas`);
}

/*
  --------------------------
  Retrieve all students from 
  the database.
  --------------------------
*/
async function getAllCohortes(req, res, next) {
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
    Create and save a new product
    in the database
    --------------------------
*/
async function createCohorte(req, res, next) {
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
    Update a product by the id 
    in the request
    --------------------------
*/
async function updateCohorte(req, res, next) {
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
    Delete a product with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteCohorte(req, res, next) {
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
    Delete all products from 
    the database.
    --------------------------
*/
async function deleteAllCohortes(req, res, next) {
  /* productsData = [];
  return res.send("All Products have been deleted"); */
}

module.exports = {
  getOneCohorte: getOneCohorte,
  getAllCohortes: getAllCohortes,
  createCohorte: createCohorte,
  updateCohorte: updateCohorte,
  deleteCohorte: deleteCohorte,
  deleteAllCohortes: deleteAllCohortes,
};
