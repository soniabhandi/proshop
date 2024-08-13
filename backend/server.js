import express from "express";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables early

import products from "./data/products.js"; // Assuming you are using ES modules

const port = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
