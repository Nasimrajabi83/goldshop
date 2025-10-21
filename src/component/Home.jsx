import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "../App.css"
import { FaRegUser } from "react-icons/fa";
import { TiPhone } from "react-icons/ti";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  return (
    <div className="layout-container">
      {/* Navbar */}
      <Navbar expand="lg"  variant="dark" sticky="top">
        <Container fluid>
          <div className="d-flex align-items-center order-lg-1 ms-lg-3">
            <Navbar.Brand href="/" className="brand fw-bold">GoldShop</Navbar.Brand>
          </div>

          <div className="mx-auto order-lg-2 d-none d-lg-flex">
            <Form className="d-flex" style={{ width: "350px", color:"black" }}>
              <FormControl
                type="search"
                style={{  
                  color: "black",             
                  }}
                variant="dark"
                placeholder="search..."
                className="search me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">search</Button>
            </Form>
          </div>

          <div className="d-flex align-items-center order-lg-3 me-lg-3">
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto align-items-center">
                <Nav.Link href="#about" className='me-4'>
                  <Link to="/basket" className="nav-link me-4 d-flex align-items-center gap-1">
                   <FaShoppingBasket className='icon'/>
                   </Link>
                   </Nav.Link>
                <Nav.Link href="#about" className='me-4'>درباره ما</Nav.Link>
                <Nav.Link href="#contact" className='me-4'>
                  تماس با ما <TiPhone className='icon'/>
                </Nav.Link>
                <NavDropdown
                  title="فروشگاه"
                  id="store-dropdown"
                  menuVariant="dark"
                  className='custom-dropdown me-4'
                  align="end"
                >
                  <NavDropdown.Item href="#ring">انگشتر</NavDropdown.Item>
                  <NavDropdown.Item href="#necklace">گردنبند</NavDropdown.Item>
                  <NavDropdown.Item href="#earring">گوشواره</NavDropdown.Item>
                  <NavDropdown.Item href="#bracelet">دستبند</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#all">مشاهده همه محصولات</NavDropdown.Item>
                </NavDropdown>
                <Link to="/login" className="nav-link me-4 d-flex align-items-center gap-1">
                  ورود / ثبت نام 
                  <FaRegUser className="icon" />
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      {/* محتوای وسط */}
      <div >
        <Outlet/>
      </div>

      {/* فوتر */}
      <Footer/>
    </div>
  );
}

export default Home;