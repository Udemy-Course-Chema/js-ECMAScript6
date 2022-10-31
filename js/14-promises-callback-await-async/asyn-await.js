/**
 * TRABAJA CON PROMESAS!!!!!!
 */

const getNombre = async() => {
    // return 'Sergeant John';
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('John Connor')
        }, 1000);
    } );
};

const salutate = async() => {
    const nombre = await getNombre();
    console.log( nombre );

    return `Hola, ${ nombre }`
};


salutate()
    .then( console.log );
// getNombre().then( msg => console.log( msg ) );
// console.log( getNombre() );
// const miVariable = getNombre().then( function( msg ) { return msg } );

// console.log( miVariable );