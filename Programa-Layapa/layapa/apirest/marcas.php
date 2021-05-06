<?php

class Marcas
{
    ///////////////////tabla Marcas

    public function getMarcas()
    {

        $vector = array();
        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $sql = "SELECT * FROM Marcas";
        $consulta = $db->prepare($sql);
        $consulta->execute();
        while ($fila = $consulta->fetch()) {
            $vector[] = array(
                "id" => $fila['id'],
                "nombre" => $fila['nombre']
            );
        } //fin del ciclo while 

        return $vector;
    }

    public function getMarcas($id)
    {

        $vector = array();
        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $sql = "SELECT * FROM Marcas WHERE id=:id";
        $consulta = $db->prepare($sql);
        $consulta->bindParam(':id', $id);
        $consulta->execute();
        while ($fila = $consulta->fetch()) {
            $vector[] = array(
                "id" => $fila['id'],
                "nombre" => $fila['nombre']
            );
        } //fin del ciclo while 

        return $vector[0];
    }


    public function addMarca($nombre)
    {

        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $sql = "INSERT INTO Marcas (nombre) VALUES (:nombre)";
        $consulta = $db->prepare($sql);
        $consulta->bindParam(':nombre', $nombre);
        $consulta->execute();

        return '{"msg":"marca agregado"}';
    }

    public function deleteMarca($id)
    {

        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $sql = "DELETE FROM Marcas WHERE id=:id";
        $consulta = $db->prepare($sql);
        $consulta->bindParam(':id', $id);
        $consulta->execute();

        return '{"msg":"marca eliminado"}';
    }

    public function updateMarca($id, $nombre)
    {

        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $sql = "UPDATE Marcas SET nombre=:nombre WHERE id=:id";
        $consulta = $db->prepare($sql);
        $consulta->bindParam(':id', $id);
        $consulta->bindParam(':nombre', $nombre);
        $consulta->execute();

        return '{"msg":"marca actualizado"}';
    }
}
?>