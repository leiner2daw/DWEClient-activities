console.log(`3.4.1 Muestra con "forEach" los elementos de un array de nombres precedidos por su posición.`);
const nombres = ['Leiner', 'Joan', 'David', 'Ayoub'];

nombres.forEach((nombre, i) => { console.log(`${i + 1}. ${nombre}`); })


console.log(`3.4.2 A partir de un array de precios, crea con "map" un nuevo array aplicando un descuento del 15 %.`);
const precios = [1.99, 5, 10, 99.99];

const descuento15 = precios.map(precio => Number((precio * 0.85).toFixed(2)));
console.log(descuento15);


// 3.4.3 A partir de un array de palabras, conserva con "filter" aquellas que tengan cinco caracteres o más.
let frase1 = 'HOla, soy Leiner, qué tal?';
let frase2 = 'HOla, soy Leiner';
let frase3 = 'HOla';
let frase4 = 'HO';

const frases = [frase1, frase2, frase3, frase4];
const mas5Caracteres = frases.filter(frase => frase.length > 5);
console.log(mas5Caracteres);

// 3.4.4 Convierte un array de minutos en textos del tipo "2 h 15 min" mediante "map".
const minutos = [1, 20, 50, 60, 90, 120];

const minutosFormateado = minutos.map((min) => {
    const horas = Math.floor(min / 60);
    const minsRestantes = min % 60;

    return `${horas} h ${minsRestantes} min`;
});

console.log(minutosFormateado);


// 3.4.5 Encadena "filter" y "map" para obtener el cuadrado de todos los números positivos de un array.
const numeros = [-5, -3, -1, 0, 1, 3, 5];

const cuadrados = numeros
    .filter(n => n > 0)
    .map(n => n * n);

console.log(cuadrados);

// 3.4.6 Pide una palabra y filtra todas las cadenas de un array que la contengan, ignorando mayúsculas y minúsculas.
const cadenas = ['Hola, que tal?', 'Esto es una Prueba', 'Buscar a Nemo', 'Hey, `Hola`'];

const htmlCadenas = document.getElementById('cadena');
htmlCadenas.innerHTML = cadenas.map(cadena => `<li>${cadena}</li>`);

const btn = document.getElementById('procesar');

btn.addEventListener('click', () => {
    const inputPalabra = document.getElementById('palabra').value;

    const buscador = cadenas.filter(palabra => palabra.toLowerCase().includes(inputPalabra));

    console.log(buscador);
});
