

// New JavaScript, optional parameters! (EMACScript6)
function saludo( mensaje = "Hola 3" , tiempo = 1200 ){

    // OLD JAVASCRIPT
    // mensaje = mensaje || "Hello 2"};
    // mensaje = ( typeof mensaje !== "undefined" ) ? mensaje : null;

    setTimeout(function(){
        console.log( mensaje );
    }, tiempo);
}

let mensaje = 'Mi mensaje: hola';
saludo( );




function salutate( fn = function(){ console.log( 'Soy un función :O' ) }, persona = { "nombre":"John", "edad":25 } ){

    console.log( typeof fn );
    fn();

    console.log( persona );
    console.log( JSON.stringify( persona ) );// Convertido en JSON
    console.log( persona.nombre );
    // console.log( JSON.parse( persona ) ); // Traducir JSON a Object
    console.log( typeof persona );
}

function ninja(){
    console.log( 'soy un ninja ' ); 
}

// salutate( function(){ console.log( 'estamos en el parámetro' ) });
salutate( ninja );