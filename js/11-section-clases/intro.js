/**
 * EN ES5 NO TENÍA CLASESSSSS
 * 
 * 
 */

// OLD (ES5)
function People( name ){
    this.name = name;

    this.gritarNombre = function(){
        console.log( this.name.toUpperCase() );
    }
}

People.prototype.getName = function(){
    console.log( this.name );
}

let john = new People('John');

john.gritarNombre();
john.getName();

console.clear();
console.log( john instanceof People );
console.log( john instanceof Object );