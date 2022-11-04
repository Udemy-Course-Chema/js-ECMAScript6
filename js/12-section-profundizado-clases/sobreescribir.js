class Rectangulo{
    constructor(alto, largo){
        this.height = alto;
        this.weight = largo;
    }

    getArea(){
        return this.height * this.weight;
    }
}

class Cuadrado extends Rectangulo{
    constructor( alto ){
        super( alto, alto );
    }

    getArea(){
        // return "Cuadrado: " + (this.height * this.height);
        return super.getArea();
    }
}

let cua = new Cuadrado(63);
console.clear();
console.log( cua.height );
console.log( cua.getArea() );