const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nesinesi",
  database: "school",
});
connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.stack);
      return;
    }
    console.log("Connected to MySQL");
  });
  
  app.post("/students", (req, res) => {
    const { name, age, grade } = req.body;
  
    const query = "INSERT INTO students (name,age,grade) VALUES (?,?,?)";
    connection.query(query, [name, age, grade], (err, result) => {
      if (err) {
        return res.status(500).send(err); // Change sendStatus to status and send the error in the body
      }
      return res.status(201).send("Student created successfully");
    });
  });
  app.get("/students", (req, res) => {
    const query = "SELECT * from students";
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err); // Correct usage of status and send error
      }
      return res.status(200).json(result); // Change sendStatus to status and then send the result
    });
  });
  
  app.put('/students/:id', (req, res) => {
      const { id } = req.params;
      const { name, age, grade } = req.body;
      const query = 'UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?';
    
      connection.query(query, [name, age, grade, id], (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send('Student updated successfully');
      });
    });

    app.
  
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  