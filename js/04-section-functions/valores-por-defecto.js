
function sumar( a = 1, b = 2 ){
    // Los valores opcionales no llegan al arguments. 
    // Solo las llamadas y sus respectivos valores a mandar, si. 
    console.log( arguments );
    console.log( typeof arguments );
}

sumar( 2, 5, {"nombre":"Chema"}, ["apple", "pera", "melon"]);