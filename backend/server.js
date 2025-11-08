import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { products } from "./db.js"; // ✅ Must include .js for ES Modules

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ---------------- Mock Cart (In-memory) ----------------
let cart = [];

// ---------------- API Routes ----------------

// Health check route
app.get("/", (req, res) => {
  res.json("Welcome to Mock E-Commerce API 🚀");
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Add item to cart
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const existing = cart.find((c) => c.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty });

  res.json({ message: "Added to cart", cart });
});

// Get all cart items with total
app.get("/api/cart", (req, res) => {
  const detailedCart = cart.map((c) => {
    const product = products.find((p) => p.id === c.productId);
    return { ...product, qty: c.qty };
  });
  const total = detailedCart.reduce((acc, i) => acc + i.price * i.qty, 0);
  res.json({ items: detailedCart, total });
});

// Remove from cart
app.delete("/api/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.productId !== id);
  res.json({ message: "Removed from cart", cart });
});

// Checkout (mock)
app.post("/api/checkout", (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const receipt = {
    total,
    timestamp: new Date().toLocaleString(),
  };
  cart = []; // Clear cart after checkout
  res.json(receipt);
});

// ---------------- Server ----------------
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
