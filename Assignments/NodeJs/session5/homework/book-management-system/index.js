const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', booksRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
