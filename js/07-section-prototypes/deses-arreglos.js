/**
 * Desestructuración de Arreglos
 */
const frutas = [ "banana", "fresas","papaya","limon" ];
const verduras = [ "brocoli", "lechuga", "zanahoria" ];

const [ fruta1, fruta2 ] = frutas;

console.log( fruta1 );
console.log( fruta2 );

const [ , quieroEste,  ] = verduras;
console.log( quieroEste );

let agregarFruta = "uvas";
[ agregarFruta ] = frutas;

console.log( );
console.log( agregarFruta );
console.log( frutas );
