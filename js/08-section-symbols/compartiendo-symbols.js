/**
 * COMPARTIENDO SÍMBOLOS
 * Symbol.for() y Symbol.keyFor()
 */
/**
 * PISCINA - POOL
 */
let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";

console.log( objeto );
console.log( objeto[userID] );
console.log( userID );

let userID2 = Symbol.for("userID");

console.log();
console.log( userID2 == userID );
console.log( userID2 === userID );
console.log( Object.is( userID, userID2 ) );
console.log();

console.log( objeto[userID2] );

console.log();

let id = Symbol.for("id unico");
console.log( Symbol.keyFor(id) );
let id2 = Symbol.for("id unico");
console.log( Symbol.keyFor(id2) );

console.log();
let id3 = Symbol("id unico");
console.log( id === id3 );
console.log( Object.is(id, id3) );
console.log( Symbol.keyFor(id3) );// No existe si no está el for