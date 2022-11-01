/**
 * REMOVIENDO VALORES DE SETS
 */
let items = new Set([32432,34,23,234,324,34,234,324]);

console.log( items );
console.log( items.size );

items.delete( 34 );
console.log( items );
console.log( items.size );

console.log()
items.clear();
console.log( items );
console.log( items.size );
