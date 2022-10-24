/**
 * ACLARANDO EL DOBLE COMPORTAMIENTO
 * DE LAS FUNCIONES
 */

/**
 * ECMASCRIPT 5
 * Y VERSIONES ANTERIORES, LAS FUNCIONES SIRVEN CON UN DOBLE 
 * PROPÓSITO DE SER LLAMADAS CON O SIN LA PALABRA RESERVADA "NEW".
 */
/**
 * CON "NEW"
 * EL VALOR DE "THIS" DENTRO DE LA FUNCIÓN ES UN NUEVO "OBJECTO"
 * Y ESE NUEVO OBJECTO ES RETORNADO
 * 
 * SIN "NEW"
 * SIMPLEMENTE HACEMOS EL LLAMADO DE LA FUNCIÓN Y ESPEREMOS EL RETORNO
 * DE ALGÚN VALOR PROCESADO QUE PUEDE SER UN OBJECTO, UNDEFINED O NULL.
 */

function Persona( name ){
    if( this instanceof Persona ){
        this.nombre = name;
    }else{
        throw new Error('Está función, debe ser utilizada con el new');
    }

    this.nombre = name;
}


// VERSIONA ECMAScript 5
let unaPersona = new Persona( "John" );
// let notPerson = Persona.call( "Mick" );
let calledBy = Persona.call( unaPersona, 'Dumbledore' );

// console.log( unaPersona );
// console.log( notPerson );
// console.log( calledBy );

/**
 * ECMASCRIPT 6
 * 
 * NEW.TARGET ( META PROPIEDAD )
 * Una meta propiedad, es una propiedad de un no-objeto, que provee información
 * adicional relacionada con su procedencia ( como el new ).
 * 
 * Cuando el constructor de la función es llamada, new.target se llena con el 
 * operador new.
 * 
 * Si la función "Call()" es ejecutada, "new.target" no estará definida ya que 
 * no se ejecutó el constructor. 
 */

// Más seguro
function Persona1( name ){
    if( typeof new.target !== 'undefined' ){
        this.nombre = name;
    }else{
        throw new Error( 'Está función, debe de ser utilizada con el new' );
    }

    this.nombre = name;
}
let persona = new Persona1( ' Sargento ' );
let noPersona = Persona1.call( persona,  " Johnson "); 

