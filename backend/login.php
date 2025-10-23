<?php
// آدرس دقیق frontend
$frontendOrigin = "http://localhost:5173";

// هدرهای CORS
header("Access-Control-Allow-Origin: $frontendOrigin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// پاسخ OPTIONS برای preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// تنظیم cookie برای session
ini_set('session.cookie_samesite', 'None'); 
ini_set('session.cookie_secure', '0'); // برای localhost با http
session_start();

include("db.php");

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

if ($email === "" || $password === "") {
    echo json_encode(["status" => "error", "message" => "لطفاً تمام فیلدها را پر کنید."]);
    exit();
}

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["status" => "error", "message" => "کاربری با این ایمیل یافت نشد."]);
    exit();
}

$user = $result->fetch_assoc();

// بررسی پسورد
if ($password === $user["password"]) {
    // ست کردن session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['fullname'] = $user['fullname'];

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