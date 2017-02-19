<?php
$query = require '../factory.php';

$primary_low_public_private = $query->selectAll('primary_low_public_private');

echo json_encode($primary_low_public_private);
