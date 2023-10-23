<?php

include("./conexion.php");

session_start();

$id_producto = (int) $_POST['id-producto'];

$con = conexion();
$delete = "DELETE FROM productos WHERE Id = $id_producto";

$exec_query = mysqli_query($con, $delete);

header("Location: ./principal.php");

// $con -> close();

?>