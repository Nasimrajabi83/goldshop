<?php
session_start();
include("db.php");
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "ابتدا وارد حساب شوید."]);
    exit();
}

$user_id = $_SESSION['user_id'];
$order_id = $_GET['order_id'] ?? null;

if (!$order_id) {
    echo json_encode(["status" => "error", "message" => "شماره سفارش نامعتبر است."]);
    exit();
}

// بررسی مالک بودن سفارش
$check = mysqli_query($conn, "SELECT o.*, u.fullname, u.email 
                              FROM orders o 
                              JOIN users u ON o.user_id=u.id 
                              WHERE o.id='$order_id' AND o.user_id='$user_id'");
if (mysqli_num_rows($check) == 0) {
    echo json_encode(["status" => "error", "message" => "سفارشی یافت نشد."]);
    exit();
}

$order = mysqli_fetch_assoc($check);
$items_q = mysqli_query($conn, "SELECT oi.*, p.title 
                                FROM order_items oi 
                                JOIN products p ON oi.product_id = p.id 
                                WHERE oi.order_id='$order_id'");
$items = [];
while ($row = mysqli_fetch_assoc($items_q)) {
    $row['fullname'] = $order['fullname'];
    $row['email'] = $order['email'];
    $row['status'] = $order['status'];
    $row['total'] = $order['total'];
    $row['created_at'] = $order['created_at'];
    $items[] = $row;
}

echo json_encode(["status" => "success", "invoice" => $items]);
?>
