let mapa = new Map( [ ["nombre", "JOhn"], ["edad", 45], [undefined, "Soy el undefined"], [null, "Soy el null"] ] );

console.log( mapa );
console.log( mapa.get( undefined) );
console.log( mapa.get(null) ); 