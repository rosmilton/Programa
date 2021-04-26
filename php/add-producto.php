<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->nombre)
    && isset($data->codbarra)
    && isset($data->articulo)
    && isset($data->descripcion)
    && isset($data->marca)
    && !empty(trim($data->nombre))
    && !empty(trim($data->codbarra))
    && !empty(trim($data->articulo))
    && !empty(trim($data->descripcion))
    && !empty(trim($data->marca))
) {
    $codbarra = mysqli_real_escape_string($db_conn, trim($data->codbarra));
    $articulo = mysqli_real_escape_string($db_conn, trim($data->articulo));
    $descripcion = mysqli_real_escape_string($db_conn, trim($data->descripcion));
    $marca = mysqli_real_escape_string($db_conn, trim($data->marca));


    $insertProducto = mysqli_query($db_conn, "INSERT INTO `productos`(`codbarra`,`articulo`,`descripcion`,`marca`,`existe`) VALUES('$codbarra','$articulo','$descripcion','$marca','1')");
    if ($insertProducto) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success" => 1, "msg" => "Producto Creado.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Producto No Creado!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
