'use strict';

/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */

let pointsP1 = 0;
let pointsP2 = 0;
let state = "";
let winner = "";

const gameSequency = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];

function updateState() {
    if(pointsP1 === 40 && pointsP2 === 40) {
        state = "Deuce";
    } else if(pointsP1 > 40 && pointsP1 > pointsP2) {
        state = "Ventaja P1";
    } else if (pointsP2 > 40 && pointsP2 > pointsP1) {
        state = "Ventaja P2";
    } else {
        state = "";
    }
};

function updateWinner() {
    if (pointsP1 > 40 && pointsP1 > pointsP2 +10) {
        winner = "P1";
    } else if (pointsP2 > 40 && pointsP2 > pointsP1 +10) {
        winner = "P2";
    } else {
        winner = "";
    }
};

function playPoint (pointWinner) {
    if (pointWinner === "P1" && pointsP1 < 30) {
        pointsP1 += 15;
    } else if (pointWinner === "P2" && pointsP2 < 30){
        pointsP2 += 15;
    } else if (pointsP1 >= 30 && pointWinner === "P1"){
        pointsP1 += 10;
    } else if (pointsP2 >= 30 && pointWinner === "P2") {
        pointsP2 += 10;
    } 
    updateState();
    updateWinner();
};

gameSequency.forEach((point) => {
    // debugger;
    playPoint(point);
    
    if (winner) {
        console.log(`The winner is ${winner}`);
    } else if (state) {
        console.log(state);
    } else {
        if(pointsP1 === 0){
            console.log(`Love - ${pointsP2}`)
        } else if(pointsP2 === 0) {
            console.log(`${pointsP1} - Love`)
        } else {
            console.log(`${pointsP1} - ${pointsP2}`);}  
    }
})


