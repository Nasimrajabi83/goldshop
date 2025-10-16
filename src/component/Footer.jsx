import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTelegram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light mt-auto py-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* ستون ۱ */}
          <Col md={6} className="mb-3">
            <h5 className="brand text-warning mb-3 fw-bold">GoldShop</h5>
          </Col>

          {/* ستون ۲ */}
          <Col md={3} className="mb-3">
            <h6 className="text-warning fw-bold mb-3">ارتباط با ما</h6>
            <p className="mb-1 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <FaPhone /> ۰۹۱۲۳۴۵۶۷۸۹
            </p>
            <p className="mb-0 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <FaMapMarkerAlt /> تهران، خیابان طلا فروشان
            </p>
          </Col>

          {/* ستون ۳ */}
          <Col md={3}>
            <h6 className="text-warning fw-bold mb-3">ما را دنبال کنید</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-light fs-4"><FaInstagram /></a>
              <a href="#" className="text-light fs-4"><FaTelegram /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary my-3" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} GoldShop — تمامی حقوق محفوظ است
        </p>
      </Container>
    </footer>
  );
}

export default Footer;