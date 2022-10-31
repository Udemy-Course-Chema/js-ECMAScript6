/**
 * PROTOTIPOS
 * La POO( Programación Orientada a Objetos ) de JavaScript se encontraba
 * basada en PROTOTIPOS y no en clases. 
 * 
 * Los prototipos son un conjunto de normas para integrar
 * PROGRAMACIÓN ORIENTADA A OBJETOS en JavaScript. Pero con los 
 * prototipos, nosotros somos capaces de realizar tareas como:
 * 1. Herencia.
 * 2. Encapsulamiento.
 * 3. Abstracción.
 * 4. Polimorfismo.
 */

// EJEMPLOS
let gato = {
    sonido(){
        console.log(' MEOW ');
    },
    aullido(){
        console.log( 'MEOOOOOOOOOOOOW' );
    }
};

let dog = {
    sonido(){
        console.log( 'GUAU' )
    }
};

let angora = Object.create( gato );

console.log( Object.getPrototypeOf( angora ) === gato );
// angora.sonido();
// angora.aullido();

Object.setPrototypeOf( angora, dog );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.aullido();