/*---------------------
la concatenation  ☠️
------------------*/
var debutdephrase           = "aujord'hui";
var datedujour              = new Date();
var suitephrase             = ", sont présents :";
var nombredestagiaires      = 21;
var findephrase             = "stagiaires.<br>";

//-- nous souhaitons maintenant, grace a la concatenation,
// afficher tout ce petit monde en un seul morceau !
document.write(debutdephrase + datedujour.getDate() +"/"+(datedujour.getMonth()+1) + "/" + datedujour.getFullYear()+suitephrase + nombredestagiaires +findephrase);

/* : memo
https://stackoverflow.com/questions/15799514/why-does-javascript-getmonth-count-from-0-and-getdate-count-from-1
*/

/*----------------------------------
exercice :

créez une concatenation à partir des elements suivants :
-------------------------------------*/
var phrase1 = "je m'appelle";
var phrase2 = " rodolphe et j'ai "
var age     = 26;
var phrase3 = "ans <br>"

document.write(phrase1 + phrase2 + age +phrase3);