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
// campo numero pc
const campoNumeroPc = document.getElementById("numero-pc");


// GENERAZIONE NUMERI
// genero un numero random per il pc
let numeroRandomPc = Math.floor((Math.random() * 20) + 1);
// genero un numero random per il pc per l'utente
let numeroRandomUtente = Math.floor((Math.random() * 20) + 1);



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

        // stampo in console per verifica
        console.log("hai cliccato");


        // riferimento dom per img del dado
        const immagineDado = document.querySelector("img");
        // aggiungo all'img la classe rotazione per far ruotare il "dado" ad ogni tiro
        immagineDado.className = "rotazione";

        // cambio la scritta per suggerire all'utente come ricaricare la pagina per giocare di nuovo
        reload.innerHTML = `Clicca qui <strong>per un altro round<strong>`;


        // STAMPO NUMERI IN PAGINA
        // numero pc
        campoNumeroPc.innerText = `${numeroRandomPc}`
        // numero utente
        campoNumeroUtente.innerText = `${numeroRandomUtente}`

        

        // CONDIZIONI

        // l'utente ha fatto 1
        if (numeroRandomUtente === 1){

            // definisco testo da stampare in pagina
            esitoTrio.innerHTML = "FALLIMENTO"
            tiroCritico.innerHTML = "CRITICO"

            // coloro scritte e numero di rosso
            esitoTrio.style.color = "red";
            tiroCritico.style.color = "red";
            campoNumeroUtente.style.color = "red";

        // l'utente ha fatto 20
        }else if (numeroRandomUtente === 20){

            // definisco testo da stampare in pagina
            esitoTrio.innerText = "SUCCESSO"
            tiroCritico.innerText = "CRITICO"

        // l'utente ha da fatto un numero più alto del pc
        }else if(numeroRandomUtente > numeroRandomPc){

            // definisco testo da stampare in pagina
            esitoTrio.innerText = "SUCCESSO"

        // l'utente ha fatto un numero più basso del pc
        }else{
            // definisco testo da stampare in pagina
            esitoTrio.innerHTML = "FALLIMENTO"

            // coloro scritta e numero di rosso
            esitoTrio.style.color = "red";
            campoNumeroUtente.style.color = "red";
        }

    }

)

// attivo la transizione per modificare l'opacità dei campi selezionati
function fadeIn(){
    campoNumeroUtente.style.opacity = '1';
    esitoTrio.style.opacity = '1';
    tiroCritico.style.opacity = '1';
    campoNumeroPc.style.opacity = '1';
    
}
