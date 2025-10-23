import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/goldshop-main/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("ورود با موفقیت انجام شد ✅");
        console.log("اطلاعات کاربر:", data.user);
        navigate("/"); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("خطا در اتصال به سرور ❌");
    }
  };

  return (
    <div className="auth-bg d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <div className="auth-card p-4 rounded shadow-lg">
              <h2 className="text-center mb-4 text-gold fw-bold">ورود به حساب</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="text-dark">ایمیل</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="text-dark">رمز عبور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 fw-bold">
                  ورود
                </Button>
              </Form>

              <div className="text-center mt-3">
                <span className="text-dark">حساب کاربری ندارید؟ </span>
                <Button
                  variant="link"
                  className="text-gold p-0"
                  onClick={() => navigate("/register")}
                >
                  ثبت نام کنید
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
