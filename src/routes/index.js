const studentRouter  = require("../routes/students.routes");
const coachRouter  = require("../routes/coach.routes");
const machineRouter  = require("../routes/machine.routes");
const cohorteRouter  = require("../routes/cohorte.routes");
const sessionRouter  = require("../routes/session.routes");

module.exports = {
    studentRouter : studentRouter,
    coachRouter : coachRouter,
    machineRouter : machineRouter,
    cohorteRouter :cohorteRouter,
    sessionRouter : sessionRouter
}
