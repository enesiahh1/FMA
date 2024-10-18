const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'nesinesi',  // Replace with your MySQL password
  database: 'library'
});

module.exports = db;
