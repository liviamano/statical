<?php
$query = require '../factory.php';

$disabled = $query->selectAll('dissable_currently_schooled');

echo json_encode($disabled);