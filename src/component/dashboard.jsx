import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { IoExit } from "react-icons/io5";


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

  if (!user)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fdfdfd, #f5f2ed)",
          color: "rgb(194, 174, 142)",
          fontSize: "1.2rem",
        }}
      >
        در حال بارگذاری...
      </div>
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
          maxWidth: "600px",
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          border: "1px solid rgba(194, 174, 142, 0.4)",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h2
          style={{
            color: "rgb(194, 174, 142)",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
           !سلام کاربر عزیز{user.fullname}
        </h2>

        <p style={{ color: "#555", fontSize: "1rem" }}>
          ایمیل شما: <b>{user.email}</b>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          
          <Button
            href="/cart"
            style={{
              backgroundColor: "rgb(194, 174, 142)",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(194, 174, 142, 0.3)",
              transition: "0.3s",
            }}
          >
            <FaShoppingBasket style={{
              color:"white"
            }}/> سبد خرید
          </Button>

          <Button
            href="/orders"
            style={{
              backgroundColor: "rgb(194, 174, 142)",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(194, 174, 142, 0.3)",
              transition: "0.3s",
            }}
          >
           <BiSolidShoppingBagAlt style={{
              color:"white"
            }}/>سفارش‌ها
          </Button>

          <Button
            href="/invoice"
            style={{
              backgroundColor: "rgb(194, 174, 142)",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(194, 174, 142, 0.3)",
              transition: "0.3s",
            }}
          >
            <BsFillBagCheckFill style={{
              color:"white"
            }}/> فاکتورها
          </Button>
          <Button
            href="/userinfo"
            style={{
              backgroundColor: "rgb(194, 174, 142)",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(194, 174, 142, 0.3)",
              transition: "0.3s",
            }}
          >
            <FaUserAlt style={{
              color:"white"
            }}/> اطلاعات حساب کاربر
          </Button>
        </div>

        <div style={{ marginTop: "35px" }}>
          <Button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            style={{
              backgroundColor: "#333",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
              transition: "0.3s",
            }}
          >
           <IoExit style={{
              color:"white"
            }}/> خروج از حساب
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;