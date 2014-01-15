<?php

if(!isset($_REQUEST['password'])) //1
{
	include 'pword.html.php';
}
else //3
{
	$password = $_REQUEST['password'];
	if($password == 'NOT THIS LOL')
	{
		include 'index.html.php';
	}
	else
	{
		$output = "<p>Sorry, that is not the correct password</p>";
		include 'pword.html.php';
	}
}
?>
