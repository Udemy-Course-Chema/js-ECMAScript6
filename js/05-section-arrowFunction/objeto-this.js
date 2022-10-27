/**
 * NO HAY CAMBIOS EN EL OBJETO "THIS"
 */

// old
let manejador = {
    id: 1,
    init: function(){
        // document.addEventListener("click", function( event ){
        //     // No está apuntando a la variable manejador, está apuntado globalemnte
        //     this.clickEnPagina( event.type );// this apunta a la variable manejador
        // }, false);
        document.addEventListener("click", (function( event ){
            this.clickEnPagina( event.type );
            console.log( this );
        }).bind(this), false );
    },//end init
    clickEnPagina: function( type ){
        console.log( "Estamos en la función clickEnPagina" );
        console.log( "Manejando: ", type, " para el id: ", this.id );
    }
};

//new 
let manejador2 = {
    id:2,
    init: function(){
        document.addEventListener("click", 
        event => this.clickEnPagina2( event.type ));
    },
    clickEnPagina2: function( type ){
        console.log("Manejando en: " + type + " para el id: " + this.id );
    }
}

// manejador.init();
manejador2.init();