<?php
session_start();
include("db.php");
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "ابتدا وارد حساب شوید."]);
    exit();
}

$user_id = $_SESSION['user_id'];

$query = "SELECT c.id as cart_id, p.id as product_id, p.title, p.price, c.quantity
          FROM cart c 
          JOIN products p ON c.product_id = p.id 
          WHERE c.user_id = '$user_id'";
$result = mysqli_query($conn, $query);

$cart = [];
while ($row = mysqli_fetch_assoc($result)) {
    $cart[] = $row;
}

echo json_encode(["status" => "success", "cart" => $cart]);
?>
