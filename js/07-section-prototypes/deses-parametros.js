/**
 * DESESTRUCTURACIÓN DE PARÁMETROS
 */

// VAlores en vacío si no sabemos que nos esperan para 
// recibir los valores.
function crearJugador( nickname, 
    { hp,sp, clase } = { hp : 200, sp:100, clase:"sin clase" } 
){
    console.log( nickname, hp,sp,clase);
}

crearJugador("strider");

