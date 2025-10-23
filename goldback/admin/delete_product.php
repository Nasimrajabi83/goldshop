<?php
session_start();
include("../db.php");

// بررسی اینکه کاربر ادمین است
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}

// بررسی اینکه پارامتر id ارسال شده باشد
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = intval($_GET['id']);

    // گرفتن نام فایل تصویر محصول برای حذف از سرور
    $query = "SELECT image FROM products WHERE id = $id";
    $result = mysqli_query($conn, $query);
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // اگر تصویر وجود دارد، حذفش کن
        if (!empty($row['image']) && file_exists("../uploads/".$row['image'])) {
            unlink("../uploads/".$row['image']);
        }

        // حذف محصول از پایگاه داده
        $delete_query = "DELETE FROM products WHERE id = $id";
        mysqli_query($conn, $delete_query);
    }
}

// بازگشت به صفحه داشبورد
header("Location: dashboard.php");
exit();
?>
