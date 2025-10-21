<?php
session_start();
include("../db.php");
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}
$query = "SELECT * FROM products ORDER BY id DESC";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>داشبورد مدیریت</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    * { box-sizing: border-box; }
    body {
        font-family: sans-serif;
        background: linear-gradient(135deg, #000, #333);
        margin: 0;
        color: white;
    }
    header {
        background: black;
        padding: 15px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: gold;
        position: relative;
        box-shadow: 0 0 10px rgba(255,215,0,0.5);
    }
    .logout {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: gold;
        color: black;
        padding: 8px 15px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        transition: background 0.3s ease;
    }
    .logout:hover {
        background: #d4af37;
    }
    .container {
        width: 95%;
        max-width: 1100px;
        margin: 30px auto;
        background: rgba(0,0,0,0.8);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(255,215,0,0.3);
    }
    .add {
        display: inline-block;
        background: gold;
        color: black;
        padding: 10px 15px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        margin-bottom: 20px;
        transition: background 0.3s ease;
    }
    .add:hover { background: #d4af37; }

    table {
        width: 100%;
        border-collapse: collapse;
        background: rgba(255,255,255,0.05);
        border-radius: 8px;
        overflow: hidden;
    }
    th, td {
        padding: 12px;
        text-align: center;
    }
    th {
        background: gold;
        color: black;
        font-weight: bold;
    }
    tr:nth-child(even) { background: rgba(255,255,255,0.05); }
    tr:nth-child(odd) { background: rgba(255,255,255,0.1); }
    img {
        border-radius: 5px;
        max-width: 60px;
    }

    a.btn {
        padding: 6px 10px;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        font-size: 13px;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    .edit { background: #007bff; }
    .delete { background: #dc3545; }
    .edit:hover { background: #0056b3; }
    .delete:hover { background: #a71d2a; }

    @media (max-width: 768px) {
        table, th, td {
            font-size: 12px;
        }
        header {
            font-size: 18px;
        }
    }
</style>
</head>
<body>

<header>
    پنل مدیریت
    <a href="logout.php" class="logout">خروج</a>
</header>

<div class="container">
    <a href="add_product.php" class="add">+ افزودن محصول جدید</a>

    <table>
        <tr>
            <th>ID</th>
            <th>عنوان</th>
            <th>عیار</th>
            <th>وزن (g)</th>
            <th>قیمت (تومان)</th>
            <th>موجودی</th>
            <th>عکس</th>
            <th>توضیحات</th>
            <th>تاریخ</th>
            <th>عملیات</th>
        </tr>

        <?php while ($row = mysqli_fetch_assoc($result)) { ?>
        <tr>
            <td><?= $row['id'] ?></td>
            <td><?= htmlspecialchars($row['title']) ?></td>
            <td><?= $row['karat'] ?></td>
            <td><?= $row['weight'] ?></td>
            <td><?= number_format($row['price']) ?></td>
            <td><?= $row['stock'] ?></td>
            <td>
                <?php if ($row['image']) { ?>
                    <img src="../uploads/<?= $row['image'] ?>" alt="Product">
                <?php } else { echo "ندارد"; } ?>
            </td>
            <td><?= htmlspecialchars($row['description']) ?></td>
            <td><?= $row['created_at'] ?></td>
            <td>
                <a href="edit_product.php?id=<?= $row['id'] ?>" class="btn edit">ویرایش</a>
                <a href="delete_product.php?id=<?= $row['id'] ?>" class="btn delete" onclick="return confirm('حذف شود؟')">حذف</a>
            </td>
        </tr>
        <?php } ?>
    </table>
</div>

</body>
</html>