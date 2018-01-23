/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */
/*
//  prompt// 
var person = prompt("quel est ton prénom ?",);

if (person != null);

var age = prompt("bonjour," + person + "quel age as tu ?", ); 

if (age != null);

var annee = new Date()
var age2 = prompt("donc tu est né en ",annee.getFullYear()-age);

if (age2 != null);

console.log(new Date)
// recapitulatif
alert */




// correction

// 1-- initialisation des variables
var dateobj         = new Date();
var anneeactuelle   = dateobj.getFullYear();
// 2-- création de ma fonction
function hello() {
// 2a-- je demande le prénom
let prenom = prompt("hello ! what is your name ?","<saisir votre prénom>");
console.log(prenom);
console.log(typeof prenom);
// 2b-- son age
let age= parseInt(prompt("hello " + prenom +" ! how old are you ?","<saisir votre age>" ));
console.log(age);
console.log(typeof age); 
// 2c-- j'affiche une alerte avec son année de naissance
alert("amazing ! so you were born in" + (anneeactuelle-age) +" !");

// 2d-- affichage dans ma page html
document.write( "hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
}

// 3-- execution de ma fonction
hello();