<?php
session_start();
include("db.php");
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "ابتدا وارد حساب شوید."]);
    exit();
}

$user_id = $_SESSION['user_id'];
$query = "SELECT id, fullname, email FROM users WHERE id = '$user_id'";
$result = mysqli_query($conn, $query);

if ($result && mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
    echo json_encode(["status" => "success", "user" => $user]);
} else {
    echo json_encode(["status" => "error", "message" => "کاربر یافت نشد."]);
}
?>
