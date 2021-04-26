<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allProductos = mysqli_query($db_conn, "SELECT * FROM `productos`");
if (mysqli_num_rows($allProductos) > 0) {
    $all_productos = mysqli_fetch_all($allProductos, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "productos" => $all_productos]);
} else {
    echo json_encode(["success" => 0]);
}