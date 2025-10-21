import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backend/getCart.php")
      .then((res) => res.json())
      .then((data) => setCart(data.cart || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد شما خالی است</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.cart_id}>
              {item.title} — {item.price} تومان × {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
