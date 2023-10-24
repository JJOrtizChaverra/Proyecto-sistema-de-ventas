const ventanaCrearTienda = document.getElementById('ventana-crear-tienda');
const ventanaEliminarTienda = document.getElementById('ventana-eliminar-tienda');
const ventanaAñadirProducto = document.getElementById('ventana-añadir-producto');

const btnCrearTienda = document.getElementById('btn-crear-tienda');
const btnEliminarTienda = document.getElementById('btn-eliminar-tienda');
const btnConfirmarEliminarTienda = document.getElementById('btn-confirmar-eliminar-tienda');
const btnAñadirProducto = document.getElementById('btn-añadir-producto');
const btnConfirmarAñadirProducto = document.getElementById('btn-confirmar-añadir-producto');
const btnCancelarCrearTienda = document.getElementById('btn-cancelar-crear-tienda');
const btnConfirmarCrearTienda = document.getElementById('btn-confirmar-crear-tienda');
const inputNombreTienda = document.getElementById('name-store');

const btnCancelarEliminarTienda = document.getElementById('btn-cancelar-eliminar-tienda');

const btnCancelarAñadirProducto = document.getElementById('btn-cancelar-añadir-producto');
const inputNombreProducto = document.getElementById('product-name');
const inputPrecioProducto = document.getElementById('product-price');
const inputExistenciasProducto = document.getElementById('product-exists');

const ventanaEliminarProducto = document.getElementById('ventana-eliminar-producto');
const btnEliminarProducto = document.getElementById('btn-eliminar-producto');
const iconoEliminar = document.querySelectorAll('#icon-trash');
const btnCancelarEliminarProducto = document.getElementById('btn-cancelar-eliminar-producto');
const btnConfirmarEliminarProducto = document.getElementById('btn-confirmar-eliminar-producto');

const ventanaModificarProducto = document.getElementById('ventana-modificar-producto');
const btnModificarProducto = document.getElementById('btn-modificar-producto');
const btnCancelarModificarProducto = document.getElementById('btn-cancelar-modificar-producto');
const iconoEditar = document.querySelectorAll('#icon-edit');
const inputNombreProductoEditar = document.getElementById('product-name-edit');
const inputPrecioProductoEditar = document.getElementById('product-price-edit');
const inputExistenciasProductoEditar = document.getElementById('product-exists-edit');

const btnConfirmarModificarProducto = document.getElementById('btn-confirmar-modificar-producto');

const efectoBlur = document.getElementById('efecto-blur');
const body = document.getElementsByTagName('body')[0];
const tablaProductos = document.getElementById('tabla-productos');

const selectTiendas = document.getElementById('lista-tiendas-tabla');
const seleccionGuardada = localStorage.getItem('seleccionarTienda');

const mensajeNo = document.getElementById('mensaje-no');
const inputSearch = document.getElementById('buscar-productos');

const selectTiendasEliminarTienda = document.getElementById('list-store-eliminar-tienda');
const selectTiendasAñadirProducto = document.getElementById('list-store-añadir-producto');

const selectTiendasModificarProducto = document.getElementById('list-store-modifie-products');

let acumIconoEliminar = 0;
let acumIconoEditar = 0;

const filtrarProductos = () => {
    let input = document.getElementById("buscar-productos");
    let filtro = input.value.toUpperCase();
    let tabla = document.getElementById("tabla-productos");
    let tr = tabla.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

const mostrarOcultarMensajeNo = (bool1, bool2, displayTable, displaySelect, mensaje) => {
    mensajeNo.innerText = mensaje;

    selectTiendas.style.display = displaySelect;
    // Table
    tablaProductos.style.display = displayTable;

    btnEliminarTienda.disabled = bool1;
    btnAñadirProducto.disabled = bool1;
    btnEliminarProducto.disabled = bool2;
    btnModificarProducto.disabled = bool2;
    inputSearch.disabled = bool2;
}

// Funcion para mostrar la ventana modal de crear tienda
const mostrarVentanaModal = ventana => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    body.style.overflow = 'hidden';
    efectoBlur.style.display = 'block';
    inputNombreTienda.focus();

    // Mostrar ventanas
    ventana.style.display = 'flex';
}

const ocultarVentanasModales = ventana => {
    body.style.overflow = 'auto';
    efectoBlur.style.display = 'none';

    // Ocultar ventanas
    ventana.style.display = 'none';
}

const mostrarIconoEliminar = () => {
    if (acumIconoEliminar === 0) {
        for (let i = 0; i < iconoEliminar.length; i++) {
            iconoEliminar[i].style.display = 'inline';
            iconoEditar[i].style.display = 'none';
        }
        btnEliminarProducto.innerText = 'Cancelar eliminacion';
        btnModificarProducto.innerText = 'Modificar producto';
        acumIconoEditar = 0;
        acumIconoEliminar++;
    } else {
        iconoEliminar.forEach(icono => {
            icono.style.display = 'none';
        })
        btnEliminarProducto.innerText = 'Eliminar producto';
        acumIconoEliminar--;
    }
}

const mostrarIconoEditar = () => {
    if (acumIconoEditar === 0) {
        for (let i = 0; i < iconoEditar.length; i++) {
            iconoEditar[i].style.display = 'inline';
            iconoEliminar[i].style.display = 'none';
        }
        btnModificarProducto.innerText = 'Cancelar modificacion';
        btnEliminarProducto.innerText = 'Eliminar producto';
        acumIconoEliminar = 0;
        acumIconoEditar++;
    } else {
        iconoEditar.forEach(icono => {
            icono.style.display = 'none';
        })
        btnModificarProducto.innerText = 'Modificar producto';
        acumIconoEditar--;
    }
}

// Funcion para validar que el usuario no cree una tienda con el input vacio

const validarCrearTienda = () => {
    const validarInput = inputNombreTienda.value.trim();

    if (validarInput === "") {
        alert("Debes ingresar un nombre para tu nueva tienda");
        inputNombreTienda.focus();
        return false;
    } else {
        alert("Tienda creada correctamente!");
        return true;
    }
}

const validarAñadirProducto = (nombre, precio, existencias) => {
    nombre = nombre.value.trim();
    precio = precio.value.trim();
    existencias = existencias.value.trim();

    if (nombre === "" || precio === "" || existencias === "") {
        alert("Debes llenar todos los campos");
        event.preventDefault();
        return false;
    } else {
        return true;
    }
}

if (selectTiendas.options.length < 2) {
    mostrarOcultarMensajeNo(true, true, 'none', 'none', 'Actualmente no tienes tiendas para administrar');
} else if (tablaProductos.rows.length < 2) {
    mostrarOcultarMensajeNo(false, true, 'table', 'block', 'Esta tienda no tiene productos para mostrar');
} else {
    mostrarOcultarMensajeNo(false, false, 'table', 'block', '');
}

if (seleccionGuardada) {
    selectTiendas.value = seleccionGuardada;
}

// Eventos de los botones para mostrar sus respectivas ventanas
btnCrearTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaCrearTienda) });
btnEliminarTienda.addEventListener('click', function () {
    mostrarVentanaModal(ventanaEliminarTienda);
    // selectTiendasEliminarTienda.disabled = true;
    selectTiendasEliminarTienda.selectedIndex = selectTiendas.selectedIndex - 1;
});

btnAñadirProducto.addEventListener('click', function () {
    mostrarVentanaModal(ventanaAñadirProducto);
    // selectTiendasAñadirProducto.disabled = true;
    selectTiendasAñadirProducto.selectedIndex = selectTiendas.selectedIndex - 1;
});

// Eventos de los botones para ocultar sus ventanas
btnCancelarCrearTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaCrearTienda) });
btnCancelarEliminarTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarTienda) });
btnCancelarModificarProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaModificarProducto) });

btnCancelarAñadirProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaAñadirProducto) });

let fila;
let celdas;

// Evento de mostrar el icono de editar
btnModificarProducto.addEventListener('click', mostrarIconoEditar);
iconoEditar.forEach(icono => {
    icono.addEventListener('click', function (e) {
        mostrarVentanaModal(ventanaModificarProducto);

        fila = e.target.closest('tr');

        celdas = fila.getElementsByTagName('td');
        inputNombreProductoEditar.value = celdas[1].textContent;
        inputPrecioProductoEditar.value = celdas[2].textContent;
        inputExistenciasProductoEditar.value = celdas[3].textContent;

        selectTiendasModificarProducto.selectedIndex = selectTiendas.selectedIndex - 1;
    })
});

btnConfirmarModificarProducto.addEventListener('click', function () {
    // Enviar a PHP a través de AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/modificar-productos.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // Hacer algo con la respuesta del PHP si es necesario
            console.log(xhr.responseText);
        }
    };
    xhr.send('id-producto=' + celdas[0].innerText.replace(/\s+/g, ' ').trim());
});


// Evento para mostrar el icono de eliminar
btnEliminarProducto.addEventListener('click', mostrarIconoEliminar);
iconoEliminar.forEach(icono => {
    icono.addEventListener('click', function (e) {
        mostrarVentanaModal(ventanaEliminarProducto);

        fila = e.target.closest('tr');
        celdas = fila.getElementsByTagName('td');
    })
});

btnCancelarEliminarProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarProducto) });
btnConfirmarEliminarProducto.addEventListener('click', function () {
    // Enviar a PHP a través de AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/eliminar-productos.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // Hacer algo con la respuesta del PHP si es necesario
            console.log(xhr.responseText);
        }
    };
    xhr.send('id-producto=' + celdas[0].innerText.replace(/\s+/g, ' ').trim());
})

// Validando los formularios

const formularioAñadirProducto = document.getElementById('formulario-añadir-producto').addEventListener('submit', function () {
    validarAñadirProducto(inputNombreProducto, inputPrecioProducto, inputExistenciasProducto);
    localStorage.setItem('seleccionarTienda', "Todas");
    document.getElementById('formulario-select-tiendas').submit();
})

const formularioModificarProducto = document.getElementById('formulario-modificar-producto').addEventListener('submit', function () {
    return validarAñadirProducto(inputNombreProductoEditar, inputPrecioProductoEditar, inputExistenciasProductoEditar, "Producto modificado!");
})

selectTiendas.addEventListener('change', function () {
    // if (selectTiendas.value === "Todas") {
    //     let botonEliminarTiendaDesactivado = localStorage.getItem('btnEliminarTienda');

    //     if (botonEliminarTiendaDesactivado === 'true') {
    //         btnEliminarTienda.disabled = true;
    //     }

    //     btnEliminarTienda.disabled = true;
    //     localStorage.setItem('eliminarTienda', 'true');
    // }

    localStorage.setItem('seleccionarTienda', this.value);
    document.getElementById('formulario-select-tiendas').submit();
});

inputSearch.addEventListener('keyup', filtrarProductos);

btnConfirmarEliminarTienda.addEventListener('click', function () {
    localStorage.setItem('seleccionarTienda', "Todas");
    document.getElementById('formulario-select-tiendas').submit();
});

const linkCerrarSesion = document.getElementById('link-cerrar-sesion');

const toggleButton = document.querySelector('.header__toggle');
const navBar = document.getElementById('header__navbar');

let acumNavBar = 0;

toggleButton.addEventListener('click', function () {
    if (acumNavBar === 0) {
        navBar.style.display = 'block';
        acumNavBar++;
    } else {
        navBar.style.display = 'none';
        acumNavBar--;
    }
});

linkCerrarSesion.addEventListener('click', function () {
    window.location.href = "../index.html";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/cerrar-sesion.php', true);
    xhr.send();
});