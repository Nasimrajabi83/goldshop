import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backend/getOrders.php")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>سفارش‌های من</h2>
      {orders.length === 0 ? (
        <p>سفارشی ثبت نشده است</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              شماره سفارش: {order.id} — مبلغ کل: {order.total} تومان — وضعیت:{" "}
              {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
