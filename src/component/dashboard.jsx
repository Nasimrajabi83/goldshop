import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (!user) return <p>در حال بارگذاری...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>سلام {user.fullname} 👋</h2>
      <p>ایمیل شما: {user.email}</p>
      <div style={{ marginTop: "30px" }}>
        <a href="/cart">🛒 سبد خرید</a> |{" "}
        <a href="/orders">📦 سفارش‌ها</a> |{" "}
        <a href="/invoice">🧾 فاکتورها</a>
      </div>
    </div>
  );
}

export default Dashboard;
