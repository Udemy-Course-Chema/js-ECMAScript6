
// NO EXISTE REST EN EL EMACSCRITP 5 !!!!!!!!!!!!!!!!
// OLD JAVASCRIPT WITH REST 
// RESTRICCIONES 
// 1. Sólo puede existir un parámetro rest en la función.
// 2. El parámetro rest debe de ir siempre como último parámetro.
function agregarAlumnos() {
    console.log( arguments );

    for( let i = 0; i<arguments.length; i++){
        arguments[0].push( arguments[i] );
    }

    return arguments[0];
}

let teacher = ["Fernando"];
let students = agregarAlumnos( teacher, "chema","John", "Dornick", "Sheldon" );

console.log( students );
