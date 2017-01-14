<?php
$query = require 'factory.php';

$data = [
    array('name' => 'Livia', 'age' => '21'),
    array('name' => 'Alisa', 'age' => '18'),
    array('name' => 'Andrea', 'age' => '16')
];

$persons = $query->selectAll('ethnicity_table');

echo json_encode($persons);