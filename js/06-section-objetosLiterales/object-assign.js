/**
 * Object.assign()
 */

function mezclar( objReceptor, objDonador ){
    Object.keys( objDonador ).forEach( function(key){
        objReceptor[key] = objDonador[key];
    });

    return objReceptor;
};

let objReceptor = {};
let objDonador = {
    nombre : "mi-nombre.js",
    get archivo(){
        return 'mi Nombre';
    }
};
// console.log( objDonador.archivo );
// console.log( mezclar( objReceptor, objDonador ) );
// console.log( objDonador );

// NUevo ECS6
console.log( Object.assign( objReceptor, objDonador ) );