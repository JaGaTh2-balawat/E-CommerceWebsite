import React from "react";
import { removeFromCart } from "../api";

function CartView({ cart, total, refreshCart, onCheckout }) {
  const handleRemove = async (id) => {
    await removeFromCart(id);
    refreshCart();
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
              <button onClick={() => handleRemove(item.id)}>❌</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartView;
