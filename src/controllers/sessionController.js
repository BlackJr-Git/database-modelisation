const { PrismaClient } = require("@prisma/client");

const { Session } = new PrismaClient();

/*
--------------------------
Retrieve one session from 
the database.
--------------------------
*/
async function getOneSession(req, res, next) {
  const { SessionId } = req.params;
    try {
      const session = await Session.findUnique({where : {id: SessionId}});

      if (session) {
        return res.send(session);
      }
      return res
        .status(404)
        .send(`La session avec l'id : ${SessionId} n'existe pas`);
    } catch (error) {
      console.log(error);
      return res.status(404).res("erreur lors de la lectures de vos donnees");
    }
}

/*
  --------------------------
  Retrieve all sessions from 
  the database.
  --------------------------
*/
async function getAllSessions(req, res, next) {
  try {
    const sessions = await Session.findMany();
    return res.status(200).send(sessions);
  } catch (error) {
    console.log(error);
    return res.status(404).res("erreur lors de la lectures de vos donnees");
  }
}

/*
    --------------------------
    Create and save a new session
    in the database
    --------------------------
*/
async function createSession(req, res, next) {
  const session = req.body;
  try {
    const newSession = await Session.create({ data: session });
    return res.send(newSession);
  } catch (error) {
    console.log(error);
    return res.status(404).res("Les données de votre session sont incompletes");
  }
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
