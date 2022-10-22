
/**
 * ROMPER LA RELACIÓN DE REFERENCIA DE LOS OBJECTOS
 */

let persona1 = {
    nombre: "Juan",
    edad: 40
};

// NO ESTÁ CLONADO
let persona2 = persona1;
persona2.nombre = 'John'

// SOLUCION
// let persona3 = { persona1 }; NO this way
let persona3 = { ...persona1 }; // YES it this way. 
persona3.nombre = 'Chris';


console.log( persona1 );
console.log( persona2 );
console.log( persona3 );
