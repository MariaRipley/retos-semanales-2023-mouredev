'use strict';

/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

//String vacío para contraseña
let password = "";
//String vacío para los caracteres permitidos según los parámetros seleccionados
let permitedCharacters = "";
//Arrays con las opciones para crear la contraseña
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "&", "/", "(", ")", "?", "*"];

function createRandomPassword(passwordLength, getUppercase, getLowercase, getNumber, getSymbol) {
    
    if(getUppercase){
        permitedCharacters += uppercase;
    }

    if(getLowercase){
        permitedCharacters += lowercase;
    }

    if(getNumber){
        permitedCharacters += numbers;
    }
    
    if(getSymbol){
        permitedCharacters += symbols;
    }

    //Bucle para generar contraseña
    for(let i = 1; i <= passwordLength; i++) {
        //Generar índice aleatorio para ir seleccionando caracteres
        let randomIndex = Math.floor(Math.random() * permitedCharacters.length);
        
        let randomCharacter = permitedCharacters[randomIndex];
        password += randomCharacter;
    }
    return password;
};

console.log(createRandomPassword(10, true, true, true, true));



