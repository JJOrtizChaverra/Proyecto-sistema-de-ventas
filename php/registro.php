<?php

include('./conexion.php');

session_start();

if ($_POST) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $cedula = (int) $_POST['cedula'];
    $fecha_nacimiento = $_POST['nacimiento'];
    $contrasenia = md5($_POST['contraseña']);

    $con = conexion();
    $insert = "INSERT INTO usuarios VALUES($cedula, '$nombre', '$apellido', '$correo', '$fecha_nacimiento', '$contrasenia')";

    $exec_query = mysqli_query($con, $insert);

    header("Location: ./principal.php");

    session_start();
    $_SESSION['cedula'] = $cedula;
    $_SESSION['nombre'] = $nombre.' '.$apellido;

    // $con -> close();
}

?>