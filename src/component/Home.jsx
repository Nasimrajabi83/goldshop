import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "../App.css";
import { FaRegUser } from "react-icons/fa";
import { TiPhone } from "react-icons/ti";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [goldPrice, setGoldPrice] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) setUser(JSON.parse(savedUser));
}, []);

  // قیمت طلا
  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch("https://api.navasan.tech/latest/?api_key=freeEls84SrIBqteiA5mbLP9fabNmbZI");
        if (!response.ok) throw new Error("ارتباط با سرور برقرار نشد ❌");

        const data = await response.json();
        if (data && data["18ayar"]?.value) {
          const price = Number(data["18ayar"].value).toLocaleString("fa-IR");
          setGoldPrice(price);
          setError(null);
        } else setError("داده معتبر دریافت نشد ⚠️");
      } catch {
        setError("ارتباط با سرور برقرار نشد ❌");
      }
    };

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 300000);
    return () => clearInterval(interval);
  }, []);

  console.log("Current user:", user);

  return (
    <div className="layout-container">
      <Navbar expand="lg" variant="dark" sticky="top">
        <Container fluid>
          <div className="d-flex align-items-center order-lg-1 ms-lg-3">
            <Navbar.Brand href="/" className="brand fw-bold">GoldShop</Navbar.Brand>
          </div>

          {/* سرچ باکس + قیمت طلا */}
          <div className="mx-auto order-lg-2 d-none d-lg-flex align-items-center gap-3">
            <Form className="d-flex" style={{ width: "350px" }}>
              <FormControl type="search" placeholder="search..." className="search me-2" aria-label="Search" />
              <Button variant="outline-dark">search</Button>
            </Form>
            <div
              style={{
                background: "rgba(194, 174, 142, 0.2)",
                border: "1px solid rgb(194, 174, 142)",
                color: "rgb(194, 174, 142)",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                minWidth: "160px",
                textAlign: "center",
              }}
            >
              {error
                ? error
                : goldPrice
                ? `طلا ۱۸ عیار: ${goldPrice} تومان`
                : "در حال بارگذاری..."}
            </div>
          </div>

          <div className="d-flex align-items-center order-lg-3 me-lg-3">
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/cart" className="me-4 d-flex align-items-center gap-1">
                  <FaShoppingBasket className='icon' />
                </Nav.Link>
                <Nav.Link href="#about" className='me-4'>درباره ما</Nav.Link>
                <Nav.Link href="#contact" className='me-4'>
                  تماس با ما <TiPhone className='icon' />
                </Nav.Link>

                <NavDropdown title="فروشگاه" id="store-dropdown" menuVariant="dark" className='custom-dropdown me-4' align="end">
                  <NavDropdown.Item href="#ring">انگشتر</NavDropdown.Item>
                  <NavDropdown.Item href="#necklace">گردنبند</NavDropdown.Item>
                  <NavDropdown.Item href="#earring">گوشواره</NavDropdown.Item>
                  <NavDropdown.Item href="#bracelet">دستبند</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#all">مشاهده همه محصولات</NavDropdown.Item>
                </NavDropdown>

                
                {user ? (
                  <Button
                    style={{ background: "rgba(194, 174, 142, 0.2)",border: "1px solid rgb(194, 174, 142)",color: "rgb(194, 174, 142)",borderRadius:'8px'}}
                    size="sm"
                    className="lbtn fw-bold me-3"
                    onClick={() => navigate("/dashboard")}
                  >
                      داشبورد
                      <FaRegUser className="icon" />
                  </Button>
                ) : (
                  <Button
                    style={{ background: "rgba(194, 174, 142, 0.2)",border: "1px solid rgb(194, 174, 142)",color: "rgb(194, 174, 142)",borderRadius:'8px'}}
                    size="sm"
                    className="lbtn d-flex align-items-center gap-1 fw-bold"
                    onClick={() => navigate("/login")}
                  >
                    ورود / ثبت نام
                    <FaRegUser className="icon" />
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Home;