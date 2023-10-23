<?php

include("./conexion.php");

session_start();

$nombre = $_POST['nombre-producto'];
$precio = (float) $_POST['precio-producto'];
$existencias = (int) $_POST['existencias-producto'];
$tienda = preg_replace("/[^a-zA-Z\s]+/", "", $_POST['pertenece-a-la-tienda']);
$id_tienda = (int) preg_replace("/[^0-9]/", "", $_POST['pertenece-a-la-tienda']);

echo $tienda, $id_tienda;

$con = conexion();
$insert = "INSERT INTO productos VALUES(null, '$nombre', $precio, $existencias, '$tienda', $id_tienda)";
$exc_query = mysqli_query($con, $insert);

header("Location: ./principal.php");

// $con -> close();

?>