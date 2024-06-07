// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// array
const indirizziEmail = ["ginopippo@gmail.com", "giacomello@alice.it", "artemisia@gmail.com", "benedetta.arpino@gmail.com"]


// creo una variabile che contiene quello che digita l'utente
const emailUtene = document.querySelector("input");


// creo un ciclo che controlli cosa c'è scritto nell'arrey
for (let i = 0; i <indirizziEmail.length; i++) {

    // stampo in console il contenuto dell'arrey
    console.log(indirizziEmail[i]);

}