/**
 * SÍMBOLOS - SYMBOLS
 * Son un tipo de dato único, nuevo y diferente
 * 1. Undefined
 * 2. Null
 * 3. Boolean
 * 4. Number
 * 5. String
 * 6. Object
 * 7. Symbols
 * 
 * Símbolos y criptografía
 */

// Símbolos y propiedades
/**
 * SOn perfectos para poner nombre de las propiedades
 * y asegurar de que no van a colisionar. 
 */
let primerNombre = Symbol('caos');
let segundoNombre = Symbol();
console.log( primerNombre );
let people = {
    [segundoNombre]: 'Connor'
};

people[primerNombre] = "John";
console.log( people );
console.log( people[primerNombre] );
console.log( people[segundoNombre] );

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');
console.log();
console.log( simbolo1 );
console.log( simbolo2 );
console.log( simbolo1 == simbolo2 );
console.log( simbolo1 === simbolo2 );
console.log( Object.is( simbolo1, simbolo2 ) );

console.log();
console.log( typeof simbolo1 );

// NO SE PUEDE IMPRIMIR STRING
console.log();
console.log( 'El simbolo es: ', simbolo1 );
// console.log( `El simbolo es: ${ simbolo1 }` );
console.log( 'caos' in people );
