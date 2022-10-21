

// Usando valores "raw"(crudos) en templates literales

let mensaje1 = `Hola\n¿Cómo estás?\\`;

let mensaje2 = String.raw`Hola\n¿Cómo estás?\\`

// String.raw sólo sirve el ` y no sirve las comillas simples ni dobles. 

console.log( mensaje1 );
console.log( mensaje2 );