/**
 * DESESTRUCTURACIÓN DE OBJETOS ANIDADOS
 */
let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea:7,
        columna:16
    },
    ultimoArchivo:{
        archivo:"index.html",
        cursor:{
            linea: 8,
            columna: 20
        }
    },
    otroNodo:{
        subNodo:{
            cursor:{
                linea:11,
                columna:60
            }
        }
    }
};

// Primer Nivel - Primer Nodo
const { cursor:activeCursor  } = autoGuardado;
console.log( activeCursor );

// Segundo Nivel - Segundo Nodo
const { ultimoArchivo:{ archivo:ultimoArchivo } } = autoGuardado;
console.log( ultimoArchivo );

// Tercer Nivel - Tercer Nodo
const { otroNodo:{ subNodo: { cursor:TercerNivelDelCursor }  } } = autoGuardado;
console.log( "Tercer Nivel - Tercer Nodo: ", TercerNivelDelCursor );

const tercerNodo = autoGuardado.otroNodo.subNodo.cursor;
console.log( 'Usando tradicional: ', tercerNodo );