import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import bannerImg from "../assets/baner.webp";
import { MdStarBorderPurple500 } from "react-icons/md";
import "../App.css";

function HomePage() {

  return (
<div className="hero-banner">
  <img src={bannerImg} alt="banner" className="banner-img" />
  <div className="banner-text">
    <h1>به فروشگاه طلا و جواهر  خوش آمدید</h1>
    <p>درخشش خاص شما، انتخابی خاص<MdStarBorderPurple500 /></p>
  </div>
  
</div>
  );
}

export default HomePage