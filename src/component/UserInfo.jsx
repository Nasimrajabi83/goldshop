import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

function UserInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/goldshop-main/backend/getUser.php")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت اطلاعات کاربر:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner animation="border" style={{ color: "rgb(194, 174, 142)" }} />
      </div>
    );

  if (!user)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        اطلاعات کاربر یافت نشد.
      </p>
    );

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
          maxWidth: "450px",
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
            marginBottom: "20px",
          }}
        >
          👤 اطلاعات کاربر
        </h2>

        <div
          style={{
            direction: "rtl",
            textAlign: "right",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          <p>
            <b>نام:</b> {user.fullname}
          </p>
          <p>
            <b>ایمیل:</b> {user.email}
          </p>
          {user.phone && (
            <p>
              <b>شماره تماس:</b> {user.phone}
            </p>
          )}
          {user.address && (
            <p>
              <b>آدرس:</b> {user.address}
            </p>
          )}
        </div>

        <button
          style={{
            backgroundColor: "rgb(194, 174, 142)",
            border: "none",
            color: "white",
            padding: "10px 25px",
            borderRadius: "10px",
            marginTop: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "rgb(172, 153, 123)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "rgb(194, 174, 142)")
          }
        >
          ویرایش اطلاعات
        </button>
      </Card>
    </div>
  );
}

export default UserInfo;