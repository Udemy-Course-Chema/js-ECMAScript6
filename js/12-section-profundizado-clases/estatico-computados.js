/**
 * Miembros estáticos y métodos computados.
 */
/**
 * ¿qué es método estático?
 * Es un método que nos permite que se ejecute 
 * dentro de la clase SIN instancias. 
 * 
 * 
 * PROPIEDADES COMPUTADAS
 */

// Computada
let computadas = "comer";
class People{
    constructor( nombre ){
        this.name = nombre;
    }

    getName(){
        console.log( this.name );
    }

    // COMPUTADA
    [computadas](){
        console.log( "Comiendo " );
    }

    static crear( nombre ){
        return new People( nombre );
    }
}

let yo = People.crear("John");
console.clear();
console.log( yo );
yo.getName();
console.log( yo.name );
yo.comer();
