<?php

if(!isset($_REQUEST['password'])) //1
{
	include 'pword.html.php';
}
else //3
{
	$password = $_REQUEST['password'];
	if($password == 'oldmate')
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