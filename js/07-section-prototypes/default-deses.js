/**
 * VALORES POR DEFECTO EN LA DESESTRUCTURACIÓN
 */
let frutas = ["banana"];
const [ f1, f2 = "manzana", f3 ] = frutas;

console.log( f1, f2, f3);

let opciones = {
    opcion1: 'Correr',
    opcion2: 'Dormir'
};

const  {opcion1, opcion2, opcion3 = " sobrevivir", opcion4}  = opciones;
console.log( opcion1 );
console.log( opcion2 );
console.log( opcion3 );
console.log( opcion4 );
