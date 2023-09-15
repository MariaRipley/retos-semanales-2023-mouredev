'use strict';

/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


//Iterar del 1 al 100 ambos inclusive
for (let i = 1; i <= 100; i++) {

    // console.log(i);

    /*Comprobar si es mútliplo de los dos a la vez tiene que ser lo primero, porque si no, el bucle se para*/
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0 ) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}



