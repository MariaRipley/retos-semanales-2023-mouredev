"use strict";

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
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "&", "/", "(", ")", "?", "*"];

//Función que generará la contraseña
function createRandomPassword(
  passwordLength,
  getUppercase,
  getLowercase,
  getNumber,
  getSymbol
) {
  if (passwordLength >= 8 && passwordLength <= 16) {
    //Ir añadiendo tipos de caracter según los parámetros dados
    //.join() para que convierta el array en string
    if (getUppercase) {
      permitedCharacters += uppercase.join("");
    }

    if (getLowercase) {
      permitedCharacters += lowercase.join("");
    }

    if (getNumber) {
      permitedCharacters += numbers.join("");
    }

    if (getSymbol) {
      permitedCharacters += symbols.join("");
    }

    //Bucle para generar contraseña
    for (let i = 1; i <= passwordLength; i++) {
      //Generar índice aleatorio para ir seleccionando caracteres
      let randomIndex = Math.floor(Math.random() * permitedCharacters.length);

      let randomCharacter = permitedCharacters[randomIndex];
      password += randomCharacter;
    }
  } else {
    console.log(
      "El número de caracteres de la contraseña debe estar entre 8 y 16"
    );
  }

  return password;
}

console.log(createRandomPassword(9, true, true, true, true));
