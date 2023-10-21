const ventanaCrearTienda = document.getElementById('ventana-crear-tienda');
const efectoBlur = document.getElementById('efecto-blur');
const body = document.getElementsByTagName('body')[0];
const btnCrearTienda = document.getElementById('btn-crear-tienda');

const btnCancelarCrearTienda = document.getElementById('btn-cancelar-crear-tienda');
const btnConfirmarCrearTienda = document.getElementById('btn-confirmar-crear-tienda');

const inputNombreTienda = document.getElementById('name-store');

// Funcion para mostrar la ventana modal de crear tienda

function mostrarVentanaCrearTienda() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    body.style.overflow = 'hidden'
    efectoBlur.style.display = 'block';
    ventanaCrearTienda.style.display = 'flex';
    inputNombreTienda.focus();
}

btnCrearTienda.addEventListener('click', mostrarVentanaCrearTienda);

function ocultarVentanaCrearTienda() {
    body.style.overflow = 'auto';
    efectoBlur.style.display = 'none';
    ventanaCrearTienda.style.display = 'none';
}

btnCancelarCrearTienda.addEventListener('click', ocultarVentanaCrearTienda);

// Funcion para validar que el usuario no cree una tienda con el input vacio

function validarCrearTienda() {
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