

let number = 10;

// console.log( number.startsWith("1") ); // startsWith es un método especial 
// SOLAMENTE PARA STRINGS

let text1 = "hola";
let text2 = 'hola';
let text3 = `hola`;

console.log( text1 === text2 );
console.log( text1 === text3 );
console.log( text2 === text3 );

let nombre = 'Maria';

let salida1 = `El nombre de ella es ${ nombre }`;
let salida2 = 'El nombre de ella es Maria';

console.log();
console.log( salida1 === salida2 );