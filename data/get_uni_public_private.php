<?php
$query = require '../factory.php';

$uni_public_private = $query->selectAll('uni_public_private');

echo json_encode($uni_public_private);