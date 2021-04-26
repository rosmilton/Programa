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
    && isset($data->nombre)
    && is_numeric($data->id)
    && !empty(trim($data->nombre))
) {
    $nombre = mysqli_real_escape_string($db_conn, trim($data->nombre));
    
        $updateMarca = mysqli_query($db_conn, "UPDATE `users` SET `nombre`='$nombre' WHERE `id`='$data->id'");
        if ($updateMarca) {
            echo json_encode(["success" => 1, "msg" => "Marca Actualizado."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Marca No Actualizado!"]);
        }
   
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}