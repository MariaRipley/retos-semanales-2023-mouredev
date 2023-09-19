'use strict';

/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

//Primo: mayor que 1 y solo es divisible por él mismo y por 1
function isPrimeNumber (number) {
    if (number <= 1) {
        return false;
    };
    //Iterar desde 2 hasta la raiz cuadrada de number para ver si number es divisible por otro número de ese rango
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    };

    return true;
}

console.log(isPrimeNumber(11));