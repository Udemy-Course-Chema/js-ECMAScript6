
let arreglo = [1,2,543,23,32,65,34,2];

let ordenado = arreglo.sort( function( a,b ){
    // console.log( "El a son: ", a );
    // console.log( "el b son: ", b );
    // console.log( "El resultado final es: ", a-b );
    return a-b;
} );

let ordenado2 = arreglo.sort( (a,b) => a-b)

// console.log( ordenado );
console.log( ordenado2 );