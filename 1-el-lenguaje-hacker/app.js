'use strict';

/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */


//Objeto plantilla de leet
const leetMap = {
    'a': '4',
    'b': 'I3',
    'c': '[',
    'd': ')',
    'e': '3',
    'f': '|=',
    'g': '&',
    'h': '#',
    'i': '1',
    'j': ',_|',
    'k': '>|',
    'l': '1',
    'm': 'JVI',
    'n': '^/',
    'o': '0',
    'p': '|*',
    'q': '(_,)',
    'r': 'I2',
    's': '5',
    't': '7',
    'u': '(_)',
    'v': '\/',
    'w': 'VV',
    'x': '><',
    'y': 'j',
    'z': '2',
}

//Texto traducido, de momento vacío porque aún no hemos pasado parámetro
let leetText = "";

//Función a la que pasamos como parámetro text el texto que queramos traducir
function leetSpeak (text) {
    //Bucle para iterar por todas las letras del texto del parámetro
    for(let i = 0; i < text.length; i++) {
        //Para que ignore si son minúsculas o mayúsculas
        const character = text[i].toLowerCase();
        /*Condicional con método hasOwnProperty que compara cada carácter del texto que le damos a la función con las propiedades dentro de leetMap*/
        if (leetMap.hasOwnProperty(character)) {
            //Si hay match, se sustituyen los caracteres dados por los del objeto leetMap y se agregan a leetText
            leetText += leetMap[character];
            //Si no hay match, conservamos el texto original
        } else {
            leetText = text[i];
        }
    }

    return leetText;
}

console.log(leetSpeak('Hello, world'));
console.log(leetSpeak('Ñ'));