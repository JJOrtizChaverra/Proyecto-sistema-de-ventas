<?php

error_reporting(0);
ini_set('display_errors', 0);

include("./conexion.php");

session_start();

$cedula_dueño = (int) $_SESSION['cedula'];
$nombre_completo = $_SESSION['nombre'];

$con = conexion();
$select = "SELECT * FROM usuarios WHERE Cedula = $cedula_dueño";

$exec_query = mysqli_query($con, $select);
$array_usuario = mysqli_fetch_array($exec_query);

$select_tiendas = "SELECT * FROM tiendas WHERE CedulaDueño = $cedula_dueño";

$exec_query_tiendas = mysqli_query($con, $select_tiendas);
$array_tienda = mysqli_fetch_all($exec_query_tiendas);

if ($_GET) {
    $id_tienda = (int) $_GET['lista-tiendas-perfil'];
    $select_productos = "SELECT * FROM productos WHERE IdTienda = $id_tienda";


    $exec_query_productos = mysqli_query($con, $select_productos);
    $array_productos = mysqli_fetch_all($exec_query_productos);

    $total_existencias = 0;
    $precio_total_tienda = 0;
    $total_productos = 0;

    foreach ($array_productos as $producto) {
        $total_existencias = $total_existencias + $producto[3];
        $precio_total_tienda = $precio_total_tienda + $producto[2];
        $total_productos++;
    }
    
}


?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>

    <!-- Hojas de estilo -->
    <link rel="stylesheet" href="../css/perfil.css">

    <!-- Fonts externas -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>
    <div class="bg-blur" id="efecto-blur">

    </div>
    <!-- Barra de navegacion -->
    <header>
        <nav class="header__navbar">
            <ul class="header-navbar__ul">
                <li class="navbar-ul__list-item"><a href="./principal.php">Mis tiendas</a></li>
                <li class="navbar-ul__list-item"><a href="./acerca-de.html">Acerca de</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main principal -->
    <main>
        <div class="main__container">
            <div class="main-container__options">
                <button id="btn-datos-personales">Datos personales</button>
                <button id="btn-informacion-tiendas">Informacion de tiendas</button>
            </div>
            <div class="main-container__data">
                <div id="container-datos-personales" class="container-datos-personales">
                    <h2 class="main__container-h2">Datos personales</h2>
                    <div class="container-data">
                        <label for="name">Nombre:</label>
                        <input type="text" readonly id="name" value="<?php echo $array_usuario['Nombre'] ?>">
                    </div>
                    <div class="container-data">
                        <label for="last-name">Apellido:</label>
                        <input type="text" readonly id="last-name" value="<?php echo $array_usuario['Apellido'] ?>">
                    </div>
                    <div class="container-data">
                        <label for="address">Correo:</label>
                        <input type="text" readonly id="address" value="<?php echo $array_usuario['CorreoElectronico'] ?>">
                    </div>
                    <div class="container-data">
                        <label for="nuip">Cedula:</label>
                        <input type="text" readonly id="nuip" value="<?php echo $array_usuario['Cedula'] ?>">
                    </div>
                    <div class="container-data">
                        <label for="birthday">Fecha de nacimiento:</label>
                        <input type="text" readonly id="birthday" value="<?php echo $array_usuario['FechaNacimiento'] ?>">
                    </div>
                    <div class="container-data">
                        <button id="btn-cambiar-contraseña">Cambiar contraseña</button>
                    </div>
                </div>
                <div id="container-informacion-tienda" class="container-informacion-tienda">
                    <h2 class="main__container-h2">Informacion de tiendas</h2>
                    <form action="./perfil.php" method="get" id="form-tiendas-perfil">
                        <select name="lista-tiendas-perfil" id="lista-tiendas-perfil">
                            <?php foreach ($array_tienda as $tienda) { ?>
                                <option value="<?php echo $tienda[0] ?>"><?php echo $tienda[1] ?></option>
                            <?php } ?>
                        </select>
                    </form>
                    <div>
                        <label for="products">Total de productos</label>
                        <input type="text" readonly value="<?php echo $total_productos ?>">
                    </div>
                    <div>
                        <label for="exists">Total de existencias</label>
                        <input type="text" readonly value="<?php echo $total_existencias ?>">
                    </div>
                    <div>
                        <label for="products">Precio total de la tienda</label>
                        <input type="text" readonly value="<?php echo $precio_total_tienda ?>">
                    </div>
                </div>
            </div>
        </div>
        <div class="main__ventana-cambiar-contraseña" id="ventana-cambiar-contraseña">
            <h2>Cambiar contraseña</h2>
            <form action="./cambiar-contraseña.php" method="post" class="ventana-cambiar-contraseña__form">
                <label for="new-password">Nueva contraseña</label>
                <input type="text" name="nueva-contraseña" id="new-password">
                <div>
                    <button id="btn-cancelar-crear-tienda" type="button">Cancelar</button>
                    <input id="btn-confirmar-crear-tienda" type="submit" value="Cambiar">
                </div>
            </form>
        </div>
    </main>

    <script src="../js/perfil.js"></script>
</body>

</html>