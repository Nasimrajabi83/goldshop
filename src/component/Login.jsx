import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ورود انجام شد");
    navigate("/"); 
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
                  <Form.Label className="text-light">ایمیل</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="text-light">رمز عبور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    required
                  />
                </Form.Group>

                <Button onClick={() => navigate("/")} variant="warning" type="submit" className="w-100 fw-bold">
                  ورود
                </Button>
              </Form>

              <div className="text-center mt-3">
                <span className="text-light">حساب کاربری ندارید؟ </span>
                <Button
                  variant="link"
                  className="text-gold p-0"
                  onClick={() => navigate("/register")} // 👈 هدایت به صفحه ثبت‌نام
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
export default Login