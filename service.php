<?php
require_once 'Class/Database.php';
require_once 'Class/Produto.php';

echo Produto::all(Database::getConnection());