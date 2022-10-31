/**
 * USANDO PROMESAS
 */
 const empleados = [
    {
        id:1,
        nombre:"John"
    },{
        id:2,
        nombre:"Cortana"
    },
    {
        id:3,
        nombre:'Sergeant Johnson'
    }
];

const salarios = [
    {
        id:1,
        precio:418
    },{
        id:2,
        precio:1596
    }
];

const getEmpleado = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const empleadoDB = empleados.find( empleado => empleado.id === id );
        if( !empleadoDB ) reject( 'No existe empleado' );

        resolve( empleadoDB );
    } );
} 

const getSalarios = ( empleado ) => {
    return new Promise( ( resolve, reject ) => {
        const salarioDB = salarios.find( salario => salario.id === empleado.id );
        if( !salarioDB ) reject('No tiene su salario');

        resolve( {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.precio
        } );
    } );  
};

// Corto
getEmpleado( 1 )
    .then( getSalarios )
    .then( console.log )
    .catch( err => console.log( err ) );

// Largo
// getEmpleado( 1 ).
//     then( empleado => {
//         console.log( empleado );
//         return getSalarios( empleado );
//         // getSalarios( empleado )
//         //     .then( msg => console.log( msg ) )
//         //     .catch( err => console.log( err  ) );
//     } )
//     .then( msg => console.log( msg) )
//     .catch( err => console.log( err ) );



// console.log( 'Estoy en una variable', siGuardo );
// const miEmpleado = getEmpleado(1);
// console.log( miEmpleado );