

let suma = (a,b) => a+b;
let resta = function(a,b){
    return a-b;
}

console.log( typeof suma );
// Aquí identificamos
console.log( suma instanceof Function );
// console.log( typeof resta );

// No retorna como objectos 
// Ni poseen argumentos 
 
// let sumar2 = new suma( 2, 5 ); // Suma is not constructor
let sumar2 = suma( 2, 5 );
console.log( sumar2 );

function ejemplo(){
    ( (a,b) =>{
        console.log( arguments );
    })()    
}
ejemplo(10,20);

// ERROR: "ARgument is not defined"
// ( (a,b) =>{
//     console.log( arguments );
// })()// Arguments is not defined. 