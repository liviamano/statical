<?php

//$query = require 'factory.php';
//
//$persons = $query->selectAll('person');
//
//var_dump($persons);

//require 'index.view.php';

//class Data
//{
//    public $name;
//    public $age;
//}

//$data = new Data();
//$data->name = 'Livia';
//$data->age = 21;

$data = [
    array('name'=>'Livia', 'age'=> '21'),
    array('name'=>'Alisa', 'age'=> '18'),
    array('name'=>'Andrea', 'age'=> '16')
];

echo json_encode($data);

//require 'index.view.php';