<?php
require_once 'Class/Database.php';
require_once 'Class/Representante.php';

echo Representante::all(Database::getConnection());