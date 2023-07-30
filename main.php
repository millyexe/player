<?php
session_start();

include("db_connect.php");
$msg = false;

if (isset($_POST["user_name"])) {
    $user_name = $_POST["user_name"];
    $user_password = $_POST["user_password"];
    $query = "SELECT * FROM user WHERE user = '".$user_name."' AND password = '".$user_password."' LIMIT 1";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) == 1) {
        header("Location: welcome.php");
        exit; // Terminate the script after the redirect
    } else {
        $msg = "Incorrect Password";
    }
}
?>


<?php
session_start();

include("db_connect.php");
$msg = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user_name = $_POST["user_name"];
  $user_email = $_POST["user_email"];
  $user_password = $_POST["user_password"];
  $user_re_password = $_POST["user_re_password"];
  
 

if (!empty($user_name) && !empty($user_email) && !empty($user_password) && !is_numeric($user_name)){
 if ($user_password === $user_re_password) {
  $query = "INSERT INTO user (user, email, password) VALUES ('" . $user_name . "', '" . $user_email . "', '" . $user_password . "')";

 mysqli_query($con, $query);
 header("Location: login.php");
} else {
$msg = "Password Not Match";
 }
 }
} 
?> 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Website With Login & Registration | Codehal</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header>
      <h2 class="logo">MillyApp</h2>
      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">APP</a>
        <a href="#">Contact</a>
        <button class="btnLogin-popup">Login</button>
      </nav>
    </header>

    <div class="wrapper">
      <span class="icon-close">
        <ion-icon name="close"></ion-icon>
      </span>

      <div class="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div class="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" class="btn">Login</button>
          <div class="login-register">
            <p>
              Don't have an account?
              <a href="#" class="register-link">Register</a>
            </p>
          </div>
        </form>
      </div>

      <div class="form-box register">
        <h2>Sign Up</h2>
        <form action="#">
          <div class="input-box">
            <span class="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div class="remember-forgot">
            <label
              ><input type="checkbox" /> I agree to the terms &
              conditions</label
            >
          </div>
          <button type="submit" class="btn">Register</button>
          <div class="login-register">
            <p>
              Already have an account? <a href="#" class="login-link">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>

    <script src="app.js"></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </body>
</html>
