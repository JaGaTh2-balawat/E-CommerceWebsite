import express from "express";
import { products } from "../db.js";

const router = express.Router();

// GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
