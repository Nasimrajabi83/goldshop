import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch("http://localhost/goldshop-main/backend/register.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ fullname, email, password }),
});


      const data = await response.json();

      if (data.status === "success") {
        alert("ثبت‌نام با موفقیت انجام شد ✅");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("خطا در اتصال به سرور ❌");
      console.error(error);
    }
  };

  return (
    <div className="auth-bg d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <div className="auth-card p-4 rounded shadow-lg">
              <h2 className="text-center mb-4 text-gold fw-bold">ثبت نام</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-dark">نام و نام خانوادگی</Form.Label>
                  <Form.Control
                    type="text"
                    style={{color:'black'}}
                    placeholder="مثال: علی احمدی"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-dark">ایمیل</Form.Label>
                  <Form.Control
                    type="email"
                    style={{color:'black'}}
                    placeholder="ایمیل خود را وارد کنید"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-dark">رمز عبور</Form.Label>
                  <Form.Control
                    type="password"
                    style={{color:'black'}}
                    placeholder="رمز عبور خود را وارد کنید"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 fw-bold">
                  ثبت نام
                </Button>
              </Form>

              <div className="text-center mt-3">
                <span className="text-dark">حساب دارید؟ </span>
                <Button
                  variant="link"
                  className="text-gold p-0"
                  onClick={() => navigate("/login")}
                >
                  وارد شوید
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;

