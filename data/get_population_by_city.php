<?php
$query = require '../factory.php';

$population_by_city = $query->selectAll('population_by_city');

echo json_encode($population_by_city);