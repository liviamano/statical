<?php
$query = require '../factory.php';

$city= $query->selectAll('city_based_schooled');

echo json_encode($city);