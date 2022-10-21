// Plantillas LIterales
// O conocidos como Templates

function desdeLaFuncion () {
    return 'Jose'
}

const name = "John";
const surname = "Myers";

const complete =  `<p class=" mi-clase ">El nombre es ${ name } ${ surname }</p> `;


// Se puede hacer en la función si el return es string
const nameInFunction = ` His name is ${ desdeLaFuncion() }`;

// Dentro del ${} puedeas hacer JavaScript Puro
const miString = `${ "2".repeat(2) }`;
console.log( complete );
console.log( nameInFunction );
console.log( miString );

const esMultiLinea = `
    <h1>Mi mundo</h1>
    <p>Y esta es otra linea</p>
`;

console.log();
console.log( esMultiLinea );