const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.headers.auhtorization.split(" ")[1];
    let verifiedToken = jwt.verify(token, process.env.SECRET_PRIVATE_KEY);
    next();
  } catch (error) {}
}
