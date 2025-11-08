import React from "react";
import axios from "axios";
import "./ProductGrid.css";
import Image1 from '../components/images/download.jpg' // for basic styling

function ProductGrid({ products, refreshCart }) {
  const handleAddToCart = async (productId) => {
    await axios.post("http://localhost:5000/api/cart", {
      productId,
      qty: 1,
    });
    refreshCart();
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p className="price">₹{product.price}</p>
          <button onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
