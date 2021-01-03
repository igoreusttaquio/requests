<?php
class Representante {
    /* const TABLENAME = 'representante'; */
    public static function all(PDO  $con) {
        $sql = "SELECT * FROM representante";
        $con->prepare($sql);
        $resultado = $con->query($sql);
        $dados = $resultado->fetchAll(PDO::FETCH_ASSOC);
        
        return json_encode($dados);
    }
}