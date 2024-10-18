const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all books
router.get('/', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM books');
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST a new book
router.post('/', async (req, res) => {
  const { title, author, genre, year } = req.body;
  try {
    const [result] = await db.query('INSERT INTO books (title, author, genre, year) VALUES (?, ?, ?, ?)', [title, author, genre, year]);
    res.json({ id: result.insertId, title, author, genre, year });
  } catch (err) {
    res.status(500).send(err);
  }
});

// PUT (update) a book by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year } = req.body;
  try {
    const [result] = await db.query('UPDATE books SET title = ?, author = ?, genre = ?, year = ? WHERE id = ?', [title, author, genre, year, id]);
    if (result.affectedRows === 0) {
      return res.status(404).send('Book not found');
    }
    res.json({ id, title, author, genre, year });
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a book by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM books WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).send('Book not found');
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
});

// BONUS: Search books by author
router.get('/search', async (req, res) => {
  const { author } = req.query;
  try {
    const [results] = await db.query('SELECT * FROM books WHERE author LIKE ?', [`%${author}%`]);
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
