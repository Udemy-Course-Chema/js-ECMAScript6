
/**
 * FUNCIÓN ANÓNIMA 
 * 
 * No se puede llamar con paréntesis ()
 * Sólo se llama sin paréntesis. 
 */

let salutate1 = function( name ){
    return 'hola, ' + name; 
}('Sargento Johnson');

let salutate2 = ( name => `Hola, ${ name }`)('Jefe Maestro');

console.log( salutate1 );
console.log( salutate2 );