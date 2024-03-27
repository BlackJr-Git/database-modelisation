/*
--------------------------
Retrieve one session from 
the database.
--------------------------
*/
async function getOneSession(req, res, next) {
  const { SessionId } = req.params;
  let session = findProductById(SessionId);
  if (session) {
    return res.send(session);
  }
  return res
    .status(404)
    .send(`La session avec l'id : ${SessionId} n'existe pas`);
}

/*
  --------------------------
  Retrieve all session from 
  the database.
  --------------------------
*/
async function getAllSessions(req, res, next) {
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
    Create and save a new session
    in the database
    --------------------------
*/
async function createSession(req, res, next) {
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
    Update a session by the id 
    in the request
    --------------------------
*/
async function updateSession(req, res, next) {
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
    Delete a session with 
    the specified id 
    in the request
    --------------------------
*/
async function deleteSession(req, res, next) {
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
    Delete all session from 
    the database.
    --------------------------
*/
async function deleteAllSessions(req, res, next) {
  /* productsData = [];
  return res.send("All Products have been deleted"); */
}

module.exports = {
  getOneSession: getOneSession,
  getAllSessions: getAllSessions,
  createSession: createSession,
  updateSession: updateSession,
  deleteSession: deleteSession,
  deleteAllSessions: deleteAllSessions,
};
