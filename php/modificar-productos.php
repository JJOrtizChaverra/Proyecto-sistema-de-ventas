<?php

include("./conexion.php");

session_start();

if ($_POST) {
    $id_producto = (int) $_POST['id-producto'];

    $nombre = $_POST['name-producto'];
    $precio = (int) $_POST['price-producto'];
    $existencias = (int) $_POST['exists-producto'];
    $tienda = preg_replace("/[^a-zA-Z\s]+/", "", $_POST['pertenece-a-la-tienda']);
    $id_tienda = (int) preg_replace("/[^0-9]/", "", $_POST['pertenece-a-la-tienda']);

    $con = conexion();

    $delete = "DELETE FROM productos WHERE Id = $id_producto";
    $exec_query = mysqli_query($con, $delete);

    $insert = "INSERT INTO productos VALUES($id_producto, '$nombre', $precio, $existencias, '$tienda', $id_tienda)";

    // $update = "UPDATE productos SET Nombre = '$nombre', Precio = $precio, Existencias = $existencias 
    // WHERE Id = $id_producto;";
}

// $exec_query = mysqli_query($con, $update);
$exec_query = mysqli_query($con, $insert);

header("Location: ./principal.php");