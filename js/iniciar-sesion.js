const spanErrorCorreo = document.getElementById('span-error-address');
const spanErrorContraseña = document.getElementById('span-error-password');
const inputs = document.getElementsByTagName('input');

function errarInputs(input, span, mensaje) {
    span.innerText = mensaje;
    input.style.border = "1px solid red";
    event.preventDefault();
}

const quitarErrores = (input, span) => {
    input.style.border = "1px solid black";
    span.innerText = "";
}

const validarCorreo = () => {
    let expresionRegularCorreo = /\S+@\S+\.\S+/;

    if (!expresionRegularCorreo.test(inputs[0].value)) {
        errarInputs(inputs[0], spanErrorCorreo, "Correo electronico invalido");
        return false;
    } else {
        quitarErrores(inputs[0], spanErrorCorreo);
        return true;
    }
}

const validarInputs = (input, span) => {
    if (input.value.trim() === "") {
        span.innerText = "Debes completar este campo";
        input.style.border = "1px solid red";
        input.focus();
        event.preventDefault();
    } else {
        quitarErrores(input, span);
        if (validarCorreo()) {
            quitarErrores(input, span);
        } else {
            errarInputs(inputs[0], spanErrorCorreo, "Correo electronico invalido");
        }
    }
}


inputs[0].addEventListener('input', validarCorreo)

inputs[2].addEventListener('click', function () {
    validarInputs(inputs[1], spanErrorContraseña);
    validarInputs(inputs[0], spanErrorCorreo);
});