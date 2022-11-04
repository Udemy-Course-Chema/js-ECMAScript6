/**
 * CLASES COMO PARAMETROS
 */
function creadorClases( defineClass ){
    return new defineClass;
}

let objeto = creadorClases( class{
    constructor(name = undefined ){
        this.name = name;
        this.edad = 30;
    }
    getName(){
        return this.name;
    }
});


console.log( objeto.getName() );

console.clear();

class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

    getArea(){
        return this.lado * this.lado;
    }
}
function imprimir( cuadrado ){
    if( !(cuadrado instanceof Cuadrado) ) return undefined;
    console.log( cuadrado.getArea() );
}

const miCuadrado = new Cuadrado(9);

imprimir( miCuadrado );

console.clear();
console.log( typeof Cuadrado );