const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 1. Serve static files from the "assets" folder
app.use(express.static(path.join(__dirname, "assets")));

// 2. Sample product data
const products = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Phone", price: 1500 },
  { id: 3, name: "Tablet", price: 2000 },
];

// 3. Route to return all products
app.get("/products", (req, res) => {
  res.json(products);
});

// 4. Route to get a specific product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// 5. Sample user data
const users = [
  { id: 1, name: "David", age: 25 },
  { id: 2, name: "Sarah", age: 30 },
  { id: 3, name: "John", age: 40 },
];

// 6. Route to return users with optional age filtering
app.get("/users", (req, res) => {
  let filteredUsers = users;
  if (req.query.age) {
    filteredUsers = users.filter((user) => user.age > parseInt(req.query.age));
  }
  res.json(filteredUsers);
});

// 7. Handle unknown routes - Return index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "assets", "index.html"));
});

// 8. Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
