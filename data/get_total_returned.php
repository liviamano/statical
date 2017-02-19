<?php
$query = require '../factory.php';

$total_returned = $query->selectAll('total_returned_people');

echo json_encode($total_returned);