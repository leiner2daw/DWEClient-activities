const n = 27;

function sumaDivisoresPropios(n) {
    let sumaDivisoresPropio = 0;
    let cadenaDivisores = "";

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sumaDivisoresPropio += i;

            if (cadenaDivisores === "") {
                cadenaDivisores += i;
            } else {
                cadenaDivisores += ", " + i;
            }
        }
    }

    return {
        suma: sumaDivisoresPropio,
        cadena: cadenaDivisores
    };
}

function esPrimo(n, suma) {
    return suma === 1 && n > 1;
}

function clasificarNumero(n) {
    if (n < 1) return "No es valido tu number";

    const datosDivisores = sumaDivisoresPropios(n);
    const suma = datosDivisores.suma;
    const cadena = datosDivisores.cadena;

    let resultado = "";

    if (esPrimo(n, suma)) resultado += `${n} es primo.\n`;
    else resultado += `${n} no es primo.\n`;

    if (n % 2 === 0) resultado += `${n} es Par.\n`;
    else resultado += `${n} es Impar\n`;

    if (suma === n) resultado += `${n} es Perfecto.\n`;
    else resultado += `${n} no es Perfecto.\n`;

    resultado += `Divisores propios: ${cadena}\nSuma de divisores propios: ${suma}`;

    return resultado;
}

const resultadoAnalisis = clasificarNumero(n);
console.log(resultadoAnalisis);
