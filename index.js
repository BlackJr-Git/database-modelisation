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

const {
  studentRouter,
  coachRouter,
  machineRouter,
  cohorteRouter,
  sessionRouter,
} = require("./src/routes/index");


const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: [`http://localhost:${PORT}`, "*"],
};
dotenv.config();

// Config
app.use(json());
app.use(cors());

// Routes
app.use(cohortesBaseURI, cohorteRouter);
app.use(machinesBaseURI, machineRouter);
app.use(sessionsBaseURI, sessionRouter);
app.use(coachesBaseURI, coachRouter);
app.use(apprenantsBaseURI, studentRouter);

app.listen(PORT, () => {
  console.log(`The server listens on http://localhost:${PORT}`);
});
