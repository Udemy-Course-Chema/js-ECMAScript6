/**
 * Métodos Concisos
 */

//ES6
let persona = {
    nombre: "Fernando",
    getName: function(){
        console.log( this.nombre );
    },
    metodoConciso(){
        console.log( 'Este es el método conciso' );
    },
};

persona.getName();
persona.metodoConciso();