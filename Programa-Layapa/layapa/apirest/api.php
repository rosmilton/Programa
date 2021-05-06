<?php

public class Api
{

  /////////////////Tabla Productos

  public function getProductos()
  {

    $vector = array();
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "SELECT * FROM productos";
    $consulta = $db->prepare($sql);
    $consulta->execute();
    while ($fila = $consulta->fetch()) {
      $vector[] = array(
        "id" => $fila['id'],
        "cod_barra" => $fila['cod_barra'],
        "articulo" => $fila['articulo'],
        "descripcion" => $fila['descripcion']
      );
    } //fin del ciclo while 

    return $vector;
  }

  public function getProducto($id)
  {

    $vector = array();
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "SELECT * FROM productos WHERE id=:id";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':id', $id);
    $consulta->execute();
    while ($fila = $consulta->fetch()) {
      $vector[] = array(
        "id" => $fila['id'],
        "cod_barra" => $fila['cod_barra'],
        "articulo" => $fila['articulo'],
        "marca" => $fila['marca'],
        "descripcion" => $fila['descripcion']
      );
    } //fin del ciclo while 

    return $vector[0];
  }


  public function addProducto($cod_barra, $articulo, $descripcion)
  {

    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "INSERT INTO productos (cod_barra, articulo,descripcion) VALUES (:cod_barra,:articulo,:descripcion)";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':cod_barra', $cod_barra);
    $consulta->bindParam(':articulo', $articulo);
    $consulta->bindParam(':descripcion', $descripcion);
    $consulta->execute();

    return '{"msg":"producto agregado"}';
  }

  public function deleteProducto($id)
  {

    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "DELETE FROM productos WHERE id=:id";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':id', $id);
    $consulta->execute();

    return '{"msg":"producto eliminado"}';
  }

  public function updateProducto($id, $cod_barra, $articulo, $descripcion)
  {

    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $sql = "UPDATE productos SET cod_barra=:cod_barra, articulo=:articulo, descripcion=:descripcion WHERE id=:id";
    $consulta = $db->prepare($sql);
    $consulta->bindParam(':id', $id);
    $consulta->bindParam(':cod_barra', $cod_barra);
    $consulta->bindParam(':articulo', $articulo);
    $consulta->bindParam(':descripcion', $descripcion);
    $consulta->execute();

    return '{"msg":"producto actualizado"}';
  }

  
}
?>