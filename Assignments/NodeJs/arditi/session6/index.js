const express = require("express");
const mysql = require("mysql2");
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });
console.log('JWT Token:', token);
// Verifying the token
const decoded = jwt.verify(token, 'secretKey');
console.log('Decoded Token:', decoded);


const bcrypt = require('bcrypt');
const saltRounds = 10;


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nesinesi",
  database: "school",
}); 


app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log("passwrd", password);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log("hashed password", hashedPassword);
});

  const query = "INSERT INTO students (name,age,grade) VALUES (?,?,?)";
  connection.query(query, [name, age, grade], (err, result) => {
    if (err) {
      return res.status(500).send(err); // Change sendStatus to status and send the error in the body
    }
    return res.status(201).send("Student created successfully");
  });


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL");
});\


app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log("passwrd", password);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log("hashed password", hashedPassword);
  const query = "INSERT INTO users (username,password,role_id) VALUES (?,?,)";
  let user;
  connection.query(query, [username, hashedPassword,2], (err, result) => {
    if (err) {
      return res.status(500).send(err); // Change sendStatus to status and send the error in the body
    }
    user = result;
    console.log("resutl", result);
    // const token = jwt.sign({ userId: 123 }, "fma", { expiresIn: "1h" });

    // return res.status(201).send("user created created successfully");
  });
});


app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const query = "INSERT INTO users (username,password,role_id) VALUES (?,?,?)";
  connection.query(query, [username, hashedPassword, 2], (err, result) => {
    if (err) {
      return res.status(500).send(err); // Change sendStatus to status and send the error in the body
    }

    const token = jwt.sign({ userId: result.insertId }, "fma", {
      expiresIn: "1h",
    });

    return res.status(201).json({ token });
  });
});
