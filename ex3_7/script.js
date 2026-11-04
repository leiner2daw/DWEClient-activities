// Crea una función importarProductos(textJSON) que devuelva un objeto
// { productos, errores }.
// El programa no debe interrumpirse si el texto es incorrecto.

// a.Captura los errores de sintaxis mediante try/catch.
// b.Comprueba que el elemento raíz sea un array.
// c.Valida cada registro: id entero y único, nombre no vacío, precio > 0 y stock entero ≥ 0.
// d.Convierte los registros válidos en instancias de Producto.
// e.Añade a errores la posición y el motivo por el que se ha descartado cada registro.
// f.Prueba la función con JSON mal formado, un elemento raíz que no sea un array, identificadores duplicados y valores límite.

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

function importarProductos(textJSON) {
    const productos = [];
    const errores = [];
    const ids = []
    let productosParsed;

    try {
        productosParsed = JSON.parse(textJSON);
    } catch (error) {
        errores.push({
            posicion: "raiz",
            error: `JSON invalido: ${error.message}`
        });

        return { productos, errores };
    }

    if (!Array.isArray(productosParsed)) {
        errores.push({
            posicion: "raiz",
            error: `La raíz debe ser un Array`
        });
        return { productos, errores }
    }

    let pos = 0;
    for (const p of productosParsed) {
        let valido = true;

        if (!Number.isInteger(p.id)) {
            errores.push(`ID no es un entero. Posicion: ${pos}`);
            valido = false;
        }
        if (ids.includes(p.id)) {
            errores.push(`El ID ${p.id} está repitido. Posicion: ${pos}`);
            valido = false;
        }
        if (!p.nombre || p.nombre.trim() === "") {
            errores.push(`Nombre vacio, porfavor introduzca un Nombre. Posicion: ${pos}`);
            valido = false;
        }
        if (!Number.isInteger(p.stock) || typeof p.precio !== 'number') {
            errores.push(`Stock o Precio no es un entero. Posicion: ${pos}`);
            valido = false
        }
        if (p.precio <= 0 || p.stock < 0) {
            errores.push(`El Precio o Stock no es valido. Posicion: ${pos}`);
            valido = false;
        }

        if (valido) {
            ids.push(p.id);
            productos.push(new Producto(p.id, p.nombre, p.precio, p.stock));
        }

        pos++;
    }
    return { productos, errores };
}

const jsonMalFormado = "{ mal formado }";
const jsonRaizNoArray = '{"id": 1, "nombre": "Teclado", "precio": 19.99, "stock": 10}';
const jsonPruebas = `[
    {"id": 1, "nombre": "Ratón", "precio": 10.50, "stock": 5},
    {"id": 2, "nombre": "", "precio": 15.00, "stock": 2},
    {"id": 1, "nombre": "Teclado", "precio": 25.00, "stock": 0},
    {"id": 3, "nombre": "Monitor", "precio": -5, "stock": 4},
    {"id": 4.5, "nombre": "Cable", "precio": 5, "stock": 3},
    {"id": 5, "nombre": "Alfombrilla", "precio": 0.01, "stock": 0}
]`;
console.log(importarProductos(jsonMalFormado));
console.log(importarProductos(jsonRaizNoArray));
console.log(importarProductos(jsonPruebas));