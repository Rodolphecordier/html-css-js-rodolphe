/*----------------------------
       LES FONCTIONS 💩
----------------------------*/

// --déclarer une fonction 
//  cette fonction ne retourne aucune valeur 

function ditbonjour(){
    // lors de l'appel de cette fonction, les instructions seronts executées...
    alert("bonjour");
}

// je vais appeler ma fonction "ditbonjour" et déclencher ses instructions.

ditbonjour();

//  -- déclarer une fonction qui prend une variable en paramètre 
function bonjour(prenom, nom){
    document.write("<p>hello<strong>" +prenom+""+nom+" </strong> </p>");

}
//  appeler une fonction avec des parametres
bonjour("rodolphe","cordier");

var monprenom = "rodolphe";
var monnom    = "cordier";

bonjour(monprenom,monnom);

/*---------------------
EXERCICE :
creez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre
------------------------*/


function calcul(nb1,nb2){
    return nb1 + nb2;
}
document.write("<p> " + calcul(1, 2) +"<p>");
