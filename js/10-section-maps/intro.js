/**
 * LLAVE <-> VALOR
 * nombre  John
 * edad 50
 * 
 * KEY-VALUE PAIR
 * 
 * TIENEN:
 * 1. HAS()
 * 2. DELETE()
 * 3. CLEAR()
 * 4. SIZE
 * 5. ITERACIONES
 */

let mapa = new Map();

mapa.set( "nombre", "John " );
mapa.set( "edad", 24 );
mapa.set( "surname" );

console.log( mapa );
console.log( mapa.size );
console.log();
console.log( mapa.get("nombre") );
console.log( mapa.has("nombre") );
console.log( mapa.has("John") );

console.log();
mapa.delete("nombre");
console.log( mapa );

console.log();
mapa.clear();
console.log( mapa );
