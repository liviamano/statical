<?php
$query = require 'factory.php';

$illeterate = $query->selectAll('illeterate');

echo json_encode($illeterate);