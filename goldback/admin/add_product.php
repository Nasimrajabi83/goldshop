<?php
session_start();
include("../db.php");

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}

if (isset($_POST['submit'])) {
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $description = mysqli_real_escape_string($conn, $_POST['description']);
    $price = mysqli_real_escape_string($conn, $_POST['price']);
    $karat = mysqli_real_escape_string($conn, $_POST['karat']);
    $weight = mysqli_real_escape_string($conn, $_POST['weight']);
    $stock = mysqli_real_escape_string($conn, $_POST['stock']);

    $imageName = "";
    if (!empty($_FILES['image']['name'])) {
        $imageName = time() . "_" . basename($_FILES['image']['name']);
        $targetPath = "../uploads/" . $imageName;
        move_uploaded_file($_FILES['image']['tmp_name'], $targetPath);
    }

    $query = "INSERT INTO products (title, description, price, karat, weight, stock, image, created_at)
              VALUES ('$title', '$description', '$price', '$karat', '$weight', '$stock', '$imageName', NOW())";

    if (mysqli_query($conn, $query)) {
        header("Location: dashboard.php?added=1");
        exit();
    } else {
        $error = "خطا در افزودن محصول: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>افزودن محصول جدید</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    * { box-sizing: border-box; }
    body {
        font-family: sans-serif;
        background: linear-gradient(135deg, #fef8d1ff, #fffdfdff);
        color: white;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    form {
        background: rgba(0,0,0,0.8);
        padding: 25px;
        width: 90%;
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(255, 221, 0, 0.4);
    }
    h3 {
        text-align: center;
        color: rgb(194, 174, 142);
        margin-bottom: 20px;
        font-size: 22px;
    }
    label {
        display: block;
        margin-top: 12px;
        font-size: 14px;
        color: #f1f1f1;
    }
    input, textarea {
        width: 100%;
        padding: 10px;
        margin-top: 6px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgb(194, 174, 142);
        border-radius: 6px;
        color: white;
        font-size: 14px;
    }
    input[type="file"] {
        padding: 5px;
    }
    input:focus, textarea:focus {
        outline: none;
        border-color: rgb(194, 174, 142);
        background: rgba(255, 255, 255, 0.1);
    }
    button {
        width: 100%;
        margin-top: 20px;
        padding: 12px;
        background: rgba(248, 172, 49, 1);
        border: none;
        border-radius: 6px;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        transition: background 0.3s ease;
        color: black;
    }
    button:hover {
        background: rgb(194, 174, 142);
    }
    a {
        display: block;
        text-align: center;
        margin-top: 15px;
        color:rgb(194, 174, 142);
        text-decoration: none;
        font-size: 14px;
    }
    a:hover {
        text-decoration: underline;
    }
    p.error {
        color: #ff4d4d;
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
    }
</style>
</head>
<body>

<form method="POST" enctype="multipart/form-data">
    <h3>افزودن محصول جدید</h3>

    <label>عنوان محصول:</label>
    <input type="text" name="title" required>

    <label>توضیحات:</label>
    <textarea name="description" rows="4"></textarea>

    <label>قیمت (تومان):</label>
    <input type="number" name="price" step="0.01" required>

    <label>عیار (طلا):</label>
    <input type="number" name="karat" step="0.1">

    <label>وزن (گرم):</label>
    <input type="number" name="weight" step="0.01">

    <label>تعداد موجودی:</label>
    <input type="number" name="stock">

    <label>عکس محصول:</label>
    <input type="file" name="image" accept="image/*">

    <button type="submit" name="submit">افزودن محصول</button>
    <a href="dashboard.php">⬅ بازگشت به داشبورد</a>

    <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
</form>

</body>
</html>