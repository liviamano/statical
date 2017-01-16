<?php

class Person
{
    protected $name;
    protected $age;
    protected $email;
    protected $phone;


    public function __construct($name)
    {
        $this->name = $name;
    }

    public function setAge($age)
    {
        $this->age = $age;
    }

    public function getAge()
    {
        return $this->age;
    }
}
