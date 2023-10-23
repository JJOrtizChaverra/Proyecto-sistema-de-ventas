<?php

include('./conexion.php');

session_start(); // Iniciar la sesión si no se ha iniciado

$_SESSION['sesion_destruida'] = true;

// Comprobar si la sesión está iniciada antes de intentar destruirla

// session_unset(); // Elimina todas las variables de sesión
session_destroy(); // Destruye la sesión

// Redirigir a otra página o realizar cualquier otra acción después de cerrar sesión
header("Location: ../index.html");
exit();

// $con -> close();

?>