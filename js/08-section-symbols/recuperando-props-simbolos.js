/**
 * RECUPERANDO LAS PROPIEDADES DE LOS SÍMBOLOS
 */
let id = Symbol.for("id");
let activo = Symbol.for("activo");
let persona = {
    [id]: "1231",
    [activo]:true ,
    ["codigo"]:"XY1235646",
    name: "John",
    surname: "Connor",
    age: 40
};
for ( key in persona ){
    console.log( key, persona[key]);
}
console.log( Object.keys(persona) );

let losSimbolos = Object.getOwnPropertySymbols(persona);
console.log( losSimbolos );

for( i in losSimbolos ){
    console.log( losSimbolos[i], 'y usando keyFor: ', Symbol.keyFor( losSimbolos[i] ) );
}

console.log();
let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");
console.log( simbolo1 === simbolo2 );