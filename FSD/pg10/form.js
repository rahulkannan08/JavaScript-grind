const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model("Student", studentSchema);

/* ======================
   SHOW FORM + DATA
====================== */
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

  <h2>Student List</h2>
  `;

  students.forEach(s => {
    output += `
      <p>
        ${s.name} | ${s.age} | ${s.course}
        <a href="/delete/${s._id}">Delete</a>
      </p>
    `;
  });

  res.send(output);
});

/* ======================
   CREATE
====================== */
app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});

/* ======================
   DELETE
====================== */
app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
