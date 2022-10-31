// OLD ES5
function tareasAsincronas(){
    setTimeout(function(){
        console.log( "Proceso asincrono" );
        // Esperamos 3 y luego llamamos. 
        // Recuerda que estamos en el primer lugar 
        // Con timeout esperamos el tiempo para ejecutar
        // en ESTE cuerpo.
        resolve();
        reject();
    }, 3000);
};

tareasAsincronas();

console.log( "Estamos arriba" );

function resolve(){
    console.log( "todo ok" );
}
function reject(){
    console.log( "todo mal" );
}