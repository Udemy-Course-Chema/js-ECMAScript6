
/**
 * Nombres de propiedades computadas o procesadas
 */
let persona = {};
let surname = 'surname';

// ES5
persona[surname]='Katzebanch';
persona["first_name"]='John';

// console.log( persona["first_name"] );
// console.log( persona[surname] );
// console.log( persona );

// NOTACIÓN O
let persona2 = {
    "primer nombre":"Caos"
}
// console.log( persona2 );


// ES6
let surname2 = "primer apellido";

let persona3 = {
    "primer nombre":"John",
    [ surname2 ]: "Sergeant"
}

// console.log( persona3["primer nombre"] );
// console.log( persona3[surname2] );
// console.log( persona3 );


// COMPUTADAS
let subfijo = "  combat";
let persona4 = {
    [ "primer" + subfijo] : 'Neveland',
    [ "segundo" + subfijo ]: 'planetaria'
}

console.log( persona4 );