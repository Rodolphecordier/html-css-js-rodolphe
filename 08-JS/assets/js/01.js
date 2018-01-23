alert("wow tu est sur ma page !");

// 2 slash pour faire un commentaire uniligne
/*
ici je peut faire un commentaire 
sur plusieurs lignes...
// raccourci : CTRL + /
CTRL +shift +/
*/


// -- déclarer une variable avec JS
var prenom;

//--2 affecter une valeur
prenom="rodolphe";

// --3 afficher la valeur d'une variable dans la console

console.log(prenom)

/*-------------------------
|~ LES TYPES DE VARIABLES~
--------------------------*/

//-- Ici type of me permet de connaitre le type de ma variable
console.log(typeof prenom);

//-- déclaration et affectation d'une valeur a une variable
var Age = 26;

// afficher dans la console
console.log(Age);

//-- verifier son type
console.log(typeof Age);

/*-------------------
~LA pPORTEE DES VARIABLES~
Les variables déclarées directement à la racine du fichier 
sont appelées variables "globales".

elles sont disponibles dans l'essemble du document y compris
les fonctions / boucles

la portée des variables globales s'arettent au fichier.
si je change de page, les variables n'éxistent plus.

les variables déclarées à l'intérieur d'une fonction 
sont appelées variables "locales"

elles sont disponibles à l'intérieur de celles ci.

----------------------------------------*/

// variables float
var unedecimale = -2.984;
console.log(unedecimale);
console.log(typeof unedecimale);

//-- les booléans (VRAI/FAUX)
var unboolean =false; // --true
console.log(unboolean);
console.log(typeof unboolean);

/*-------------------------------------
       ~LES CONTANTES~

       la déclaration CONST permet de créer une 
       constante accèssible uniquement en lecture.
       
       sa valeur ne pourra pas être modifiée
       par des réafectations ulterieures
       
       une contante ne peut pas être déclarée à nouveau.

       génèralement par convention les constantes sont 
       en MAJUSCULES 

-------------------------------------*/

const HOST =  "localhost";
const USER = "root";
const PASSWORD = "mysql";

// -- je ne peut pas faire cela...
//  USER= "hugo";
//  uncaught type error : assignement to constent variable.

/*--------------------------------------
        ~ LA MINUTE INFO~

au fur et a mesure que l'on affecte ou réaffecte 
des valeurs à une variable, celle-ci prend la 
nouvelle valeur et le nouveau type.

en javascript (ECMA SCRIPT), les variables sont auto typées.

pour convertir une variable de type NUMBER et STRING en NUMBER,
je peut utiliser les fonctions natives de javascript.
------------------------------------------*/

console.log("---");

var unnombre="24";
console.log(unnombre);
console.log(typeof unnombre);

/* la fonction parseInt() pour retourner a un ENTIER à partir
d'une chaine de caractère*/

unnombre = parseInt(unnombre);
console.log(unnombre);
console.log(typeof unnombre);

// je ré-affecte une valeur à ma variable

unnombre = "12.55";
console.log(unnombre);
console.log(typeof unnombre);


/* la fonction parsefloat permet de retourner un float 
a partir d'une chaine de caractère.*/ 
unnombre = parseFloat(unnombre);
console.log(unnombre);
console.log(typeof unnombre);

// -- conversion d'un nombre en string avec tostring()
var unnombrequidevientstring=10;
console.log(unnombrequidevientstring.toString());
console.log(unnombrequidevientstring);


