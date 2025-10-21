import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import bannerImg from "../assets/ba.jpg";
import earing from "../assets/earing.avif";
import neck from "../assets/neck.jpeg"
import Rings from "../assets/Rings.webp"
import dast from "../assets/dast.jpg"
import { MdStarBorderPurple500 } from "react-icons/md";
import "../App.css";

function HomePage() {
 const categories = [
    { id: 1, title: "گردنبند", img: neck },
    { id: 2, title: "انگشتر", img: Rings },
    { id: 3, title: "دستبند", img:dast},
    { id: 4, title: "گوشواره", img: earing },
  ];
  return (
    <div>
<div className="hero-banner">
  <img src={bannerImg} alt="banner" className="banner-img" />
  <div className="banner-text">
    <h1>به فروشگاه طلا و جواهر  خوش آمدید</h1>
    <p>درخشش خاص شما، انتخابی خاص<MdStarBorderPurple500 /></p>
  </div>
</div>
<Container className="mt-5 mb-5">
        <Row className="g-4">
          {categories.map((cat) => (
            <Col key={cat.id} xs={12} sm={6} md={3}>
              <Card className="category-card h-100 text-center shadow-sm">
                <Card.Img variant="top" src={cat.img} />
                <Card.Body>
                  <Card.Title>{cat.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

  </div>
  );
}

export default HomePage