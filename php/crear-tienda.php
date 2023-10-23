<?php

include('./conexion.php');

session_start();

if ($_POST) {
    $nombre_tienda = $_POST['nombre-tienda'];
    $dueño = $_SESSION['nombre'];
    $cedula_dueño = (int) $_SESSION['cedula'];

    $con = conexion();
    $insert = "INSERT INTO tiendas VALUES(null, '$nombre_tienda', 'Carrera 50D #88-14', 0, '$dueño', $cedula_dueño)";

    $exec_query = mysqli_query($con, $insert);

    header("Location: ./principal.php");

    // $con -> close();
}

?>