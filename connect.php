<?php
	$host = "localhost";
	$username = "root";
	$password = "";
	$db = "portfolio_db";

	$conn = new mysqli($host, $username, $password, $db);

	if (!$conn) {
		echo "Connection failed";
	}
?>
