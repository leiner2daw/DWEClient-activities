// 3.2.1 Crea una funció executarOperacio(a, b, callback) i prova-la amb callbacks per sumar, restar i calcular el màxim.
function sumar(a, b) {  return a + b; }
function restar(a, b) {  return a - b; }
function maximo(a, b) {return (a > b ? a : b);}
function ejecutarOperacion(a, b, callback) {
  return callback(a, b);
}
console.log(`Maximo: ${ejecutarOperacion(2, 4, maximo)}`);
console.log(`suma: ${ejecutarOperacion(2, 4, sumar)}`);
console.log(`resta: ${ejecutarOperacion(2, 4, restar)}`);

// 3.2.2 Crea un array amb cinc temperatures. Mostra-les amb for i torna-les a mostrar amb for...of.
const temps = ['-6º','38º','4º','25º', '1º'];

console.log(`\nfor...i`);
for (let i = 0; i < temps.length; i++) {console.log(temps[i]);}

console.log(`\nfor...of`)
for ( const t of temps){console.log(t);}

// 3.2.3 Calcula manualment la suma, la mitjana, el valor màxim i el valor mínim d’un array de nombres.
const numeros = [11,2,5,4,1];
let suma, media, maximoArray, minimoArray;
suma = media = maximoArray = minimoArray = 0;

// Orden
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length - 1; j++) {
    if (numeros[j] > numeros[j+1]) {
      let aux = numeros[j];
      numeros[j] = numeros[j+1];
      numeros[j+1] = aux;
    }
  }
}
// calculos
for (let n of numeros) suma+=n;

// MEDIANA
//let mitad = (numeros.length - (numeros.length % 2)) / 2;
//if (numeros.length % 2 !== 0) {
//  mediana = numeros[mitad]; 
//} else {
//  mediana = (numeros[mitad - 1] + numeros[mitad]) / 2;
//}

media = suma / numeros.length;

maximoArray = numeros[numeros.length - 1];
minimoArray = numeros[0];

console.log(`La suma del array es ${suma}, la media es ${media}, el maximo ${maximoArray}, y el minimo es ${minimoArray}`)


// 3.2.4 Crea una funció comptarMajorsQue(valors, limit) que retorni quants elements superen el límit.
function contadorMayoresQue(valores, limite) {
  let i = 0;
  
  for (const v of valores) {
    if (v > limite) i++;
  }
  return i;
}

let resultado = contadorMayoresQue(numeros, 3)

console.log(`Elementos mayores que el límite: ${resultado}`);


// 3.2.5 Crea una funció transformarArray(valors, callback) que construeixi i retorni un array nou aplicant el callback a cada element.
function transformarArray(valores, callback) {
  const array = [];
  
  for (const v of valores) {
    let resultadoTransformado = callback(v);
    array.push(resultadoTransformado);
  }
  return array;
}

const resultadoTransformado = transformarArray(numeros, function(x) {return x * 2;});

console.log(resultadoTransformado);
