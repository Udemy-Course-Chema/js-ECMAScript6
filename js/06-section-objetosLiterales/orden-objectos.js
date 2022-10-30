/**
 * Orden de enumeración de las propiedades de los 
 * objetos.
 * 1. Todas las llaves van en orden ascendente.
 * 2. Todas las llaves tipo string, van ordenadas en la manera
 * que fueron agregadas al objeto.
 * 3. Todos los símbolos en el orden que fueron agregadas
 * al objeto.
 */
let miObjeto = {
    c:1,
    0:1,
    x:1,
    15:1,
    r:1,
    3:1,
    b:1
}

// console.log( miObjeto );

miObjeto.d = 1;
miObjeto["2"] = 1;
miObjeto['a'] = 1;

// console.log( miObjeto );
// console.log( Object.getOwnPropertyNames( miObjeto ).join(" , ") );
// console.log( Object.keys( miObjeto ) );
// console.log( JSON.stringify( miObjeto ) );
for ( i in Object.keys( miObjeto ) ){
    console.log( Object.keys( miObjeto )[i] );
}
