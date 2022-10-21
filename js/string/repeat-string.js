

let texto = 'hola\n';

console.log( texto.repeat( 2 ) );
console.log( "Hola Mundo".repeat( 2 ) );

const space = 10;

// Para qué sirve y las evidencias 
let nombres = ["fer", "maria", "chavez"];
let phones = ["224444","3343432","5454354"];

for ( i in nombres ){
    let dif = space - nombres[i].length;
    console.log( nombres[i] + " ".repeat( dif ) + " | " + phones[i] );
}

