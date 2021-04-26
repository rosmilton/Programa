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
    && !empty(trim($data->nombre))
) {
    $nombre = mysqli_real_escape_string($db_conn, trim($data->nombre));

    $insertMarca = mysqli_query($db_conn, "INSERT INTO `marcas`(`nombre`,`existe`) VALUES('$nombre','1')");
    if ($insertMarca) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success" => 1, "msg" => "Marca Creada.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Marca No Creada!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
