import express from "express";
import { cart, products } from "../db.js";

const router = express.Router();

// POST /api/checkout
router.post("/", (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const receipt = {
    total,
    timestamp: new Date().toLocaleString(),
  };
  cart.length = 0; // clear cart
  res.json(receipt);
});

export default router;
