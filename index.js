// import cors from "cors";
const cors = require("cors");
const express = require("express");
const { json }  = require('express')
// import { json } from "express";
// import {
//   authBaseURI,
//   rolesBaseURI,
//   usersBaseURI,
//   productBaseURI,
// } from "./config/paths.js";

// import {
//   authRouter,
//   roleRouter,
//   userRouter,
//   productRouter,
// } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: [`http://localhost:${PORT}`, "*"],
};
// dotenv.config();

// Config
app.use(json());
app.use(cors());

// Routes
// app.use(authBaseURI, authRouter);
// app.use(rolesBaseURI, roleRouter);
// app.use(usersBaseURI, userRouter);
// app.use(productBaseURI, productRouter);

app.listen(PORT, () => {
  console.log(`The server listens on http://localhost:${PORT}`);
});
