// 3.5.1 Utiliza find para obtener la primera temperatura inferior a cero y controla el caso en el que no exista.
const temperaturas = [-5, -3, -1, 0, 1, 3, 5];

const menosCero = temperaturas.find(t => t < 0);
console.log(`Primero temperatura inferior a 0: ${menosCero}`);

// 3.5.2 Comprueba con some si un array contiene algún múltiplo de 5.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiplo5 = numeros.some(n => n % 5 === 0);
console.log(`Hay algún multiplo de 5 en {${numeros}}? ${(multiplo5)}`);

// 3.5.3 Comprueba con every si todas las contraseñas de un array tienen al menos ocho caracteres.
const passwords = ['1234', 'Contraseña', 'p214P!^x'];

const listaContraseñaSegura = passwords.every(psw => psw.length >= 8);
console.log(`Todas las contraseñas de {${passwords.join(', ')}} son seguras? ${listaContraseñaSegura}`);

// 3.5.4 Calcula con reduce el total y la media de un array de gastos.
const gastos = [1.99, 5.45, 99.00];

const mediaGastos = gastos.reduce((acum, gasto) => {
    acum += gasto;
    return acum / gastos.length;
});
console.log(`${gastos.join(', ')}
La media de gasto es ${mediaGastos.toFixed(2)}`);

// 3.5.5 Ordena una copia de un array de números de mayor a menor sin modificar el original.
const copiaNumeros = numeros.slice();

copiaNumeros.sort((a, b) => b - a);
console.log(`Array original: {${numeros}}
copiaNumeros: {${copiaNumeros}}`);

// 3.5.6 A partir de un array de palabras, encuentra la primera que empiece por vocal,
// comprueba si todas tienen contenido y calcula el número total de caracteres.
const palabras = ['Palabra', 'teclado', 'pantalla', `PC`, 'Andalucía'];
const vocales = ['a', 'e', 'i', 'o', 'u'];

const palabraVocal = palabras.find(palabra => {
    const primeraLetra = palabra[0].toLowerCase();

    return vocales.includes(primeraLetra);
})
console.log(palabraVocal);