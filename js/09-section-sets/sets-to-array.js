
/**
 * CONVERTIR SETS EN UN ARRAY
 */
let numeros = [1,2,3,4,5,6,7];
let setNumeros = new Set( numeros );

console.log( setNumeros );

let arrayNumeros = [ ...setNumeros ];
console.log( arrayNumeros );


function eliminarDuplicados( items ){
    // let set = new Set( items );
    // return [ ...set ];
    return [ ...new Set(items ) ];
}

let numbersOfAges = [12,12,23,23,53,23,12,12,23,34,65,75];
console.log( eliminarDuplicados(numbersOfAges) ); 


