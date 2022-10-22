/**
 * SPREAD
 * Muy cercano a REST. 
 * El parámetro REST permite especificar argumentos independientes que serán
 * combinados en un arreglo.
 * El operador SPREAD permife especificar un arreglo que será separado y cada item
 * enviado será un argumento independiente a la función. 
 */

let numeros = [1,52,3532,543543,65674,3453,2343254];

let max1 = Math.max.apply( Math, numeros );
let max2 = Math.max( ...numeros );
let max3 = Math.max( numeros );

console.log( max1 );
console.log( max2 );
console.log( max3 );