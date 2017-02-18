<?php
$query = require '../factory.php';

$currently_schooled = $query->selectAll('region_based_currently_schooled');

echo json_encode($currently_schooled);