import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/goldshop-main/backend/getOrders.php")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت سفارش‌ها:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdfdfd, #f5f2ed)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <Card
        style={{
          width: "90%",
          maxWidth: "700px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          border: "1px solid rgba(194, 174, 142, 0.4)",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h2
          style={{
            color: "rgb(194, 174, 142)",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          <TiShoppingCart/> سفارش‌های من
        </h2>

        {loading ? (
          <Spinner
            animation="border"
            style={{ color: "rgb(194, 174, 142)", marginTop: "20px" }}
          />
        ) : orders.length === 0 ? (
          <p style={{ color: "#777", marginTop: "20px" }}>
            هیچ سفارشی ثبت نشده است.
          </p>
        ) : (
          <div
            style={{
              marginTop: "20px",
              direction: "rtl",
              textAlign: "right",
              background: "rgba(255,255,255,0.5)",
              borderRadius: "12px",
              padding: "15px 20px",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {orders.map((order) => (
                <li
                  key={order.id}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <p style={{ margin: 0, color: "#333" }}>
                    <b>شماره سفارش:</b> {order.id}
                  </p>
                  <p style={{ margin: 0, color: "#555" }}>
                    <b>مبلغ کل:</b>{" "}
                    {Number(order.total).toLocaleString("fa-IR")} تومان
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color:
                        order.status === "تحویل شده"
                          ? "green"
                          : order.status === "در حال پردازش"
                          ? "#d4a017"
                          : "#555",
                      fontWeight: "bold",
                    }}
                  >
                    <b>وضعیت:</b> {order.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}

export default Orders;