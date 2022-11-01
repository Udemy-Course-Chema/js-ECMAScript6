/**
 * 
 * Listas de Colecciones de Datos
 * 1. Listas
 * 2. Arreglos
 * 3. Colecciones
 * 4. Mapas
 * 
 * SETS 
 * 
 * Son una lista ordenada de valores SIN DUPLICADOS.
 * Permiten un rápido acceso a la data que contienen. 
 */

/**
 * AGREGANDO Y BUSCANDO ÍTEMS
 */
let items = new Set();

items.add( 123 );
items.add( 432 );
items.add( 1324323 );
items.add( 5432 );
items.add( 123 );
items.add( "123" );


console.log( items );
console.log( items.size );

console.log()

let items2 = new Set([ 123,43,3,42,234,32,423,23 ]);
console.log( items2 );
console.log( items2.has( 123 ) );