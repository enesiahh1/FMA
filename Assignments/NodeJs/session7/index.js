const express = require("express");
const db = require("./db.js");
const app = express();

app.use(express.json());

const PAGE_SIZE = 10;

app.get("/products", (req, res) => {
  let page = Math.max(parseInt(req.query.page) || 1, 1);
  const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (products.length === 0) {
    res.status(404).json({ message: "No products found" });
  } else {
    res.json({ message: "Products retrieved successfully", products });
  }
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = db.products.find((p) => p.id == id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  product.supplier = db.suppliers.find((s) => s.id == product.supplierId);
  res.json({ message: "Product retrieved successfully", product });
});

app.get("/suppliers/:id/products", (req, res) => {
  const id = req.params.id;
  const products = db.products.filter((p) => p.supplierId == id);
  res.json({
    message: "Products for supplier retrieved successfully",
    products,
  });
});

app.post("/products", (req, res) => {
  const { name, price, supplierId } = req.body;

  if (!name || price == null || !supplierId) {
    res.status(400).json({
      message: "Please provide name, price, and supplierId for the product.",
    });
    return;
  }

  const newProduct = {
    id: db.products.length + 1,
    name,
    price,
    supplierId,
  };

  db.products.push(newProduct);
  res.status(201).json({ message: "Product created successfully", newProduct });
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = db.products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const { name, price, supplierId } = req.body;

  if (name) product.name = name;
  if (price != null) product.price = price;
  if (supplierId) product.supplierId = supplierId;

  res.json({ message: "Product updated successfully", product });
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = db.products.findIndex((p) => p.id == id);

  if (index === -1) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  db.products.splice(index, 1);
  res.status(204).json({ message: "Product deleted successfully" });
});

app.get("/suppliers", (req, res) => {
  res.json({
    message: "Suppliers retrieved successfully",
    suppliers: db.suppliers,
  });
});

app.post("/suppliers", (req, res) => {
  const { name, phoneNumber, location } = req.body;

  if (!name || !phoneNumber || !location) {
    res.status(400).json({
      message:
        "Please provide name, phoneNumber, and location for the supplier.",
    });
    return;
  }

  const newSupplier = {
    id: db.suppliers.length + 1,
    name,
    phoneNumber,
    location,
  };

  db.suppliers.push(newSupplier);
  res
    .status(201)
    .json({ message: "Supplier created successfully", newSupplier });
});

app.listen(8585);
