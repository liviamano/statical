<?php
$query = require '../factory.php';

$female_schooled = $query->selectAll('female_city_based_schooling');

echo json_encode($female_schooled);