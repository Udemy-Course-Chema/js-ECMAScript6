let persona = {}
persona["!nombre-persona"] = "Maria";
console.log( persona );


let persona2 = {
    [getPropiedad()]:"Fernanda"
};

function getPropiedad(){
    return "nombre"
}

console.log( persona2[ getPropiedad() ] );