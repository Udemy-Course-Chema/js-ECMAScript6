/**
 * ACCESO al prototipo con la 
 * referencia SUPER
 */
let people = {
    salutate(){
        return "hello";
    }
};

// EN ECS5
let friend = {
    salutate(){
        return Object.getPrototypeOf( this ).salutate.call( this ) + ", Saludoooos!";
        // return Object.getPrototypeOf( this ).salutate( this ) + ", Saludoooos!";
    }
};

// ECS6
let friend2 = {
    salutate(){
        return super.salutate() + ", es el superpoder del Súper!!!";
    }
}

Object.setPrototypeOf( friend2, people );

console.log( friend2.salutate() );
