<?php
session_start();
include("db.php");
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "وارد حساب خود شوید."]);
    exit();
}

$user_id = $_SESSION['user_id'];


$cart_q = mysqli_query($conn, "SELECT c.*, p.price FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id='$user_id'");
if (mysqli_num_rows($cart_q) == 0) {
    echo json_encode(["status" => "error", "message" => "سبد خرید خالی است."]);
    exit();
}


$total = 0;
while ($item = mysqli_fetch_assoc($cart_q)) {
    $total += $item['price'] * $item['quantity'];
}

mysqli_query($conn, "INSERT INTO orders (user_id, total, status, created_at) VALUES ('$user_id', '$total', 'در حال پردازش', NOW())");
$order_id = mysqli_insert_id($conn);

mysqli_data_seek($cart_q, 0);
while ($item = mysqli_fetch_assoc($cart_q)) {
    $product_id = $item['product_id'];
    $quantity = $item['quantity'];
    $price = $item['price'];
    mysqli_query($conn, "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ('$order_id', '$product_id', '$quantity', '$price')");
}


mysqli_query($conn, "DELETE FROM cart WHERE user_id='$user_id'");

echo json_encode(["status" => "success", "order_id" => $order_id]);
?>
