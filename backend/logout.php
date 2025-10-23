<?php
session_start();
session_destroy();
header("Content-Type: application/json; charset=UTF-8");
echo json_encode(["status" => "success", "message" => "خروج با موفقیت انجام شد."]);
?>
