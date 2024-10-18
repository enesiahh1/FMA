const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

let products = []; // In-memory product list

// Route: Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Route: Get a single product by id
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});


// Route: Add a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Route: Update a product by id
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');

    const { name, price } = req.body;
    if (name) product.name = name;
    if (price) product.price = price;

    res.json(product);
});

// Route: Delete a product by id
app.delete('/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');

    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct);
});
