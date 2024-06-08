// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// prendo dal documento i riferimenti

// contenitore dado
const bottoneTiro = document.getElementById("dado");
// titolo esito round
const esitoTrio = document.getElementById("esito");
// titolo per valore critico
const tiroCritico = document.getElementById("critico");



// GENERAZIONE NUMERI

// genero un numero random per il pc per l'utente
let numeroRandomUtente = Math.floor((Math.random() * 20) + 1);

// genero un numero random per il pc
let numeroRandomPc = Math.floor((Math.random() * 20) + 1);
// lo stampo in pagina
document.getElementById("numero-pc").innerHTML = numeroRandomPc;




// EVENTO AL CLICK
bottoneTiro.addEventListener('click',

    function(){
        // stampo in console per verifica
        console.log("hai cliccato");

    }

)
