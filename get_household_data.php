<?php
$query = require 'factory.php';

$household = $query->selectAll('household_area_table');

echo json_encode($household);