
/**
 * FUNCIONES DE FLECHA - ARROW FUNCTIONS
 * Este tipo de funciones tienen un sintaxis variada
 * que depende de lo que quieras realizar.
 * 
 * Normalmente tiene la misma estructura:
 * 1. Función con argumentos.
 * 2. Seguido de una flecha gorda.
 * 3. Seguido del cuerpo de la función.
 * 
 * ¿PARA QUÉ SIRVEN?
 * 1. Menos código que es más simple de interpretar.
 * 2. No hay un nuevo "this" dentro de las funciones.
 * 3. No hay constructores, no tiene new.
 * 4. No puedes cambiar el valor del "this" aunque uses call(), apply() o bind().
 * 5. No hay objeto "arguments"
 * 6. Entre otras cosas.
 * 
 * SE COMPORTAN DE UNA FORMA MUY DIFERENTE A LAS FUNCIONES EN ECMASCRIPT 5.
 * 
 * 1. No hay creación de "this","super","arguments" y "new.target".
 * 2. No puede ser llamado con new. 
 * 3. No tienen prototipos (prototype).
 * 4. No pueden cambiar "this".
 * 5. No hay objecto "arguments".
 * 6. No pueden tener nombre de parámetros duplicados. 
 */

//EJEMPLOS
let miFuncion1 = function( valor ){
    return valor;
};

let miFuncion2 = valor => valor;


let sumar1 = function( num1, num2 ){
    return num1 + num2;
}

let sumar2 = ( num1, num2 ) => num1 + num2;

// console.log( sumar1(5,8) );
// console.log( sumar2(32,65) );

let salutate1 = function() {
    return 'saludos';
}

let salutate2 = () => 'Saludos 2'

// console.log( salutate1() );
// console.log( salutate2() );

let salutatePerson1 = function(name){
    return 'HOla, ' + name;
}

let salutatePerson2 = ( name ) => `Hola!, ${ name }`;

// console.log( salutatePerson1('John') );
// console.log( salutatePerson2('Mayers') );


/**
 * 
 * AQUI ESTA LA DIFERENCIA DEL RETORNO DE OBJETOS
 */
let obtenerLibro1 = function( id ){
    return {
        id: id,
        nombre:'El Psicoanalista'
    };
}

// Hay dos formas de regresar un objecto JSON.
// Con paréntesis, mejor.
let obtenerLibro2 = id => ( { id:id, name:'Justina o los infortunios de la virtud'} );
// let obtenerLibro2 = id => {
//     return {id: id,
//     nombre:'Justina o los infortunios de la virtud'}
// };

console.log( obtenerLibro1(1) );
console.log( obtenerLibro2(2) );

