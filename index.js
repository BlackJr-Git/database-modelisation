const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const { json } = require("express");
const {
  apprenantsBaseURI,
  coachesBaseURI,
  machinesBaseURI,
  cohortesBaseURI,
  sessionsBaseURI,
} = require("./src/config/path");

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
