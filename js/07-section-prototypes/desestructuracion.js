/**
 * Desestructuración de OBJETOS
 */
let ajustes = {
    nombre: 'John',
    surname: 'sergeant',
    profession: 'command',
    info:{
        info_name: "A mission",
        classification: "Top Secret"    
    }
};

/**
 * El { surname:apellidos } significa sustituir el nombre de la 
 * variable.
*/
const { nombre, info, surname:apellidos, number = 1.501, twitter:cuentaTwitter = '@sergeant' } = ajustes;

console.log( nombre );
console.log( info );
console.log( apellidos );
console.log( number );
console.log( cuentaTwitter );

// const otroAjuste = JSON.stringify( ajustes );
// console.log( otroAjuste );


