<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	include 'connect.php';

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$pass = $_POST['pass'];
	$msg = $_POST['msg'];


	$query = "INSERT INTO contact_form (name, email, phone, password, message) VALUES ('$name', '$email', '$phone', '$pass', '$msg')";
    $run = mysqli_query($conn, $query);

	if ($run) {
		echo "<div style='
            font-family: Arial, sans-serif;
            background-color: #d4edda;
            color: #155724;
            padding: 20px;
            border: 1px solid #c3e6cb;
            margin: 50px auto;
            width: 400px;
            border-radius: 8px;
            text-align: center;
        '>";
        echo "✅ <strong>Submission Successful!</strong><br><br>";
        echo "</div>";
	} else {
		echo "Failed connection";
	}
}
?>
