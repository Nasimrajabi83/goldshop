<?php
session_start();
include("db.php");
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "ابتدا وارد حساب شوید."]);
    exit();
}

$user_id = $_SESSION['user_id'];
$query = "SELECT id, total, status, created_at FROM orders WHERE user_id='$user_id' ORDER BY id DESC";
$result = mysqli_query($conn, $query);

$orders = [];
while ($row = mysqli_fetch_assoc($result)) {
    $orders[] = $row;
}

echo json_encode(["status" => "success", "orders" => $orders]);
?>
