/**
 * CLASES COMO EXPRESIONES
 */

// ¿Qué es expresión? Aquí se muestra
let miFuncion = function(){
    console.log( 'Hola mundo' );
}

let otraFuncion = miFuncion;

console.log( otraFuncion );
console.log( typeof otraFuncion );
otraFuncion();  


// PODEMOS HACER CON LA CLASE
let People = class{
    constructor(name = "Por Default"){
        this.name = name;
        this.edad = 20;
        this.direction = "EU";
    }

    getName(){
        return this.name;
    }
}

const copiaPeople = People;

let john = new copiaPeople("John");
console.clear();
console.log( john );
console.log( john.getName() );