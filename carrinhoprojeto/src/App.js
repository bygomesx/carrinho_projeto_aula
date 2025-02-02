import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const applyCoupon = (code) => {
    setCoupon(code);
  };
  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;

    if (coupon === "DESC10") {
      discount = subtotal * 0.1; 
    }
    return subtotal - discount;
  };
  return (
    <div className="App">
      <h1>Loja de Suplementos</h1>
      <ProductList addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        applyCoupon={applyCoupon}
        total={calculateTotal()}
      />
    </div>
  );
}
export default App;