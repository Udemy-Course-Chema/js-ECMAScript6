/**
 * PROMSESA
 * Nuevo en ES6
 */

function tareaAsincrona(){
    // TIENE 2 ARGUMENTOS
    // 1. Resolve -> el que todo funciona correctamente
    // 2. Reject -> el que NO funciona correctamente
    let promesa = new Promise( (res, rej) => {
        setTimeout(function(){
            console.log( "Proceso asíncrono terminado");
            res('Termino muy bien');
        }, 1200);
    } );

    return promesa;
};

function prueba(){
    return new Promise( (res, rej) => {
        const hola1 = 'Hola mundo';
        const numeros = 1234000;
        res(numeros);
    } );
}

async function aPrueba(){
    let abc = await prueba();
    console.log( "La prueba que salio en la promesa: ", abc );
}

/**
 * En cada dos parámetros del Then
 * uno es el que sale bien 
 * y el otro es el que sale mal
 */
tareaAsincrona()
    .then( function(){ 
        console.log( 'todo bien en el then()');
    })
    .catch( err => console.log( err ) );

aPrueba();
