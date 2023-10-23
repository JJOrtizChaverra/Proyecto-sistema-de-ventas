<?php

include('./conexion.php');

session_start();

$id_tienda = (int) $_POST['lista-tiendas'];

$con = conexion();
$delete_productos = "DELETE FROM productos WHERE IdTienda = $id_tienda";
$delete_tienda = "DELETE FROM tiendas WHERE Id = $id_tienda";

$exec_query = mysqli_query($con, $delete_productos);
$exec_query = mysqli_query($con, $delete_tienda);

header("Location: ./principal.php");

// $con -> close();

?>