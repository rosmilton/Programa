<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->codbarra)
    && isset($data->articulo)
    && isset($data->descripcion)
    && isset($data->marca)
    && is_numeric($data->id)
    && !empty(trim($data->codbarra))
    && !empty(trim($data->articulo))
    && !empty(trim($data->descripcion))
    && !empty(trim($data->marca))  
) {
    $codbarra = mysqli_real_escape_string($db_conn, trim($data->codbarra));
    $articulo = mysqli_real_escape_string($db_conn, trim($data->articulo));
    $descripcion = mysqli_real_escape_string($db_conn, trim($data->descripcion));
    $marca = mysqli_real_escape_string($db_conn, trim($data->marca));

    
        $updateProducto = mysqli_query($db_conn, "UPDATE `users` SET  `codbarra`='$ucodbarraseremail', `articulo`='$articulo', `descripcion`='$descripcion', `marca`='$marca' WHERE `id`='$data->id'");
        if ($updateProducto) {
            echo json_encode(["success" => 1, "msg" => "Producto Actualizado."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Producto No Actualizado!"]);
        }
   
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}