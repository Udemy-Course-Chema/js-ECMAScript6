/**
 * Los Objetos en ECS6
 * Ha recibido muchas mejoras, ya que casi cualquier
 * cosa en JavaScript es algún tipo de Objeto.
 * 
 * OBJETOS LITERALES EN ES6
 * Es el patrón más utilizado en JavaSCript. (JSON se construyó
 * de esta sintaxis).
 * 
 * Dichos objetos, se encuentra en casi cualquier script en el 
 * internet, casi el 99% de los programas los utilizan en algún
 * punto.
 */

// JSON
let person = {
    nombre:'john'
};

function createPerson( name, surname, age){
    return{
        name,
        surname,
        age
    };
    // return{
    //     name: name,
    //     surname: surname,
    //     age: age
    // };
};

let MasterChief = createPerson( 'Master','Chief',40 );

console.log( MasterChief );
