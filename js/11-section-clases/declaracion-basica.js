/**
 * DECLARACIÓN BÁSICA DE UNA CLASE EN ES6(NUEVO)
 */

class People{
    constructor( name ){
        this.name = name;
    }

    // Equivale a :
    // People.prototype.getName();
    getName(){
        console.log( this.name );
    }
}

const john = new People( "John" );

john.getName();

console.log( john instanceof People );
console.log( john instanceof Object );

console.clear();
console.log( typeof john );
console.log( typeof People );
console.log( typeof People.prototype.getName );