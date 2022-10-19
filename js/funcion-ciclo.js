


const miArray = [];

for(let i = 0; i<10; i++){
    // miArray.push( function(){ console.log( "dentro de la función y el index es: ", i ); } )

    // TA OP
    miArray.push(
        ( function(valor ){
            return function(){
                console.log( valor );
            }
        })(i)
     );
}

miArray.forEach( function(func){
    func();
} );
// console.log( miArray ); 