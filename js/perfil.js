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

document.getElementById('lista-tiendas-perfil').addEventListener('change', function () {
    document.getElementById('form-tiendas-perfil').submit();
});

const seleccionGuardada = localStorage.getItem('seleccionTienda');

// Obtener el elemento select

// Establecer la selección si hay una almacenada
if (seleccionGuardada) {
    selectTiendas.value = seleccionGuardada;
}

// Escuchar el evento de cambio y guardar la selección
selectTiendas.addEventListener('change', function () {
    localStorage.setItem('seleccionTienda', this.value);
});
