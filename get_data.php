<?php
$query = require 'factory.php';

$persons = $query->selectAll('ethnicity_table');

echo json_encode($persons);