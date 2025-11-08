import React, { useState } from "react";
import { checkout } from "../api";

function CheckoutForm({ cart, onReceipt }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await checkout(cart);
    onReceipt({ ...res.data, ...form });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckoutForm;
