// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// riferimenti documento
const bottone = document.getElementById("invio");
const campoScrittaIndirizzo = document.querySelector("input");


// array
const indirizziEmail = ["ginopippo@gmail.com", "giacomello@alice.it", "artemisia@gmail.com", "benedetta.arpino@gmail.com"]



// evento al click del bottone
bottone.addEventListener('click',

    function(){

        // creo una variabile che contiene quello che digita l'utente
        let emailUtene = campoScrittaIndirizzo.value;
        console.log(emailUtene);

        // creo un ciclo che controlli cosa c'è scritto nell'arrey
        for (let i = 0; i <indirizziEmail.length; i++) {

        const contenutoArray = i

         // stampo in console il contenuto dell'arrey
        console.log(indirizziEmail[contenutoArray]);


            if (contenutoArray !== emailUtene){
            
            let messaggio = "Non puoi accedere alla lista"

            document.getElementById("messaggio").innerHTML = `${messaggio}`;

            }

        }
    }
);

