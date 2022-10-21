
// Segmentoss de Carácteres
// 3 Funciones
let saludo = 'Hola Mundo';

console.log( saludo );
console.log( saludo.substr(0,1) );// También funciona. Es Legado
console.log( saludo.substring(0,1) );

console.log( saludo.startsWith("H") );
console.log( saludo.startsWith("h") );
console.log( '\n' );
console.log( saludo.endsWith("o") );
console.log( saludo.endsWith("Mundo") );
console.log( saludo.endsWith("O") );

console.log();
console.log( "Index" );
console.log( saludo.indexOf("o") );
console.log( saludo.indexOf("x") );// No existe y regresa con -1
console.log();
console.log( saludo.includes('x') );
console.log( saludo.includes('Mundo') ); // Regresa Booleano

console.log('\n');
// Verifica si empieza con "Mu" después de 5 pasos.
console.log( saludo.startsWith("Mu",5) ); 




