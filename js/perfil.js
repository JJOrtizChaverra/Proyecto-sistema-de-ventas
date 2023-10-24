const btnDatosPersonales = document.getElementById('btn-datos-personales');
const btnInformacionTiendas = document.getElementById('btn-informacion-tiendas');

const containerDatosPersonales = document.getElementById('container-datos-personales');
const containerInformacionTiendas = document.getElementById('container-informacion-tienda');

const btnCambiarContrasela = document.getElementById('btn-cambiar-contraseña');
const ventanaCambiarContraseña = document.getElementById('ventana-cambiar-contraseña');

const btnCancelarCambiarContraseña = document.getElementById('btn-cancelar-crear-tienda');

const efectoBlur = document.getElementById('efecto-blur');
const inputCambiarContraseña = document.getElementById('new-password');

const selectTiendas = document.getElementById('lista-tiendas-perfil');

const mensajeNo = document.getElementById('mensaje-no');

const body = document.getElementsByTagName('body')[0];

const mostrarVentanaCambiarContraseña = () => {
    body.style.overflow = 'hidden';
    efectoBlur.style.display = 'block';
    inputCambiarContraseña.focus();

    ventanaCambiarContraseña.style.display = 'flex';
}

const ocultarVentanaCambiarContraseña = () => {
    body.style.overflow = 'auto';
    efectoBlur.style.display = 'none';

    ventanaCambiarContraseña.style.display = 'none';
}

btnDatosPersonales.addEventListener('click', function () {
    containerInformacionTiendas.style.display = 'none';
    containerDatosPersonales.style.display = 'flex';
    btnInformacionTiendas.style.backgroundColor = "#ffff";
    btnDatosPersonales.style.backgroundColor = '#bebebe';
})

btnInformacionTiendas.addEventListener('click', function () {
    containerDatosPersonales.style.display = 'none';
    containerInformacionTiendas.style.display = 'flex';
    btnDatosPersonales.style.backgroundColor = '#ffff';
    btnInformacionTiendas.style.backgroundColor = '#bebebe';
})

btnCambiarContrasela.addEventListener('click', mostrarVentanaCambiarContraseña);
btnCancelarCambiarContraseña.addEventListener('click', ocultarVentanaCambiarContraseña);

const seleccionGuardada = localStorage.getItem('seleccionTienda');

if (selectTiendas.options.length < 1) {
    containerInformacionTiendas.getElementsByTagName('form')[0].style.display = 'none';
    containerInformacionTiendas.getElementsByTagName('div')[1].style.display = 'none';
    containerInformacionTiendas.getElementsByTagName('div')[2].style.display = 'none';
    containerInformacionTiendas.getElementsByTagName('div')[3].style.display = 'none';
    mensajeNo.style.display = 'block';
} else {
    mensajeNo.style.display = 'none';
    containerInformacionTiendas.getElementsByTagName('form')[0].style.display = 'flex';
    containerInformacionTiendas.getElementsByTagName('div')[1].style.display = 'flex';
    containerInformacionTiendas.getElementsByTagName('div')[2].style.display = 'flex';
    containerInformacionTiendas.getElementsByTagName('div')[3].style.display = 'flex';
}

// Establecer la selección si hay una almacenada
if (seleccionGuardada) {
    selectTiendas.value = seleccionGuardada;
}

// Escuchar el evento de cambio y guardar la selección
selectTiendas.addEventListener('change', function () {
    localStorage.setItem('seleccionTienda', this.value);
});

document.getElementById('lista-tiendas-perfil').addEventListener('change', function () {
    document.getElementById('form-tiendas-perfil').submit();
});

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

document.getElementById('btn-confirmar-cambiar-tienda').addEventListener('click', function () {
    alert("Contraseña reestablecida, inicia sesion de nuevo");
})