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

const ventanaEliminarProducto = document.getElementById('ventana-eliminar-producto');
const btnCancelarAñadirProducto = document.getElementById('btn-cancelar-añadir-producto');
const inputNombreProducto = document.getElementById('product-name');
const inputPrecioProducto = document.getElementById('product-price');
const inputExistenciasProducto = document.getElementById('product-exists');

const btnEliminarProducto = document.getElementById('btn-eliminar-producto');
const iconoEliminar = document.querySelectorAll('#icon-trash');
const btnCancelarEliminarProducto = document.getElementById('btn-cancelar-eliminar-producto');

const efectoBlur = document.getElementById('efecto-blur');
const body = document.getElementsByTagName('body')[0];

let acumIconoEliminar = 0;

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
        iconoEliminar.forEach(icono => {
            icono.style.display = 'inline';
        })
        btnEliminarProducto.innerText = 'Cancelar eliminacion';
        acumIconoEliminar++;
    } else {
        iconoEliminar.forEach(icono => {
            icono.style.display = 'none';
        })
        btnEliminarProducto.innerText = 'Eliminar producto';
        acumIconoEliminar--;
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

const validarAñadirProducto = () => {
    const validarNombreProducto = inputNombreProducto.value.trim();
    const validarPrecioProducto = inputPrecioProducto.value.trim();
    const validarExistenciasProducto = inputExistenciasProducto.value.trim();

    if (validarNombreProducto === "" || validarPrecioProducto === "" || validarExistenciasProducto === "") {
        alert("Debes llenar todos los campos");
        return false;
    } else {
        alert("Producto añadido a la tienda!")
        return true;
    }
}

// Eventos de los botones para mostrar sus respectivas ventanas

btnCrearTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaCrearTienda) });
btnEliminarTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaEliminarTienda) });
btnAñadirProducto.addEventListener('click', function () { mostrarVentanaModal(ventanaAñadirProducto) })

btnCancelarCrearTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaCrearTienda) });
btnCancelarEliminarTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarTienda) });
btnCancelarAñadirProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaAñadirProducto) })

btnEliminarProducto.addEventListener('click', mostrarIconoEliminar);
iconoEliminar.forEach(icono => {
    icono.addEventListener('click', function () { mostrarVentanaModal(ventanaEliminarProducto) })
})
btnCancelarEliminarProducto.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarProducto) });