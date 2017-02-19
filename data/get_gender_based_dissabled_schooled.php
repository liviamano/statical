<?php
$query = require '../factory.php';

$gender_based_dissabled_schooled = $query->selectAll('gender_based_dissabled_schooled');

echo json_encode($gender_based_dissabled_schooled);