/*-----------------------------------
            ~lE DOM~

    le dom est une interface de développement en JS
    pour HTML. grâce au DOM, je vais être en mesure
    d'acceder/ modifier mon HTML.

    l'objet document c'est le point d'entré vers mon contenu html

    chaque page chargée dans mon navigateur as un objet : "document"
-----------------------------------*/

//  comment faire pour récuperer les differentes informations de ma page html ?


/*------------------------------------------------
-----------document.getElementById--------------
________________________________________________
document.getElementById() cette fonction permet 
de recuperer un élement a partir de son identifiant 
unique : ID.
--------------------------------------------------*/

var bonjour = document.getElementById("bonjour");
console.log("bonjour");
/*-----------------------------------
-----------document.getElementByClassName--------------
________________________________________________
document.getElementById() cette fonction permet 
de recuperer un  ou plusieurs élement a partir de 
leur classe.
*/

var contenu= document.getElementsByClassName ('contenu');
console.log(contenu);

//  me renvoi un tableau JS avec mes élèments html ou autrement dit une collection html

/*-----------------------------------
-----------document.getElementByTagName--------------
________________________________________________
document.getElementById() cette fonction permet 
de recuperer un  ou plusieurs élement a partir de 
leur nom de balise.
*/
var span= document.getElementsByTagName('span');
console.log(span);