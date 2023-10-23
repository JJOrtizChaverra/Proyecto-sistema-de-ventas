<?php

error_reporting(0);
ini_set('display_errors', 0);


include('./conexion.php');

if ($_GET) {
    $correo = $_GET['correo'];
    $contrasenia = md5($_GET['contraseña']);

    $con = conexion();
    $select = "SELECT * FROM usuarios WHERE CorreoElectronico = '$correo' AND Contraseña = '$contrasenia'";

    $exec_query = mysqli_query($con, $select);
    $array_usuario = mysqli_fetch_array($exec_query);

    if (($array_usuario['CorreoElectronico'] === $correo) && ($array_usuario['Contraseña'] === $contrasenia)) {
        session_start();
        $_SESSION['cedula'] = $array_usuario['Cedula'];
        $_SESSION['nombre'] = $array_usuario['Nombre'] . ' ' . $array_usuario['Apellido'];
        header("Location: ./principal.php");
    } else {
        echo "<script>alert('Usuario no encontrado');</script>";
    }

    // $con -> close();
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesion</title>

    <!-- Hojas de estilo -->
    <link rel="stylesheet" href="../css/iniciar-sesion.css">

    <!-- Fonts externas -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>

<body>
    <!-- Barra de navegacion -->
    <header>
        <nav class="header__navbar">
            <ul class="header-navbar__ul">
                <li class="navbar-ul__list-item"><a href="../index.html">Inicio</a></li>
                <li class="navbar-ul__list-item"><a href="../registro.html">Registrarse</a></li>
                <li class="navbar-ul__list-item"><a href="../acerca-de.html">Acerca de</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main principal -->
    <main>
        <div class="main__container">
            <h2 class="main__container-h2">Iniciar sesion</h2>
            <form action="" method="get" class="main__form">
                <div class="main-form__container-data">
                    <label for="address">Correo electronico</label>
                    <input type="email" name="correo" id="address">
                    <span id="span-error-address" class="span-error"></span>
                </div>

                <div class="main-form__container-data">
                    <label for="password">Contraseña</label>
                    <input type="password" name="contraseña" id="password">
                    <span id="span-error-password" class="span-error"></span>
                </div>

                <div class="main-form__container-data">
                    <input id="button-send-form" type="submit" value="Iniciar sesion">
                </div>
            </form>
        </div>
    </main>
    <script src="../js/iniciar-sesion.js"></script>
</body>

</html>