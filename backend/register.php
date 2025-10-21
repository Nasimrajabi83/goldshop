<?php
// اجازه دسترسی از React (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// اتصال به دیتابیس
include("db.php");

// دریافت داده‌ها از فرانت
$data = json_decode(file_get_contents("php://input"), true);

$fullname = $data["fullname"] ?? "";
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

// بررسی خالی نبودن فیلدها
if ($fullname == "" || $email == "" || $password == "") {
    echo json_encode(["status" => "error", "message" => "لطفاً تمام فیلدها را پر کنید."]);
    exit();
}

// بررسی تکراری نبودن ایمیل
$check = $conn->prepare("SELECT * FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "ایمیل قبلاً ثبت شده است."]);
    exit();
}

// درج اطلاعات در دیتابیس (رمز بدون هش)
$stmt = $conn->prepare("INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $fullname, $email, $password);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "ثبت‌نام با موفقیت انجام شد ✅"]);
} else {
    echo json_encode(["status" => "error", "message" => "خطایی در ثبت‌نام رخ داد ❌"]);
}

$stmt->close();
$conn->close();
?>
