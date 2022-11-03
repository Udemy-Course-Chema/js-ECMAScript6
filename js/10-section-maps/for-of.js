/**
 * Nuevo ciclo FOR-OF
 * 
 * Ciclo especializado para las colecciones
 */

let numeros = [10,200,300,400,1000,50,30,190];

// for( let i = 0; i<numeros.length; i++){
//     console.log( numeros[i] );
// }
// for( let numero in numeros ){
//     console.log( numeros[numero] );
// }

for( let numero of numeros ){
    console.log( numero );
}
console.clear();
console.log( "================================");
const people = [
    { nombre:"john", age:29 },
    { nombre:"cortana", age:25 },
    { nombre:"iquisitor", age:35 },
    { nombre:"john", age:20 },
    { nombre:"john", age:20 }
];

for( person of people ){
    console.log( person );
}
console.log();
console.clear();
let mapa = new Map( [ ["nombre", "fernando"],["apellido", "herrera"] ] );
console.log( mapa );
console.log( mapa.has() );
console.log( mapa.get("nombre") );

