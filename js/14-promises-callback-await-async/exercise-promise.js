/**
 * EXERCISE WITH PROMISE, AWAIT,  & ASNYC
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

const getEmpleado = async( id ) => {
    const empleadoDB = empleados.find( empleado => empleado.id === id);
    if( !empleadoDB ) throw new Error(' No existe el empleado ' );
    return empleadoDB;
    // return new Promise( ( resolve, reject ) => {
    //     const empleadoDB = empleados.find( empleado => empleado.id === id );
    //     if( !empleadoDB ) reject( 'No existe el empleado' );
    //     resolve( empleadoDB );
    // } );
};

const getSalario = async( empleado ) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id );

    if( !salarioDB ) throw new Error( 'No tiene su salario' );
    return ({
        id: empleado.id,
        nombre: empleado.nombre,
        salario: salarioDB.precio
    });
    // return new Promise( ( resolve, reject) => {
    //     const salarioDB = salarios.find( salario => salario.id === id );
    //     if( !salarioDB ) reject( 'No tiene el salario');
    //     resolve( salarioDB );
    // });
}

const informacionDelEmpleado = async( id ) => {
    const empleado = await getEmpleado( id );
    const res = await getSalario( empleado );
    console.log( res )

    return `El empleado ${ empleado.nombre } y su salario es de ${ res.salario }`;
};

informacionDelEmpleado( 1 )
    .then( console.log )
    .catch( console.log );

