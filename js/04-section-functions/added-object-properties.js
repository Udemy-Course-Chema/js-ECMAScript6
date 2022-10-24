

/**
 * AÑADIR PROPIEDADES A OBJECTOS 
 * A PARTIR DE OTROS OBJECTOS
 * 
 * APLICA PARA EL PATRÓN REDUX.
 * TRABAJA TAMBIÉN LAS CLASES Y FUNCIONES.
 */
let persona1 = {
    name: 'fernando',
    age:40
}

let persona2 = { 
    name: 'Juan',
    age:30,
    direction: 'Bella Vista, México',
    canDrive: true,
    haveCar: true,
    isVegetarian: false,
    isMarried: true
 };

 // HOW TO ADD PROPERTIES
//OPTION 1
// persona1.direction = persona2.direction;
// persona2.direction = 'Barrio el Bajo'

// OPTION 2, THE BEST OPTION
persona1 = {
    ...persona2,
    ...persona1
}



console.log( persona1 );
console.log( persona2 );