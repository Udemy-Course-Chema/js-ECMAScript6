let mapa = new Map( [ ["nombre", "JOhn"], ["edad", 45], [undefined, "Soy el undefined"], [null, "Soy el null"] ] );

mapa.forEach( ( valor, llave, mapaOrigen ) => {
    console.log( `El valor: ${valor}, Y su llave ${llave}` );
    console.log( mapaOrigen );
});