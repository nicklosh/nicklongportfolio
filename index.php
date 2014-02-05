<?php
if (isset($_POST['submit']))
{
	$to = 'nkmlong@gmail.com';
	$from = $_POST['email']; 
	$name = $_POST['name'];
	$comment = $_POST['comment'];
	$subject = 'Examples of work contact form'; 
	$subject2 = 'Copy of your email'; 
	$message = $name . " wrote the following: " . "\n\n" . $comment;
	$message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

	$headers = "From:" . $from;
	$headers2 = "From:" . $to;
	mail($to, $subject, $message, $headers);
	mail($from, $subject2, $message2, $headers2);
	include 'thankyou.html.php';
	exit();
 }

include 'index.html.php';
// if(!isset($_REQUEST['password'])) 
// {
// 	include 'pword.html.php';
// }
// else 
// {
// 	$password = $_REQUEST['password'];
// 	if($password == 'NOT THIS LOL')
// 	{
// 		include 'index.html.php';
// 	}
// 	else
// 	{
// 		$output = "<p>Sorry, that is not the correct password</p>";
// 		include 'pword.html.php';
// 	}
// }
?>
