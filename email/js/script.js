// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// const bottone = document.getElementById("invio");
// const campoScrittaIndirizzo = document.querySelector("input");
// let messaggio = document.getElementById("messaggio");


// // array
// const indirizziEmail = ["ginopippo@gmail.com", "giacomello@alice.it", "artemisia@gmail.com", "benedetta.arpino@gmail.com"]



// // evento al click del bottone
// bottone.addEventListener('click',

//     function(){
//         console.log("hai cliccato");

// //          // creo una variabile che contiene quello che digita l'utente
//             let emailUtene = campoScrittaIndirizzo.value;
//             console.log(emailUtene);

//             let mailNellaLista = false;


//         for(let i = 0; i < indirizziEmail.length; i++){
//             if(indirizziEmail[i] === emailUtene){
//                 mailNellaLista = true;
//             }
//         }

//         if(mailNellaLista === false){
//             messaggio = "Non puoi accedere alla lista"
//         }else{
//             messaggio = "Puoi accedere alla lista"
//         }
//     }
// );

// RIFERIMENTI DOCUMENTO
const bottone = document.getElementById("invio");
const campoScrittaIndirizzo = document.querySelector("input");
let messaggio = document.getElementById("messaggio");

// ARRAY
const indirizziEmail = ["ginopippo@gmail.com", "giacomello@alice.it", "artemisia@gmail.com", "benedetta.arpino@gmail.com"];


// EVENTO AL CLICK DEL BOTTONE
bottone.addEventListener("click",

    function (){
        console.log("hai cliccato");

        // stringa digitata dall'utente
        let emailUtene = campoScrittaIndirizzo.value;
        console.log(emailUtene);

        // valore booleano impostato su falso in partenza
        let mailNellaLista = false;

        for(let i = 0; i < indirizziEmail.length; i++){
            console.log(indirizziEmail[i]);

            if(indirizziEmail[i] === emailUtene){
                mailNellaLista = true;
                console.log(mailNellaLista);
            }

            if(mailNellaLista === true){
                console.log("puoi accedere");
            }else{
                console.log("non puoi accedere");
            }
        }
    }
)
