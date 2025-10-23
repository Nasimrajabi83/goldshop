<?php include 'db.php'; ?>

<h1 class="title"> محصولات </h1>

<div class="products">
<?php
$sql = "SELECT * FROM products ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    echo "
      <div class='product-card'>
        <img src='uploads/{$row['image']}' alt='{$row['title']}'>
        <h3>{$row['title']}</h3>
        <p>قیمت: {$row['price']} تومان</p>
        <a href='product.php?id={$row['id']}' class='btn'>مشاهده جزئیات</a>
      </div>
    ";
  }
} else {
  echo "<p>هیچ محصولی وجود ندارد.</p>";
}
?>
</div>


