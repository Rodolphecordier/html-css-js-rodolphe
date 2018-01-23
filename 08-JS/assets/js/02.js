//-- déclarer un tableau numérique
var montableau= [];
var myarray = new Array;

//--  affecter des valeurs a un tableau numérique

montableau[0]= "hugo";
montableau[1]= "nathan";
montableau[2]= "lou";

//--  afficher le contenue du tableau dans ma console

console.log(montableau[0]); //--hugo
console.log(montableau[1]); //--nathan
console.log(montableau[2]); //-- lou
console.log(montableau);   //-- affiche toutes les données

//-- déclarer et affecter des valeurs a un tableau numérique

var nosprenoms = ["emilie","hocine","terry","benjamin","hugo"];
console.log(nosprenoms);
console.log(typeof nosprenoms);

// -- déclarer et affecter des valeurs à un objet
// --pas de tableau associatif en JS
var coordonnee ={
    prenom : "hugo",
    nom : "liegeard",
    age : "27"
} ;
console.log(coordonnee);
console.log(typeof coordonnee);

// -- je vais créer 2 tableaux numeriques
var listedeprenoms = ["hugo","rodrigue","benjamin"];
var listedenoms    = ["liegeard","nouel","jourand"];
/* je vais créer un tableau à 2 dimensions à partir de mes 
2 tableaux précedents.*/

var annuaire=  [listedeprenoms,listedenoms];
console.log(annuaire);

// -- afficher noms et prenoms de rodrigue

document.write(annuaire [0][1]);
document.write(annuaire [1][1]);



/*-------------------------------------------
 |           EXERCICE😍😜                    |
 |  ~   ~  ~ ~   ~   ~  ~ ~    ~   ~          |
 |créez un tableau à 2 dimensions appelé      |
 |"annuairedesstagiaires" qui contiendra      |
 |toutes les coordonées de chaque stagiaire   |
 |ex : nom prénom tel                         |


 var listenoms      = ["dacosta","bosson","bance","cordier"];
 var listeprenoms   = ["théo","gauthier", "florent","rodolphe"];
 var numerotel      =["0600000001","0600000002","0600000003","0600000004"];

 var annuairedesstagiaires= [listenoms,listeprenoms,numerotel];
 console.log(annuairedesstagiaires);

 document.write(annuairedesstagiaires [0][0]);
 document.write(annuairedesstagiaires [1][0]);
 document.write(annuairedesstagiaires [2][0]);
 
 document.write(annuairedesstagiaires [0][1]);
 document.write(annuairedesstagiaires [1][1]);
 document.write(annuairedesstagiaires [2][1]);
 
 document.write(annuairedesstagiaires [0][2]);
 document.write(annuairedesstagiaires [1][2]);
 document.write(annuairedesstagiaires [2][2]);

document.write(annuairedesstagiaires [0][3]);
 document.write(annuairedesstagiaires [1][3]);
 document.write(annuairedesstagiaires [2][3]);
  --------------------------------------------*/
//  -- correction : 🙊 

var annuairedesstagiaires = [
    {nom:"dacosta", prenom:"théo", numero:"0600000001"},
    {nom:"bosson", prenom:"gauthier", numero:"0600000002"},
    {nom:"bance", prenom:"florent", numero:"0600000003"},
    {nom:"cordier", prenom:"rodolphe", numero:"0600000004"}
];

console.log(annuairedesstagiaires);
console.log(annuairedesstagiaires[0]['prenom']);
console.log(annuairedesstagiaires[1].prenom);
console.log(annuairedesstagiaires[2].prenom);

/*-------------------------------------------
 |     😁     AUJOTEZ UN ELEMENTS    😁    |
 --------------------------------------------*/

var couleurs = ["rouge","jaune","vert"];

/* -- si je souhaite ajouter un element dans mon tableau
je fait appel a la fonction push() qui me renvoi le
nombre d'elements dans mon tableau*/ 

console.log(couleurs);
var nombreelementsdemontableau = couleurs.push("orange");
console.log(couleurs);
console.log(nombreelementsdemontableau);
//  NB -- UNSHIFT permet d'ajouter un ou plusieurs element en debut de tableau

/*--------------------------------------------------------
 |     😁RECUPERER ET SORTIR LE DERNIER ELEMENT    😁    |
 --------------------------------------------------------*/

// -- la fonction pop() me permet de supprimer le dernier element de mon tableau et de recuperer la valeur

var mondernierelement = couleurs.pop();
console.log(mondernierelement);
console.log(couleurs);

// la meme chose est possible avec le 1er element... en utilisant shift()

// la fonction splice() vous permet de faire sortir un ou plusieur elements du tableau.
