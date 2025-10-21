<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include("db.php");

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

if ($email == "" || $password == "") {
    echo json_encode(["status" => "error", "message" => "لطفاً تمام فیلدها را پر کنید."]);
    exit();
}

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 0) {
    echo json_encode(["status" => "error", "message" => "کاربری با این ایمیل یافت نشد."]);
    exit();
}

$user = $result->fetch_assoc();

if ($password === $user["password"]) {
    $_SESSION['user_id'] = $user['id']; 
    echo json_encode([
        "status" => "success",
        "message" => "ورود موفقیت‌آمیز بود ✅",
        "user" => [
            "id" => $user["id"],
            "fullname" => $user["fullname"],
            "email" => $user["email"]
          
        ]

    ]);
} else {
    echo json_encode(["status" => "error", "message" => "رمز عبور اشتباه است."]);
}

$stmt->close();
$conn->close();
?>
