<?php
class Produto {
    protected $codigo;
    protected $quantidade;
    protected $descricao;
    protected $valor;
    /* const TABLENAME = 'produto'; */
    public static function all(PDO  $con) {
        $sql = "SELECT * FROM produto";
        $con->prepare($sql);
        $resultado = $con->query($sql);
        $dados = $resultado->fetchAll(PDO::FETCH_ASSOC);
        
        return json_encode($dados);
    }
}