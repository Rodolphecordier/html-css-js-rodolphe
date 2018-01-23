// -- declarer un tableau

var tableau = ["hugo","rodolphe","romain","gauthier","yoann","theo","romain","lou","emilie"];

// affichage dans la console

console.log(tableau);
console.log(tableau.length);

// afficher un prenom

console.log(tableau[1]);
console.log(tableau[5]);
console.log(tableau[8]);

var i = 2;
console.log(tableau[i]);
for(i=0; i<tableau.length; i++);{ 
    console.log(tableau[i]+ i);
}

//  voyons comment proceder avec des objets

var contact = {
    //  INDICE  :valeur
    prenom :    "terry",
    nom    :    "bacon",
    tel    :    "0600000000"
}
console.log(contact);
console.log("prenom :" + contact.prenom);
console.log("nom : " + contact.nom);
console.log("tel :" + contact.tel);

// tableau etudiants

var etudiants = [
    {
        prenom :    "terry",
        nom    :    "bacon",
        classe :    "programmation" 
    },

    {
        prenom :    "rodolphe",
        nom    :    "cordier",
        classe :    "programmation" 
    },

    {
        prenom :    "gauthier",
        nom    :    "bosson",
        classe :    "petite section" 
    }
]
console.log(etudiants);
var nombreetudiants = etudiants.length ;
console.log("le nombre d'etudiants est:" + nombreetudiants);
document.write("<ul>");
for(i=0;i<nombreetudiants; i++){
    let etudiant= etudiants[i];
    document.write("<li>");
    document.write(etudiant.prenom + " " + etudiant.nom + " " + etudiant.classe )
    document.write("<li>");
}
document.write("</ul>");


