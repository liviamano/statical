<?php
$query = require 'factory.php';

$highestEducation = $query->selectAll('highest_education_achieved');

echo json_encode($highestEducation);