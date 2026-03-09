const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String});
const Student = mongoose.model("Student", studentSchema);
app.get("/", async (req, res) => {
  const students = await Student.find();
  let output = `
  <h1>Student Form</h1>
  <form action="/add" method="POST">
    Name: <input type="text" name="name" required><br><br>
    Age: <input type="number" name="age" required><br><br>
    Course: <input type="text" name="course" required><br><br>
    <button type="submit">Add Student</button>
  </form>
  <h2>Student List</h2>`;
  students.forEach(s => {
    output += `
      <p>
        ${s.name} | ${s.age} | ${s.course}
        <a href="/delete/${s._id}">Delete</a> <a href="/update/${s._id}">Update</a>
      </p>
    `; });
  res.send(output);});
app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");});
app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");});
app.get("/update/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(`
    <h1>Update Student</h1> 
    <form action="/update/${student._id}" method="POST">
      Name: <input type="text" name="name" value="${student.name}" required><br><br>
      Age: <input type="number" name="age" value="${student.age}" required><br><br>
      Course: <input type="text" name="course" value="${student.course}" required><br><br>
      <button type="submit">Update Student</button>
    </form>
  `);});
app.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");});
app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(`
    <h1>Edit Student</h1>
    <form action="/update/${student._id}" method="POST">
      Name: <input type="text" name="name" value="${student.name}" required><br><br>
      Age: <input type="number" name="age" value="${student.age}" required><br><br>
      Course: <input type="text" name="course" value="${student.course}" required><br><br>
      <button type="submit">Update Student</button>
    </form>
  `);});

app.listen(3000, () => console.log("Server running on port 3000")); 