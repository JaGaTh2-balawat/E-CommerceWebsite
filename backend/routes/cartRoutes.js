import express from "express";
import { cart, products } from "../db.js";
import { CartItem } from "../models/CartItem.js";

const router = express.Router();

// POST /api/cart
router.post("/", (req, res) => {
  const { productId, qty } = req.body;
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const existing = cart.find((c) => c.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push(new CartItem(productId, qty));

  res.json({ message: "Added to cart", cart });
});

// GET /api/cart
router.get("/", (req, res) => {
  const detailedCart = cart.map((c) => {
    const product = products.find((p) => p.id === c.productId);
    return { ...product, qty: c.qty };
  });
  const total = detailedCart.reduce((acc, i) => acc + i.price * i.qty, 0);
  res.json({ items: detailedCart, total });
});

// DELETE /api/cart/:id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cart.findIndex((item) => item.productId === id);
  if (index !== -1) cart.splice(index, 1);
  res.json({ message: "Removed from cart", cart });
});

export default router;
