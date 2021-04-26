<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allMarcas = mysqli_query($db_conn, "SELECT * FROM `marcas`");
if (mysqli_num_rows($allMarcas) > 0) {
    $allMarcas = mysqli_fetch_all($allMarcas, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "marcas" => $allMarcas]);
} else {
    echo json_encode(["success" => 0]);
}