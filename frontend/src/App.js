import React, { useEffect, useState } from "react";
import { getProducts, getCart } from "./api";
import { CartProvider } from "./context/CartContext";
import ProductGrid from "./components/ProductGrid";
import CartView from "./components/CartView";
import CheckoutForm from "./components/CheckoutForm";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
    refreshCart();
  }, []);

  const refreshCart = () =>
    getCart().then((res) => {
      setCart(res.data.items);
      setTotal(res.data.total);
    });

  const handleReceipt = (r) => setReceipt(r);

  return (
    <CartProvider>
      <div className="container">
        <h1>🛒 Mock E-Commerce Cart</h1>
        <h2>Products</h2>
        <ProductGrid products={products} refreshCart={refreshCart} />
        <CartView
          cart={cart}
          total={total}
          refreshCart={refreshCart}
          onCheckout={() => setReceipt("showForm")}
        />
        {receipt === "showForm" && (
          <CheckoutForm cart={cart} onReceipt={handleReceipt} />
        )}
        {receipt && receipt !== "showForm" && (
          <div className="receipt">
            <h2>🧾 Receipt</h2>
            <p>Name: {receipt.name}</p>
            <p>Email: {receipt.email}</p>
            <p>Total: ₹{receipt.total}</p>
            <p>Date: {receipt.timestamp}</p>
          </div>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
