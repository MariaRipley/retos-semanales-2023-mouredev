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

//Fibonacci: secuencia en la que cada número es la suma de los dos anteriores. Empieza por 01
function isFibonacciNumber (number) {
    //Números iniciales de la secuencia de Fibonacci (a = más reciente)
    let a = 0;
    let b = 1;
    //Bucle que calcula los números de Fibonacci hasta llegar a number o superarlo
    while (a < number) {
        //Variable para guardar el nuevo valor de a
        let newNumber = a;
        //a pasa a ser el penúltimo número dado en la secuencia
        a = b;
        //b se convierte en el siguiente número de la secuencia
        b = newNumber + b;
    }
    //Si el valor final de a es igual a number, es true (está en la secuencia Fibonacci)
    return a === number;
}

console.log(isFibonacciNumber(9));