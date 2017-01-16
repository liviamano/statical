<?php

class PDOConnection
{
    public static function make()
    {
        try {
            return new PDO('mysql:host=127.0.0.1;dbname=statical', 'root', '');
        } catch (PDOException $e) {
           die($e->getMessage());
        }
    }
}