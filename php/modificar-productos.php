<?php

include('./conexion.php');

session_start();

if ($_POST) {
    $nombre = $_POST['nombre-producto'];
    $precio = (int) $_POST['precio-producto'];
    $existencias = (int) $_POST['existencias-producto'];
    $tienda = preg_replace("/[^a-zA-Z\s]+/", "", $_POST['pertenece-a-la-tienda']);
    $id_tienda = (int) preg_replace("/[^0-9]/", "", $_POST['pertenece-a-la-tienda']);
    $id_producto = (int) $_POST['id-producto'];

    print_r($_POST);

    $con = conexion();
    $update = "UPDATE productos SET Nombre = '$nombre', Precio = $precio, Existencias = $existencias WHERE Id = $id_producto";
}

// $exec_query = mysqli_query($con, $update);

// header("Location: ./principal.php");

// $con -> close();
?>