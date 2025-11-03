import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        // شبیه‌سازی API
        const data = [
          // داده نمونه، اگر خالی باشد پیام "هیچ فاکتوری یافت نشد" نمایش داده می‌شود
          // { id: 1, date: "2025-10-31", amount: 1250000, status: "پرداخت شده" },
        ];

        setInvoices(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("مشکل در دریافت فاکتورها ❌");
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  if (loading) return <p className="text-center mt-4">در حال بارگذاری فاکتورها...</p>;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  return (
    <Container style={{ direction: "rtl", textAlign: "right", marginTop: "2rem" }}>

      {invoices.length === 0 ? (
        <p className="text-center fs-5" style={{ color: "rgb(194,174,142)" }}>
          هیچ فاکتوری یافت نشد
        </p>
      ) : (
        <Table striped bordered hover responsive>
          <thead style={{ backgroundColor: "rgb(194,174,142)", color: "#fff" }}>
            <tr>
              <th>شماره فاکتور</th>
              <th>تاریخ</th>
              <th>مبلغ (تومان)</th>
              <th>وضعیت</th>
              <th>جزئیات</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.id}</td>
                <td>{inv.date}</td>
                <td>{inv.amount.toLocaleString("fa-IR")}</td>
                <td>{inv.status}</td>
                <td>
                  <Button variant="outline-dark" size="sm">
                    مشاهده
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Invoices;