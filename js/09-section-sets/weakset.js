/**
 * Weakset 
 * Trabaja de una manera similar a los sets
 * 
 * CARACTERÍSTICAS PRINCIPALES:
 * 1. En un weakset, add(), has(), remove(), dan un error si 
 * enviamos como parámetro algo que no sea un objeto.
 * 2.  No tiene manera de hacer repeticiones o ciclos for in. 
 * 3. No tienen keys(), values(), por lo que no hay manera 
 * vía programación de saber cuantos elementos hay dentro. 
 * 4. No tienen un for-each.
 * 5. No tienen propiedad size. 
 * 
 * ALMACENA ÚNICAMENTE LOS OBJETOS 
 */


let set = new WeakSet();

let persona1 = {
    nombre:"Juan"
};
let persona2 = {
    nombre:"John"
};

set.add( persona1 );
set.add( persona2 );

console.log( set );

set.delete( persona1 );

console.log( set );