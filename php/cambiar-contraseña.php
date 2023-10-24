<?php

include('./conexion.php');

session_start();

if ($_POST) {
    $nueva_contraseña = md5($_POST['nueva-contraseña']);
    $cedula_usuario = $_SESSION['cedula'];

    $con = conexion();

    $update = "UPDATE usuarios SET Contraseña = '$nueva_contraseña' WHERE Cedula = $cedula_usuario";
    $exec_query = mysqli_query($con, $update);

    $_SESSION['sesion_destruida'] = true;

    // Comprobar si la sesión está iniciada antes de intentar destruirla

    session_unset(); // Elimina todas las variables de sesión
    session_destroy(); // Destruye la sesión

    // Redirigir a otra página o realizar cualquier otra acción después de cerrar sesión
    header("Location: ../index.html");
    exit();
}
