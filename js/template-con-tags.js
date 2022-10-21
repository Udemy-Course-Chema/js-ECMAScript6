

function etiqueta( literales, ...substituto ){
    // console.log( arguments );

    let resultado = "";
    console.log( literales, substituto );

    for( let i = 0; i <= substituto.length; i++ ){
        resultado += literales[i];
        resultado += substituto[i];
    }

    // console.log( resultado );

    return resultado;
}

let precio = 5;
let producto = 'Lapiz';
const tags = etiqueta`El producto: ${ producto } cuesta ${ precio } pesos mexicanos `;

console.log( tags );