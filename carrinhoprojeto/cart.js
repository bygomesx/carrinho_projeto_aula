import React, { useState } from "react";

function Cart({ cart, removeFromCart, applyCoupon, total }) {
  const [couponCode, setCouponCode] = useState("");
  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
  };
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Código do cupom"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button onClick={handleApplyCoupon}>Aplicar Cupom</button>
      </div>
      <h3>Total: R${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;