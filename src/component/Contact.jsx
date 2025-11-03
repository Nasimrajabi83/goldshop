// Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { TiPhone } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const goldColor = 'rgb(194, 174, 142)'; // رنگ طلایی

  return (
    <Container className="my-5" style={{ direction: 'rtl', textAlign: 'right' }}>
      <Row className="gy-4">
        {/* فرم تماس */}
        <Col md={6}>
          <h2 className="mb-4">تماس با ما</h2>
          {submitted && (
            <div className="alert alert-success">پیغام شما با موفقیت ارسال شد ✅</div>
          )}
          <Form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ backdropFilter: 'blur(10px)', background: `rgba(194,174,142,0.1)` }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ color: goldColor }}>نام و نام خانوادگی</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="نام شما" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                style={{ borderColor: goldColor, textAlign: 'right' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label style={{ color: goldColor }}>ایمیل</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="ایمیل شما" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                style={{ borderColor: goldColor, textAlign: 'right' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label style={{ color: goldColor }}>پیغام شما</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                placeholder="پیغام خود را بنویسید" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
                style={{ borderColor: goldColor, textAlign: 'right' }}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="fw-bold" style={{ background: goldColor, borderColor: goldColor }}>ارسال</Button>
          </Form>
        </Col>

        {/* اطلاعات تماس */}
        <Col md={6}>
          <h2 className="mb-4" style={{ color: goldColor }}>اطلاعات تماس</h2>
          <div className="p-4 shadow rounded" style={{ backdropFilter: 'blur(10px)', background: `rgba(194,174,142,0.05)`, color: goldColor }}>
            <p style={{ direction: 'rtl', textAlign: 'right' }}><GoLocation size={20} className="me-2"/> تهران، خیابان مثال، پلاک ۱۲۳</p>
            <p style={{ direction: 'rtl', textAlign: 'right' }}><TiPhone size={20} className="me-2"/> ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <p style={{ direction: 'rtl', textAlign: 'right' }}><MdEmail size={20} className="me-2"/> info@example.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;