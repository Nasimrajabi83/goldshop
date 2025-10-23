import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup, Spinner } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/goldshop-main/backend/getCart.php")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.cart || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdfdfd, #f5f2ed)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "50px 0",
      }}
    >
      <Card
        style={{
          width: "90%",
          maxWidth: "700px",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
          border: "1px solid rgba(194, 174, 142, 0.4)",
        }}
      >
        <Card.Body>
          <Card.Title
            className="text-center mb-4"
            style={{
              fontWeight: "bold",
              fontSize: "1.8rem",
              color: "rgb(194, 174, 142)",
            }}
          >
            <FaShoppingBasket className='icon'/> سبد خرید شما
          </Card.Title>

          {loading ? (
            <div className="text-center py-4">
              <Spinner animation="border" style={{ color: "rgb(194, 174, 142)" }} />
            </div>
          ) : cart.length === 0 ? (
            <p className="text-center text-muted">سبد شما خالی است</p>
          ) : (
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item
                  key={item.cart_id}
                  style={{
                    background: "transparent",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(194, 174, 142, 0.3)",
                  }}
                >
                  <div>
                    <strong>{item.title}</strong>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    >
                      {item.price} تومان × {item.quantity}
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    style={{
                      borderRadius: "10px",
                      borderColor: "rgba(194, 174, 142, 0.4)",
                      color: "rgba(191, 57, 57, 1)",
                    }}
                  >
                    حذف
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}

          {cart.length > 0 && (
            <div className="text-center mt-4">
            <Link to="/checkout" className="nav-link me-4 d-flex align-items-center gap-1">
              <Button
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: "rgb(194, 174, 142)",
                  border: "none",
                  padding: "10px 40px",
                  borderRadius: "12px",
                  boxShadow: "0 3px 10px rgba(194, 174, 142, 0.3)",
                }}
              >
                نهایی کردن خرید
              </Button>
            </Link>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cart;