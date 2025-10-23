<?php
include("../db.php");
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM products WHERE id = $id";
    $result = mysqli_query($conn, $query);
    $product = mysqli_fetch_assoc($result);
}
if (isset($_POST['update'])) {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $karat = $_POST['karat'];
    $weight = $_POST['weight'];
    $stock = $_POST['stock'];

    if (!empty($_FILES['image']['name'])) {
        $image = $_FILES['image']['name'];
        $target = "../uploads/" . basename($image);
        move_uploaded_file($_FILES['image']['tmp_name'], $target);
    } else {
        $image = $product['image']; 
    }

    $updateQuery = "UPDATE products 
                    SET title='$title', description='$description', price='$price', 
                        karat='$karat', weight='$weight', stock='$stock', image='$image' 
                    WHERE id=$id";

    if (mysqli_query($conn, $updateQuery)) {
        header("Location: dashboard.php?message=Product updated successfully");
        exit;
    } else {
        echo " Error: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>ویرایش محصول</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>ویرایش محصول</h2>

    <form method="POST" enctype="multipart/form-data">
        <label>عنوان محصول:</label><br>
        <input type="text" name="title" value="<?= $product['title'] ?>" required><br><br>

        <label>توضیحات:</label><br>
        <textarea name="description" required><?= $product['description'] ?></textarea><br><br>

        <label>قیمت:</label><br>
        <input type="number" name="price" value="<?= $product['price'] ?>" required><br><br>

        <label>عیار:</label><br>
        <input type="text" name="karat" value="<?= $product['karat'] ?>" required><br><br>

        <label>وزن:</label><br>
        <input type="text" name="weight" value="<?= $product['weight'] ?>" required><br><br>

        <label>موجودی:</label><br>
        <input type="number" name="stock" value="<?= $product['stock'] ?>" required><br><br>

        <label>تصویر فعلی:</label><br>
        <img src="../uploads/<?= $product['image'] ?>" width="120"><br><br>

        <label>تغییر تصویر:</label><br>
        <input type="file" name="image"><br><br>

        <button type="submit" name="update">ذخیره تغییرات</button>
    </form>
</body>
</html>
