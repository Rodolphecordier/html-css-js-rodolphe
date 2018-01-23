/*------------------------------------
    la manipulation des contenus  🚸
-------------------------------------*/

function l(e){
    console.log(e);
}

// --recupere mon lien 

var google = document.getElementById('google');
l(google);
//  acceder aux  infos du lien

//  le lien vers lequel pointe la balise

l("le lien vers lequel pointe la balise : ");
l(google.href);

// 8-- l'ID de la balise
l("l'ID de la balise") ;
l(google.id);
// C la classe de la balise
l("la classe de la balise") ;
l(google.className);
// D le texte de la balise
l("le texte de la balise") ;
l(google.textContent);

// modifier le contenu du lien
// comme variable classique, je viens ajouter une nouvelle valeur
google.textContent = "mon lien vers google !";

/*----------------------------------
    ajouter un element a ma page
-----------------------------------*/

//  nous allons utiliser 2 méthodes


    // -- 1 : La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrais par la suite modifier avec les méthodes que nous venons de voir.

    // -- PS : Ce nouvel élément est placé en mémoire.

    
//  définition de l'élèment
var span = document.createElement('span');

//  lui donner un id

span.id ="monspan";

// lui attribuer du contenu

span.textContent = "mon beau texte en JS";
// la fonction appendchild() va permettre de rajouter un enfant a un element du DOM

google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

var h1 = document.createElement('h1');
var a =document.createElement('a');
a.textContent = 'titre de mon article';
a.href="http://www.materiel.net"
h1.appendChild(a);
document.body.appendChild(h1);
a.style.color ="red"; 
a.style.textDecoration = "none";
l(h1);