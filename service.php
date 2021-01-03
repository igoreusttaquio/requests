<?php
require_once 'Class/Database.php';
require_once 'Class/Produto.php';

echo "<pre>".Produto::all(Database::getConnection())."</pre>";