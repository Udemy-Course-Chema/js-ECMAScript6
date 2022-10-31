/**
 * DESESTRUCTURACIÓN DE ARREGLOS ANIDADOS
 */

let colores = [ "rojo", ["verde", "amarrillo"], "morado", "naranja" ];

// const [ , arr2,, ] = colores;
const [ , [color1, color2], ,  ] = colores;

console.log( color1, color2 );

let colores2 = ["rojo", "verde", "amarrillo", "morado", "naranja"];

const [ colorPrincipal, ...demasColores ] = colores2;
console.log( colorPrincipal );
console.log( demasColores );