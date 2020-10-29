<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['name'])) {
    $errors[] = 'Name is empty';
  } else {
    $name = $_POST['name'];
  }
  if (empty($_POST['number'])) {
    $errors[] = 'Number is empty';
  } else {
    $number = $_POST['number'];
  }
  if (empty($_POST['option'])) {
    $errors[] = 'Option is empty';
  } else {
    $option = $_POST['option'];
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Name: <span style=\"color:#888\">$name</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Phone No: <span style=\"color:#888\">$number</span>
    <br>
    Selected College: <span style=\"color:#888\">$option\n</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
    
    $headers = 	'From: Landing Page Form <admin@destinex.net>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'mbbsadmissionsinabroad@gmail.com';
    $subject = 'Application Received from Landing Page Form';
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
  }
}
?>

  <?php if (!empty($errors)) : ?> 

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>