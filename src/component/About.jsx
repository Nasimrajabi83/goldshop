import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutimg from "../assets/about.jpg"
import "../App.css";

function About() {
  return (
    <div className="about-section d-flex align-items-center justify-content-center vh-100">
      <Container style={{ direction: 'rtl', textAlign: 'right' }}>
        <Card className="about-card shadow-lg border-0 glass-bg p-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <img
                  src={aboutimg}
                  alt="GoldShop"
                  className="img-fluid rounded-4 shadow-sm"
                />
              </Col>
              <Col md={6}>
                <h2 className="fw-bold mb-3 text-gold" style={{ textAlign: 'right' }}>
                  درباره فروشگاه طلا و جواهر گلدشاپ
                </h2>
                <p className="text-muted fs-5" style={{ textAlign: 'right' }}>
                  فروشگاه <strong>گلدشاپ</strong> با بیش از یک دهه تجربه در زمینه طراحی و فروش
                  طلا و جواهرات لوکس، همواره تلاش کرده است تا ترکیبی از اصالت، نوآوری و اعتماد را
                  به مشتریان خود ارائه دهد. ما به کیفیت، شفافیت و احترام به سلیقه‌ی مشتری باور داریم.
                </p>
                <p className="text-muted fs-5" style={{ textAlign: 'right' }}>
                  مجموعه‌ی ما با بهره‌گیری از طراحان خلاق و متخصصان مجرب، زیورآلاتی منحصربه‌فرد تولید می‌کند
                  که نه تنها نمادی از زیبایی و شکوه هستند، بلکه با استانداردهای جهانی طلا و جواهر هماهنگ‌اند.
                </p>
                <p className="text-muted fs-5" style={{ textAlign: 'right' }}>
                  در <strong>گلدشاپ</strong>، هر قطعه طلا داستانی دارد؛ داستانی از هنر، درخشش و احساس.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default About;