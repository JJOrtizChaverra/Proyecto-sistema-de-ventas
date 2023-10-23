<?php

error_reporting(0);
ini_set('display_errors', 0);

include("./conexion.php");


session_start();

if (isset($_SESSION['sesion_destruida']) && $_SESSION['sesion_destruida'] === true) {
    echo "<p>Error: La sesión ha sido cerrada. Por favor, inicia sesión nuevamente.</p>";
    unset($_SESSION['sesion_destruida']); // Limpiar la variable de sesión
} else {
    $cedula_dueño = (int) $_SESSION['cedula'];
    $nombre_completo = $_SESSION['nombre'];

    $con = conexion();
    $select_tiendas = "SELECT * FROM tiendas WHERE CedulaDueño = $cedula_dueño";

    $exec_query_tiendas = mysqli_query($con, $select_tiendas);
    $array_tienda = mysqli_fetch_all($exec_query_tiendas);


    $id_tienda = 0;

    if ($_GET) {
        $id_tienda = (int) $_GET['lista-tiendas'];
    }

    if ($id_tienda === 0) {
        $select_productos = "SELECT productos.*
        FROM productos
        JOIN tiendas ON productos.IdTienda = tiendas.Id
        WHERE tiendas.CedulaDueño = $cedula_dueño;";
    } else {
        $select_productos = "SELECT * FROM productos WHERE IdTienda = $id_tienda";
    }

    $exec_query_productos = mysqli_query($con, $select_productos);

    $array_productos = mysqli_fetch_all($exec_query_productos);
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis tiendas</title>

    <!-- Hoja de estilos -->
    <link rel="stylesheet" href="../css/principal.css">

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
                <li class="navbar-ul__list-item"><a href="./perfil.html">Perfil</a></li>
                <li class="navbar-ul__list-item" id="link-cerrar-sesion" style="cursor: pointer;">Cerrar sesion</li>
                <li class="navbar-ul__list-item"><a href="./acerca-de.html">Acerca de</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="main__container-buttons">
            <button id="btn-crear-tienda">Crear tienda</button>
            <button id="btn-eliminar-tienda">Eliminar tienda</button>
            <button id="btn-añadir-producto">Añadir productos</button>
            <button id="btn-eliminar-producto">Eliminar productos</button>
            <button id="btn-modificar-producto">Modificar productos</button>

            <div class="container-buttons__container-search">
                <img src="../assets/icons/search.svg" alt="">
                <input type="text" name="buscar-productos" id="buscar-productos">
            </div>
        </div>

        <div class="main__container-select">
            <form action="./principal.php" method="get" id="formulario-select-tiendas">
                <select name="lista-tiendas" id="lista-tiendas-tabla">
                    <option value="Todas">Todas</option>
                    <?php foreach ($array_tienda as $tienda) { ?>
                        <option value="<?php echo $tienda[0] ?>"><?php echo $tienda[1] ?></option>
                    <?php } ?>
                </select>
                <!-- <input  value="Enviar"> -->
            </form>
        </div>

        <table id="tabla-productos">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Existencias</th>
                    <th>Tienda</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($array_productos as $producto) { ?>
                    <tr>
                        <td>
                            <img id="icon-trash" src="../assets/icons/trash.svg" alt="X">
                            <img id="icon-edit" src="../assets/icons/edit.svg" alt="E">
                            <?php echo $producto[0] ?>
                        </td>
                        <td><?php echo $producto[1] ?></td>
                        <td><?php echo $producto[2] ?></td>
                        <td><?php echo $producto[3] ?></td>
                        <td><?php echo $producto[4] ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>

        <div class="container-mensaje-no">
            <p id="mensaje-no"></p>
        </div>

        <div class="main__ventana-crear-tienda" id="ventana-crear-tienda">
            <h2>Crear una nueva tienda</h2>
            <form action="./crear-tienda.php" method="post" class="ventana-crear-tienda__form" onsubmit="return validarCrearTienda()">
                <label for="name-store">Nombre de la tienda</label>
                <input type="text" name="nombre-tienda" id="name-store">
                <div>
                    <button id="btn-cancelar-crear-tienda" type="button">Cancelar</button>
                    <input id="btn-confirmar-crear-tienda" type="submit" value="Crear">
                </div>
            </form>
        </div>

        <div class="main__ventana-eliminar-tienda" id="ventana-eliminar-tienda">
            <h2>Eliminar tienda</h2>
            <form action="./eliminar-tienda.php" method="post" class="ventana-eliminar-tienda__form">
                <label for="">¿Esta seguro que desea eliminar esta tienda?</label>
                <select name="lista-tiendas" id="list-store-eliminar-tienda">
                    <?php foreach ($array_tienda as $tienda) { ?>
                        <option value="<?php echo $tienda[0] ?>"><?php echo $tienda[1] ?></option>
                    <?php } ?>
                </select>
                <div>
                    <input id="btn-cancelar-eliminar-tienda" type="button" value="Cancelar">
                    <input id="btn-confirmar-eliminar-tienda" type="submit" value="Eliminar">
                </div>
            </form>
        </div>

        <div class="main__ventana-añadir-producto" id="ventana-añadir-producto">
            <h2>Añadir un producto</h2>
            <form action="./añadir-productos.php" method="post" class="ventana-añadir-producto__form" id="formulario-añadir-producto">
                <div class="form-add-product__container-data">
                    <label for="product-name">Nombre</label>
                    <input type="text" name="nombre-producto" id="product-name">
                </div>
                <div class="form-add-product__container-price-exists">
                    <div>
                        <label for="product-price">Precio</label>
                        <input type="text" name="precio-producto" id="product-price">
                    </div>
                    <div>
                        <label for="product-exists">Existencias</label>
                        <input type="number" name="existencias-producto" id="product-exists">
                    </div>
                </div>
                <div class="form-add-product__container-data">
                    <label for="store">Pertenece a la tienda:</label>
                    <select name="pertenece-a-la-tienda" id="list-store-añadir-producto" style="border: none; color: green;">
                        <?php foreach ($array_tienda as $tienda) { ?>
                            <option value="<?php echo $tienda[0] . '-' . $tienda[1] ?>"><?php echo $tienda[1] ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="form-add-product__container-buttons">
                    <input id="btn-cancelar-añadir-producto" type="button" value="Cancelar">
                    <input id="btn-confirmar-añadir-producto" type="submit" value="Añadir">
                </div>
            </form>
        </div>

        <div class="main__ventana-eliminar-tienda" id="ventana-eliminar-producto">
            <h2>Eliminar producto</h2>
            <form action="./eliminar-productos.php" method="post" class="ventana-eliminar-tienda__form">
                <label for="">¿Esta seguro que desea eliminar este producto?</label>
                <div>
                    <input id="btn-cancelar-eliminar-producto" type="button" value="Cancelar">
                    <input id="btn-confirmar-eliminar-producto" type="submit" value="Eliminar">
                </div>
            </form>
        </div>

        <div class="main__ventana-añadir-producto" id="ventana-modificar-producto">
            <h2>Modificar un producto</h2>
            <form action="./modificar-productos.php" method="post" class="ventana-añadir-producto__form" id="formulario-modificar-producto">
                <div class="form-add-product__container-data">
                    <label for="product-name-edit">Nombre</label>
                    <input type="text" name="nombre-producto" id="product-name-edit">
                </div>
                <div class="form-add-product__container-price-exists">
                    <div>
                        <label for="product-price-edit">Precio</label>
                        <input type="number" name="precio-producto" id="product-price-edit">
                    </div>
                    <div>
                        <label for="product-exists-edit">Existencias</label>
                        <input type="number" name="existencias-producto" id="product-exists-edit">
                    </div>
                </div>
                <div class="form-add-product__container-data">
                    <label for="store">Pertenece a la tienda:</label>
                    <select name="pertenece-a-la-tienda" id="store">
                        <?php foreach ($array_tienda as $tienda) { ?>
                            <option value="<?php echo $tienda[0] ?>"><?php echo $tienda[1] ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="form-add-product__container-buttons">
                    <input id="btn-cancelar-modificar-producto" type="button" value="Cancelar">
                    <input id="btn-confirmar-modificar-producto" type="submit" value="Guardar">
                </div>
            </form>
        </div>
    </main>

    <script src="../js/principal.js"></script>
</body>

</html>