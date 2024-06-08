// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// prendo dal documento i riferimenti

// contenitore dado
const bottoneTiro = document.getElementById("dado");
// titolo esito round
const esitoTrio = document.getElementById("esito");
// titolo per valore critico
const tiroCritico = document.getElementById("critico");
// campo numero utente
const campoNumeroUtente = document.getElementById("numero-utente");


// GENERAZIONE NUMERI

// genero un numero random per il pc per l'utente
let numeroRandomUtente = Math.floor((Math.random() * 20) + 1);

// genero un numero random per il pc
let numeroRandomPc = Math.floor((Math.random() * 20) + 1);
// lo stampo in pagina
document.getElementById("numero-pc").innerHTML = numeroRandomPc;



// EVENTO PER RICARICARE LA PAGINA AL CLICK
const reload = document.getElementById("clicca");

reload.addEventListener('click',
    function (){
        location.reload();
    }
)



// EVENTO AL CLICK
bottoneTiro.addEventListener('click',

    function(){

        // const immagineDado = document.querySelector("img");


        reload.innerHTML = `Clicca qui <strong>per ricaricare la pagina<strong>`;


        // stampo in console per verifica
        console.log("hai cliccato");


        // stampo in pagina il numero dell'utente
        campoNumeroUtente.innerText = `${numeroRandomUtente}`
        

        // CONDIZIONI

        // l'utente ha fatto 1
        if (numeroRandomUtente === 1){

            esitoTrio.innerHTML = "FALLIMENTO"
            tiroCritico.innerHTML = "CRITICO"

            esitoTrio.style.color = "red";
            tiroCritico.style.color = "red";

        // l'utente ha fatto 20
        }else if (numeroRandomUtente === 20){

            esitoTrio.innerText = "SUCCESSO"
            tiroCritico.innerText = "CRITICO"

        // l'utente ha da fatto un numero più alto del pc
        }else if(numeroRandomUtente > numeroRandomPc){

            esitoTrio.innerText = "SUCCESSO"

        // l'utente ha fatto un numero più basso del pc
        }else{
            esitoTrio.innerHTML = "FALLIMENTO"

            esitoTrio.style.color = "red";
        }
    }

)

