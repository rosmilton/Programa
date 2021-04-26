<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (isset($data->id) && is_numeric($data->id)) {
    $delID = $data->id;
    $deleteMarcas = mysqli_query($db_conn, "UPDATE `marcas` SET `existe`='0' WHERE `id`='$data->id'");
    if ($deleteUser) {
        echo json_encode(["success" => 1, "msg" => "Marca Borrado"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Marca No Borrado!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Producto Not Encontrado!"]);
}