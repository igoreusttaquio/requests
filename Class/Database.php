<?php
class Database {
    private static $con;
    static function getConnection() {
        if(self::$con) {
            return self::$con;
        }
        else {
            $config = parse_ini_file('database.ini');
            $database = $config['database'];
            self::$con = new PDO("sqlite:{$database}");
            self::$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return self::$con;
        }
    }
}
