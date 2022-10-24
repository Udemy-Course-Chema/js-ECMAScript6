/**
 * DIFERENCIA ENTRE REST Y SPREAD
 * 
 * REST: 
 *  Junta los elementos en un arreglo
 * 
 * SPREAD
 *  Esparce los elementos como si fueran enviados de forma separada.
 */

function salutateREST( salutate, ...names ){
    console.log( names );
    console.log( typeof names );
    for( i in names ){
        console.log( `${ salutate }, ${ names[i] }` );
    }
}

function salutateSPREAD( salutate, ...names ){
    console.log( names );
    console.log( typeof names );

    console.log( `${ salutate }, ${ names }` )
}

function withoutSpread( name, age, home, veteran, adn){
    console.log( name, age, home, veteran, adn);
    console.log( arguments );
}

salutateREST("hola", "fer", "victor", "global");
console.log();
console.log();

let heroes = [ 'Capitan America', 'Ironman', 'Hulk', 'Viuda Negra' ]
salutateSPREAD( "Qué tal!", heroes );

console.log( );

let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];
console.log( cuerpo );

let info = ["isVeteran", "ADN"];
withoutSpread('john', 23, 'LA', ...info)