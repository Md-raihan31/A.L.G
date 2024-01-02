<?php
$otp=rand(00000,99999);
?>

OTP VERYFIE

<form action="otp.php" method="post">
  <input type="email" name="email" placeholder="enter new email" required>
  <input type="hidden" name="otp" value="<?php echo $otp; ?>">
  <button type="submit">veryfie</button>

</form>
