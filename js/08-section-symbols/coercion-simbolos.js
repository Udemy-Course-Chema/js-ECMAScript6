/**
 * COERCIÓN DE LOS  SÍMBOLOS
 * 
 * Para entender el coerción, JS se puede hacer
 * de esta manera.
 * Por ejemplo, la suma:
 * 1 + "2"
 * El resultado es 12 (Se convirtió en String)
 * 
 * Y en los símbolos, es diferente
 */

let id = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;
let NotAN = NaN;

// console.log( "El símbolo es: " + id ); // No sirve
console.log( "El símbolo es: " + String(id) );
console.log( "El símbolo es: " + id.toString() );