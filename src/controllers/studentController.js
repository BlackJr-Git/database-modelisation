






/*
--------------------------
Retrieve one student from 
the database.
--------------------------
*/
async function getOneStudent(req, res, next) {
    const { StudentId } = req.params;
    let student = findProductById(StudentId);
    if (student) {
      return res.send(student);
    }
    return res.status(404).send(`L'apprenant avec l'id : ${StudentId} n'existe pas`);
  }