/* ---------------------------------
           LES CONDITIONS 🙏
-----------------------------------*/

var MajoriteLegaleFR = 18;

if(26 >= MajoriteLegaleFR) {
    alert("Bienvenue !");
} else {
    alert("Google...");
}

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

// 1 -- Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// 2 -- Créer une fonction pour demander son age
function verifierAge() {
    // -- METHODE 1 :
    // let age = prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>");
    // age = parseInt(age);
    // return age;

    // -- METHODE 2 :
    return parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));
}

// 3 -- Une condition pour vérifier si l'age de l'utilisateur est supérieur à la MajoriteLegaleFR.
if(verifierAge() >= MajoriteLegaleFR) 
{
    // 3a. -- J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet pour les majeurs...");
}
else 
{
    // 3b. -- J'effectue une redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}

/*--------------------------------------------------

        ~ LES OPERATEURS DE COMPARAISON ~

l'operateur de comparaison "==" signifie 
égal a il signifie que 2 variables sont identiques

l'operateur de comparaison "===" signifie strictement
égal a. il va comparer la valeur et le type

l'operateur de comparaison "!=" signifie different

l'operateur de comparaison "!=="signifie strictement
 different
-------------------------------------------------*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3"; 


    // je demande le mail
var mail= prompt("Bonjour,saisier votre id ","<Saisissez votre mail>");



if(mail=== email ) 
{
    // Je demande le mdp
    var motdepasse= prompt("Bonjour,saisier votre MDP ","<Saisissez votre mdp>");
}
else 
{
    // J'affiche une erreur
      alert("erreur d'identifiants");

}

if(motdepasse===mdp){ 

alert("bienvenue !!!");}
else
{
    // J'affiche une erreur
      alert("erreur identifiants");

}


// -- EXEMPLE AVEC LES FONCTIONS

/**
 * Vérifie si mon utilisateur est présent en BDD
 */
function monUtilisateurEstCorrect(emailUser,mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    }
    else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel et votre email", "<Saisissez votre Email>");

var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre Mot de Passe>");

if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser);
} else {
    alert("ATTENTION, email/mot de passe incorrect");




/*--------------------------------------------------

        ~ LES OPERATEURS logiques ~

l'opreateur ET : && ou AND
si la combinaison emailuser et email ET la combinaison mdpuser et mdp correspondes
dans cette condition les 2 doivent OBLIGATOIREMENT CORRESPONDRES pour être validés

if(emailUser === email && mdpUser === mdp) {...}

l'ouperateur OU : || ou OR

if(emailUser === email || mdpUser === mdp) {...}

si la combinaison emailuser et email ou la combinaison mdpuser et mdp correspondes

 l'operateur "!" qui signifie contraire de... ou encore NOT

 var monutilisateurestapprouve = true;
 if (!monutilisateurestapprouve){...} // si l'utilisateur n'est pas approuvé
 
 reviens a ecrire
  if (monutilisateurestapprouve == false) {...}
----------------------------------------------------*/

