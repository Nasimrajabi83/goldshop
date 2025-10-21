import React from "react";

function Checkout() {
  const handleCheckout = () => {
    fetch("http://localhost/backend/checkout.php", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>نهایی کردن خرید</h2>
      <button onClick={handleCheckout}>پرداخت و نهایی‌سازی خرید</button>
    </div>
  );
}

export default Checkout;
