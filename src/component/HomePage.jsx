import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import bannerImg from "../assets/ba.jpg";
import earing from "../assets/earing.avif";
import neck from "../assets/neck.jpeg";
import Rings from "../assets/Rings.webp";
import dast from "../assets/dast.jpg";
import Trick from "../assets/trick.png";
import Tazmin from "../assets/tazmin.png"
import Etminan from "../assets/etminan.png"
import Amniat from "../assets/amniat.png"
import Salamat from "../assets/salamat.png"
import { MdStarBorderPurple500 } from "react-icons/md";
import { GiDoubleNecklace } from "react-icons/gi";
import "../App.css";

function HomePage() {
  const categories = [
    { id: 1, title: "گردنبند", img: neck },
    { id: 2, title: "انگشتر", img: Rings },
    { id: 3, title: "دستبند", img: dast },
    { id: 4, title: "گوشواره", img: earing },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/goldshop-main/backend/bestSellers.php")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* 🔸 بنر اصلی */}
      <div className="hero-banner position-relative text-center">
        <img src={bannerImg} alt="banner" className="banner-img" />
        <div className="banner-text position-absolute top-50 start-50 translate-middle text-light">
          <h1 className="fw-bold mb-3">به فروشگاه طلا و جواهر خوش آمدید</h1>
          <p className="fs-5">
            درخشش خاص شما، انتخابی خاص <MdStarBorderPurple500 />
          </p>
          <Button variant="warning" className="fw-bold px-4 mt-3">
            مشاهده محصولات
          </Button>
        </div>
      </div>

      {/* 🔹 دسته‌بندی محصولات */}
      <Container className="mt-5 mb-5">
        <h3 className="text-center mb-4 text-gold fw-bold">دسته‌بندی‌ها</h3>
        <Row className="g-4">
          {categories.map((cat) => (
            <Col key={cat.id} xs={12} sm={6} md={3}>
              <Card className="category-card h-100 text-center shadow-sm">
                <Card.Img
                  variant="top"
                  src={cat.img}
                  className="rounded-top"
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{cat.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 💎 اسلایدر پرفروش‌ترین‌ها */}
      <Container className="my-5">
        <h3 className="text-center mb-4 text-gold fw-bold">
          <GiDoubleNecklace /> پرفروش‌ترین محصولات
        </h3>
        <Slider {...settings}>
          {products.map((p) => (
            <div key={p.id} className="px-3">
              <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={`http://localhost/goldshop-main/backend/images/${p.image}`}
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  className="hover-zoom"
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{p.name}</Card.Title>
                  <Card.Text className="text-muted">{p.price} تومان</Card.Text>
                  <Button variant="warning" className="fw-bold">
                    مشاهده محصول
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
      <div className="info-icons">
  <ul>
    <li>
      <a href="#" target="_blank">
        <img src={Trick} alt="ارسال رایگان" />
        <span>ارسال رایگان</span>
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <img src={Etminan} alt="اعتماد" />
        <span>ضمانت اصالت</span>
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <img src={Tazmin} alt="تضمین" />
        <span>تضمین کیفیت</span>
      </a>
    </li>
     <li>
      <a href="#" target="_blank">
        <img src={Salamat} alt="تضمین" />
        <span>سلامت محصول</span>
      </a>
    </li>
    <li>
      <a href="#" target="_blank">
        <img src={Amniat} alt="امنیت" />
        <span>پرداخت امن</span>
      </a>
    </li>
  </ul>
</div>
    </div>
  );
}

export default HomePage;