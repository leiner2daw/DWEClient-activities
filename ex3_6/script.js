// 3.6.1 Desestructura un array con nombre, primer apellido y segundo apellido. Asigna un valor predeterminado al segundo apellido.
const persona = ['Leiner', 'Zapata', 'Ancajima'];
const [nombre, primerApellido, segundoApellido = 'Christ'] = persona;

console.log(nombre, primerApellido, segundoApellido);

// 3.6.2 Separa el primer elemento de un array y guarda el resto mediante rest.
const numeros = [1, 2, 3, 4, 5];
const [n0, ...rest] = numeros;
console.log(`El primer digito de "numeros" es ${n0}
El resto del array es: ${rest}`);

// 3.6.3 Combina dos arrays y añade un elemento al principio y otro al final utilizando spread.
const grupoA = ['Leiner', 'David'];
const grupoB = ['Ayoub', 'Sergi'];

let alumnos = ['Principio', ...grupoA, ...grupoB, 'Final'];
console.log(alumnos);

// 3.6.4 Crea un objeto libro con título, autor, páginas y un método resumen() que muestre una frase descriptiva.
const libro = {
    titulo: 'Escuela',
    autor: 'Humano',
    paginas: '2026',
    resumen() { console.log(`Esta es una obra que habla del avance y retroceso que tuvo la educación académica.`) }
}

libro.resumen();

// 3.6.5 Crea un objeto contador con una propiedad valor y los métodos incrementar(), decrementar() y mostrar().
const contador = {
    valor: 10,
    incrementar() { this.valor++ },
    decrementar() { this.valor-- },
    mostrar() { console.log(this.valor) }
}
contador.decrementar();
contador.decrementar();
contador.incrementar();
contador.mostrar();

// 3.6.6 Copia un producto utilizando spread, modifica su precio y comprueba que el original no se ha modificado.
const productos = [{ nombre: "PS5", precio: 799.99 }, { nombre: "GTA VI", precio: 79.99 }, { nombre: "Pincel", precio: 5.99 }];

const copiaProducto = { ...productos[0] };
copiaProducto.precio = 599.99;
console.log(`El precio original de la ${productos[0].nombre} es de ${productos[0].precio}€
En oferta cuesta ${copiaProducto.precio}€`);