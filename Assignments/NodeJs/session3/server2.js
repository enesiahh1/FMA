const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.json({ message: "Get all users" });
});

app.post("/users", (req, res) => {
  res.json({ message: "Create a user" });
});

app.put("/users", (req, res) => {
  res.json({ message: "Update  a user" });
});

app.delete("/users", (req, res) => {
  res.json({ message: "Delete  a user" });
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
