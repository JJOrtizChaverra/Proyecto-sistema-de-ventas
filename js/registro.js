const inputs = document.getElementsByTagName('input');
const spans = document.getElementsByTagName('span');
const botonRegistrarse = document.getElementById('boton-registrarse');

let acumInputsValidator = 0;

const reestablecerInputsValidos = i => {
    spans[i].innerText = '';
    inputs[i].style.border = '1px solid black';
    event.preventDefault();
}

const validarRegistro = () => {
    for (let i = 0; i < spans.length; i++) {
        if (inputs[i].value.trim() === "") {
            spans[i].innerText = "Debes completar este campo";
            inputs[i].style.border = '1px solid red';
            inputs[i].focus();
            event.preventDefault();
        }
    }
}

const errarInput = (i, mensaje) => {
    spans[i].innerText = mensaje;
    inputs[i].style.border = '1px solid red';
}

botonRegistrarse.addEventListener('click', validarRegistro);

inputs[0].addEventListener('input', function () {
    if (inputs[0].value.length >= 30) {
        errarInput(0, "El nombre debe tener menos de 30 caracteres");
    } else {
        reestablecerInputsValidos(0);
    }
});

inputs[1].addEventListener('input', function () {
    if (inputs[1].value.length >= 30) {
        errarInput(1, "El apellido debe tener menos de 30 caracteres");
    } else {
        reestablecerInputsValidos(1);
    }
});

inputs[2].addEventListener('input', function () {
    let expresionRegularCorreo = /\S+@\S+\.\S+/;

    if (!expresionRegularCorreo.test(inputs[2].value)) {
        errarInput(2, "Correo electronico invalido");
    } else {
        reestablecerInputsValidos(2);
    }
});

inputs[3].addEventListener('input', function () {
    if (isNaN(inputs[3].value)) {
        errarInput(3, "Numero de cedula invalido")
    } else if (inputs[3].value.length > 12) {
        errarInput(3, "El numero de cedula debe ser menor a 12 caracteres");
    } else {
        reestablecerInputsValidos(3);
    }
});

inputs[4].addEventListener('input', function () {
    reestablecerInputsValidos(4);
});

inputs[6].addEventListener('input', function () {
    if (!(inputs[5].value === inputs[6].value)) {
        errarInput(5, "Las contraseñas no coinciden");
        errarInput(6, "Las contraseñas no coinciden");
    } else {
        reestablecerInputsValidos(5);
        reestablecerInputsValidos(6);
    }
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