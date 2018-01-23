/*----------------------------------------------------------------------------------------
                LES EVENEMENT

                les evenements vont me permettre de declencher une fonction : une serie 
                d'instructions suite a une action deb mon utilisateur.

                objectif : etre en mesure de capturer ces evenements,
                anfin d'executer une fonction

                les evenements : mouse (souris) :

                click = au click sur l'element
                mouseenter =la souris passe au de dessus de la zone occupée par l'element
                mouseleave = la souris quitte cette zone

                keyboard :
                keydown : l'orsque une touche est enfoncée
                keyup : l'orsque une touche est relachée

                Window (fenetre) : 

                scroll : defilement de la fenetre
                resize : redimensionnement

                FORM ( formulaire) :
                
                change :pour les elements <input>, <select> et <textrea>
                submit : a l'envoi d'un formulaire

                DOCUMENT :

                DOMContenteloaded : executer l'orsque le document html est completement charger,
                sans atteindre le css et les images.

                -------------------------------------------------------------*/

                /*---------------------------------------------
                        LES ECOUTEURS D'ELEMENTS

                        pour attacher un evenement a un element
                        ou autrement dit pour declarer un ecouteur 
                        d'evenement qui se chargera de lancer une action,
                        c'est une fonction pour un element donné, je vais utiliser la syntaxe suivante :

*/

var p = document.getElementById('MonParagraphe');
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris

    // -- 1 : Je défini une fonction chargée d'executer cette action
    function changeColorToRed() {
        p.style.color = "red";
    }

    // -- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction au déclenchement de l'évènement (click)
   /* p.addEventListener('click',changeColorToRed);*/
     

                
                

/*-------------------------------------------------------------
                        EXERCICE PRATIQUE

A l'aide de Javascript, créez un champ "input" type text avec un ID unique
Affichez ensuite dans une alerte, la saisie de l'utilisateur
--------------------------------------------------------------*/

var input = document.createElement("input");
input.setAttribute('type','text');
input.setAttribute('placeholder','saissez un contenu');
input.id  =  "moninput"; 
document.body.appendChild(input);
function saisie(){
alert(input.value);
}

input.addEventListener('change', saisie);