const ventanaCrearTienda = document.getElementById('ventana-crear-tienda');
const ventanaEliminarTienda = document.getElementById('ventana-eliminar-tienda');
const ventanaAñadirProducto = document.getElementById('ventana-añadir-producto');

const btnCrearTienda = document.getElementById('btn-crear-tienda');
const btnEliminarTienda = document.getElementById('btn-eliminar-tienda');
const btnAñadirProducto = document.getElementById('btn-añadir-producto');

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

const ventanaModificarProducto = document.getElementById('ventana-modificar-producto');
const btnModificarProducto = document.getElementById('btn-modificar-producto');
const btnCancelarModificarProducto = document.getElementById('btn-cancelar-modificar-producto');
const iconoEditar = document.querySelectorAll('#icon-edit');
const inputNombreProductoEditar = document.getElementById('product-name-edit');
const inputPrecioProductoEditar = document.getElementById('product-price-edit');
const inputExistenciasProductoEditar = document.getElementById('product-exists-edit');


const efectoBlur = document.getElementById('efecto-blur');
const body = document.getElementsByTagName('body')[0];
const tablaProductos = document.getElementById('tabla-productos');

let acumIconoEliminar = 0;
let acumIconoEditar = 0;

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

const validarAñadirProducto = (nombre, precio, existencias, mensaje) => {
    nombre = nombre.value.trim();
    precio = precio.value.trim();
    existencias = existencias.value.trim();

    if (nombre === "" || precio === "" || existencias === "") {
        alert("Debes llenar todos los campos");
        event.preventDefault();
        return false;
    } else {
        alert(mensaje)
        return true;
    }
}

// Eventos de los botones para mostrar sus respectivas ventanas
btnCrearTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaCrearTienda) });
btnEliminarTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaEliminarTienda) });
btnAñadirProducto.addEventListener('click', function () { mostrarVentanaModal(ventanaAñadirProducto) })

// Eventos de los botones para ocultar sus ventanas
btnCancelarCrearTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaCrearTienda) });
btnCancelarEliminarTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarTienda) });
btnCancelarAñadirProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaAñadirProducto) })
btnCancelarModificarProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaModificarProducto) });

// Evento para mostrar el icono de eliminar
btnEliminarProducto.addEventListener('click', mostrarIconoEliminar);
iconoEliminar.forEach(icono => {
    icono.addEventListener('click', function () { mostrarVentanaModal(ventanaEliminarProducto) })
})
btnCancelarEliminarProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarProducto) });

// Evento de mostrar el icono de editar
btnModificarProducto.addEventListener('click', mostrarIconoEditar);
iconoEditar.forEach(icono => {
    icono.addEventListener('click', function (e) {
        mostrarVentanaModal(ventanaModificarProducto);
        
        let fila = e.target.closest('tr');

        let celdas = fila.getElementsByTagName('td');
        inputNombreProductoEditar.value = celdas[1].textContent;
        inputPrecioProductoEditar.value = celdas[2].textContent;
        inputExistenciasProductoEditar.value = celdas[3].textContent;
    })
})

// Validando los formularios

const formularioAñadirProducto = document.getElementById('formulario-añadir-producto').addEventListener('submit', function () {
    validarAñadirProducto(inputNombreProducto, inputPrecioProducto, inputExistenciasProducto, "Producto añadido a la tienda!");
})

const formularioModificarProducto = document.getElementById('formulario-modificar-producto').addEventListener('submit', function () {
    return validarAñadirProducto(inputNombreProductoEditar, inputPrecioProductoEditar, inputExistenciasProductoEditar, "Producto modificado!");
})