const ventanaCrearTienda = document.getElementById('ventana-crear-tienda');
const ventanaEliminarTienda = document.getElementById('ventana-eliminar-tienda');

const btnCrearTienda = document.getElementById('btn-crear-tienda');
const btnEliminarTienda = document.getElementById('btn-eliminar-tienda');

const btnCancelarCrearTienda = document.getElementById('btn-cancelar-crear-tienda');
const btnConfirmarCrearTienda = document.getElementById('btn-confirmar-crear-tienda');
const inputNombreTienda = document.getElementById('name-store');

const btnCancelarEliminarTienda = document.getElementById('btn-cancelar-eliminar-tienda');

const efectoBlur = document.getElementById('efecto-blur');
const body = document.getElementsByTagName('body')[0];

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

// Eventos de los botones para mostrar sus respectivas ventanas

btnCrearTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaCrearTienda) });
btnEliminarTienda.addEventListener('click', function () { mostrarVentanaModal(ventanaEliminarTienda) });

btnCancelarCrearTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaCrearTienda) });
btnCancelarEliminarTienda.addEventListener('click', function () { ocultarVentanasModales(ventanaEliminarTienda) });
