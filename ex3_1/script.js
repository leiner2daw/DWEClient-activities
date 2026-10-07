const n = 28;

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

function clasificarNumero(n) {
    if (n < 1) return "No es valido tu number";

    const datosDivisores = sumaDivisoresPropios(n);
    const suma = datosDivisores.suma;
    const cadena = datosDivisores.cadena;

    let resultado = "";

    if (suma === 1) resultado += `${n} es primo.\n`;

    if (n % 2 === 0) resultado += `${n} es par.\n`;

    if (suma === n) resultado += `${n} es perfecto.\n`;
    else `${n} no es perfecto`

    resultado += `Divisores propios: ${cadena}\nSuma de divisores propios: ${suma}`;

    return resultado;
}

const resultadoAnalisis = clasificarNumero(n);
console.log(resultadoAnalisis);