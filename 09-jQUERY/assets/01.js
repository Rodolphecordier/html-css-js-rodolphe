/*-----------------------------------------------------
            -LA DISPONIBILITEE DU DOM-
    
a partir du moment ou mon DOM c'est a dire 
l'arborescence de ma page est completement 
chargéé je peut commnecer a utiliser JQUERY

je vais mettre l'enssemble du code dans une fonction,
cette fonction sera appellée automatiquement par JQUERY
lorsque mon DOM sera entierement défini

3façons de faire :
-----------------------------------------------------*/
/* jquery(document).ready(function(){
    // -- ici le DOM EST ENTIEREMENT CHARGER, je peut proceder a mon code JS

})
*/


// --2 eme posibilitée
$(document).ready(function(){
    // -- ici le DOM EST ENTIEREMENT CHARGER, je peut proceder a mon code JS

})
$(function(){
   alert("j'ai 20 ans !"); 
})

// EN JS
document.getElementById('texteenjquery').innerHTML ="<strong>mon texte en JS </strong>" ;
// EN JQUERY LES SELECTEURS SONT LES MÊMES QU'EN CSS
$('#texteenjquery').html("mon texte en html");