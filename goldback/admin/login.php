<?php
session_start();
include("../db.php");

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM admins WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['admin'] = $username;
        header("Location: dashboard.php");
        exit();
    } else {
        $error = "نام کاربری یا رمز عبور اشتباه است!";
    }
}
?>

<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<title>ورود ادمین</title>
<style>
    * { box-sizing: border-box; }
    body {
        font-family: sans-serif;
        background: linear-gradient(135deg, #000, #333);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .login-box {
        background: rgba(0, 0, 0, 0.85);
        padding: 30px 25px;
        border-radius: 12px;
        max-width: 350px;
        width: 90%;
        text-align: center;
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
    }
    .login-box h3 {
        color: gold;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }
    .login-box input {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        background: #222;
        border: 1px solid gold;
        color: white;
        border-radius: 6px;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    .login-box input:focus {
        outline: none;
        box-shadow: 0 0 8px gold;
    }
    .login-box button {
        width: 100%;
        padding: 12px;
        background: gold;
        border: none;
        border-radius: 6px;
        color: black;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        margin-top: 10px;
        transition: background 0.3s ease;
    }
    .login-box button:hover {
        background: #d4af37;
    }
    .login-box p {
        color: #ff6666;
        font-size: 13px;
        margin-top: 10px;
    }
</style>
</head>
<body>

<div class="login-box">
    <h3>ورود ادمین</h3>
    <form method="POST">
        <input type="text" name="username" placeholder="نام کاربری" required>
        <input type="password" name="password" placeholder="رمز عبور" required>
        <button type="submit" name="login">ورود</button>
        <?php if (isset($error)) echo "<p>$error</p>"; ?>
    </form>
</div>

</body>
</html>