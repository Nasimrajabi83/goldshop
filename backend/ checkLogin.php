<?php
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

// ست کردن session cookie
ini_set('session.cookie_samesite', 'None'); 
ini_set('session.cookie_secure', '0'); // برای localhost
session_start();

header("Content-Type: application/json");

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        "loggedIn" => true,
        "user" => [
            "id" => $_SESSION['user_id'],
            "fullname" => $_SESSION['fullname']
        ]
    ]);
} else {
    echo json_encode(["loggedIn" => false]);
}
?>