<?php

function conexion() {
    // Variables de sesion
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "sistema_ventas";

    // Conectandonos a la base de datos
    $connect = mysqli_connect($host, $user, $pass);
    mysqli_select_db($connect, $db);

    // Retornando la connexion
    return $connect;
}

?>