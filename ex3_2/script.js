const entrada = document.getElementById('entrada').value;
const salida = document.getElementById('salida').value;
const errorEntrada = document.getElementById('errorEntrada');
const errorSalida = document.getElementById('errorSalida');

const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

if (entrada.length != 5) { errorEntrada.innerHTML = `Deben haber 5 caracteres.`; }
else if (salida.length != 5) { errorSalida.innerHTML = `Deben haber 5 caracteres.`; }
else if (!regex.test(entrada)) {
    errorEntrada.innerHTML = `<p>Entrada debe seguir el formato HH:MM</p>`;
}
else if (!regex.test(salida)) {
    errorSalida.innerHTML = `Salir debe seguir el formato HH:MM`;
}
else {

}

// Funciones
function calcularMinutos(hora) {
    const [horas, minutos] = hora.split(':');

    const totalMinutos = (horas * 60) + +minutos;

    return totalMinutos;
}

function calcularDuracion(entrada, salida) {
    const minutosEntrada = calcularMinutos(entrada);
    const minutosSalida = calcularMinutos(salida);

    // diferencia
    let minutosTotal = minutosSalida - minutosEntrada;
    if (minutosTotal < 0) {
        minutosTotal += 24 * 60;
    }

    return minutosTotal;
}

function calcularImporteBase(minutos) {
    let importeBase = 0;

    if (minutos <= 30) {
        return importeBase;
    } else {
        if (minutos > 300) {
            importeBase += (minutos - 300) * 0.01;
            minutos = 300;
        }
        if (minutos > 120) {
            importeBase += (minutos - 120) * 0.02;
            minutos = 120
        }
        if (minutos > 30) {
            importeBase += (minutos - 30) * 0.03;
        }

        if (importeBase > 18) return 18;
        else return importeBase;
    }
}


function sinDescuento(importeBase) {
    return importeBase;
}
function descuentoElectrico(importeBase) {
    return importeBase * 0.8;
}
function descuentoResidente(importeBase) {
    return importeBase * 0.7;
}
function calcularImporteFinal(importeBase, aplicarDescuento) {
    return
}