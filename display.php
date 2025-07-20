<?php
include 'connect.php';

$sql = "SELECT name, email, phone FROM contact_form";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2 style='text-align:center; font-family:sans-serif;'>Submitted Contacts</h2>";
    echo "<table border='1' 
            style='margin: 20px auto; 
            border-collapse: collapse; 
            font-family: sans-serif;
            cellspacing='0' 
            cellpadding='10'
            '>
            <tr style='background-color:#f2f2f2;'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['name'] . "</td>
                <td>" . $row['email'] . "</td>
                <td>" . $row['phone'] . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "<p style='text-align:center; font-family:sans-serif;'>No records found.</p>";
}

$conn->close();