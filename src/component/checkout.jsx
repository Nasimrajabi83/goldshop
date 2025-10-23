import React, { useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    setLoading(true);
    fetch("http://localhost/goldshop-main/backend/checkout.php", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || "خرید شما با موفقیت انجام شد ✅");
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در ارتباط با سرور:", err);
        setMessage("خطایی در ارتباط با سرور رخ داده است ❌");
        setLoading(false);
      });
  };

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
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.75)",
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
          🛍️ نهایی کردن خرید
        </h2>

        <p style={{ color: "#555", marginBottom: "25px" }}>
          لطفاً قبل از پرداخت، از صحت اطلاعات و سبد خرید خود مطمئن شوید.
        </p>

        <Button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            backgroundColor: "rgb(194, 174, 142)",
            border: "none",
            padding: "12px 40px",
            borderRadius: "12px",
            fontWeight: "bold",
            color: "#fff",
            fontSize: "1rem",
            boxShadow: "0 4px 15px rgba(194, 174, 142, 0.3)",
            transition: "0.3s",
          }}
        >
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              style={{ color: "white" }}
            />
          ) : (
            "پرداخت و نهایی‌سازی خرید"
          )}
        </Button>

        {message && (
          <div
            style={{
              marginTop: "25px",
              color: message.includes("موفق") ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {message}
          </div>
        )}
      </Card>
    </div>
  );
}

export default Checkout;