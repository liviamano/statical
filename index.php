<?php

$query = require 'factory.php';

$persons = $query->selectAll('person');

var_dump($persons);

//require 'index.view.php';