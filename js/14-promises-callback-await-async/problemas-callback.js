/**
 * PROBLEMAS CON LOS CALLBACKS
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

const getEmpleado = ( id, callback ) => {
    const empleadoDB = empleados.find( empleado => empleado.id === id );
    if( !empleadoDB ){
        callback('No existe el empleado');
    } else {
        callback( null, empleadoDB );
    }
};

const getSalarios = (empleado, callback) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id );
    if( !salarioDB ){
        callback('No existe el salario');
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.precio,
        });
    }
}
getEmpleado(1, ( err, empleado ) => {
    if ( err ) console.log( err );
    getSalarios( empleado, ( err, response ) => {
        console.log( 'El empleado: ', response );
    } );
} );


// getSalarios( 1, ( err, msg) => console.log( msg  ) );




