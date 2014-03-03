<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

if (isset($_POST['submit']))	
{
	$to = 'nick@nicklong.id.au';
	$from = $_POST['email']; 
	$name = $_POST['name'];
	$comment = $_POST['comment'];
	$subject = 'Examples of work contact form'; 
	$subject2 = 'Copy of your email'; 
	$message = $name . " wrote the following: " . "\n\n" . $comment;
	$message2 = "Hi ".$name.","."\n"."Thanks for getting in contact, I'll get back to you as soon as I can."."\n\n"."For your records, here is a copy of your message." . "\n\n" . $comment;

	$headers = "From:" . $from;
	$headers2 = "From:" . $to;
	mail($to, $subject, $message, $headers);
	mail($from, $subject2, $message2, $headers2);
	include 'thankyou.html.php';
	exit();
 }

include 'index.html.php';
?>
