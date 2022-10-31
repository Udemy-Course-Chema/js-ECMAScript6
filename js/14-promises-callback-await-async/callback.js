/**
 * Callback
 * La forma tradicional de hacer tareas a destiempo.
 * No son asíncronos
 */


const getUsuarioById = (id, callback) =>{
    const user = {
        name: 'john',
        id
    };
    // Parámetros del CALLBACK
    // callback( err, res );
    callback( null, user );
}

const miVariable = getUsuarioById( 5, (err, obj) => console.log( obj ) );
console.log( miVariable );