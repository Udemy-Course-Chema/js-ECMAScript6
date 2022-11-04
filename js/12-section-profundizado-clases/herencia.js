
class Rectangulo{
    constructor(alto, largo){
        this.alto  = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }
}

let rect = new Rectangulo(20, 30);

console.log( rect.getArea() );

class Cuadrado extends Rectangulo{
    constructor(alto){
        super(alto, alto );
    }
}

console.clear();
let miCua = new Cuadrado(9);
console.log( miCua.getArea() );
console.log( miCua.alto );
console.log( miCua.largo );
