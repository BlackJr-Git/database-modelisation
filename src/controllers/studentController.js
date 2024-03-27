/*
--------------------------
Retrieve one student from 
the database.
--------------------------
*/
async function getOneStudent(req, res, next) {
  const { StudentId } = req.params;
  let student = "findProductById(StudentId)";
  if (student) {
    return res.send(student);
  }
  return res
    .status(404)
    .send(`L'apprenant avec l'id : ${StudentId} n'existe pas`);
}

/*
  --------------------------
  Retrieve all students from 
  the database.
  --------------------------
*/
async function getAllStudents(req, res, next) {
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
    Create and save a new product
    in the database
    --------------------------
*/
async function createStudent(req, res, next) {
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
async function updateStudent(req, res, next) {
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
async function deleteStudent(req, res, next) {
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
async function deleteAllStudents(req, res, next) {
  /* productsData = [];
  return res.send("All Products have been deleted"); */
}

module.exports = {
  getOneStudent: getOneStudent,
  getAllStudents: getAllStudents,
  createStudent: createStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent,
  deleteAllStudents: deleteAllStudents,
};
