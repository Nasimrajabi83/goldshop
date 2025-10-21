import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Form, Card } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import "../App.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "گردنبند طلا",
      price: 5000000,
      quantity: 1,
      img: "https://via.placeholder.com/80x80?text=Necklace",
    },
    {
      id: 2,
      title: "انگشتر طلا",
      price: 3000000,
      quantity: 2,
      img: "https://via.placeholder.com/80x80?text=Ring",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-section py-5">
      <Container>
        <h2 className="mb-4 text-center fw-bold">سبد خرید</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">سبد خرید شما خالی است.</p>
        ) : (
          <Row>
            {/* بخش جدول محصولات */}
            <Col lg={8} md={12}>
              <Table responsive className="cart-table align-middle">
                <thead>
                  <tr>
                    <th>محصول</th>
                    <th>قیمت</th>
                    <th>تعداد</th>
                    <th>جمع</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="cart-img me-2"
                          />
                          <span>{item.title}</span>
                        </div>
                      </td>
                      <td>{item.price.toLocaleString()} تومان</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => decreaseQty(item.id)}
                          >
                            −
                          </Button>
                          <Form.Control
                            value={item.quantity}
                            readOnly
                            className="mx-2 text-center qty-input"
                          />
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>
                        {(item.price * item.quantity).toLocaleString()} تومان
                      </td>
                      <td>
                        <Button
                          variant="link"
                          className="text-danger p-0"
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>

            {/* بخش خلاصه سفارش */}
            <Col lg={4} md={12}>
              <Card className="p-3 order-summary shadow-sm">
                <h5 className="fw-bold mb-3">خلاصه سفارش</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>جمع کل:</span>
                  <span className="fw-bold">{total.toLocaleString()} تومان</span>
                </div>
                <Button className="w-100 checkout-btn mt-3">
                  ادامه به پرداخت
                </Button>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default CartPage;