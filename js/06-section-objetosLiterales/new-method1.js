
/**
 * Nuevo método: Object.is()
 */

let myObject = {};
// console.log( Object.is( myObject) );

console.log( +0 == -0 );
console.log( +0 === -0 );
console.log( Object.is( +0 , -0) );
console.log( Object.is( NaN, NaN ) );

console.log( '==================');
console.log( 5 == 5 );
console.log( 5 === "5" );
console.log( Object.is(5,"5") );