<?php
$query = require '../factory.php';

$male_schooled = $query->selectAll('male_city_based_schooling');

echo json_encode($male_schooled);