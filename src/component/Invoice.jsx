import React, { useState } from "react";

function Invoice() {
  const [invoice, setInvoice] = useState([]);
  const [orderId, setOrderId] = useState("");

  const fetchInvoice = () => {
    fetch(`http://localhost/backend/getInvoice.php?order_id=${orderId}`)
      .then((res) => res.json())
      .then((data) => setInvoice(data.invoice || []))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>نمایش فاکتور خرید</h2>
      <input
        type="text"
        placeholder="شماره سفارش را وارد کنید"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={fetchInvoice}>نمایش</button>

      <ul>
        {invoice.map((item, index) => (
          <li key={index}>
            {item.title} — {item.quantity} عدد — {item.price} تومان
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Invoice;
