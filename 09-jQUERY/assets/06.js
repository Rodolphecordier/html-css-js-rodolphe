/*-------------------------------------------------------
LES SELECTEURS D'ENFANTS
------------------------------------------------------*/

//  initialisation JQUERY

$(function(){

    function l(e){

    }
    // selectioner toutes div
    l($('div'))

    //  selectionner mon menu
    l($('nav'))

    //  JE SOUHAiTE TOUT LES ELEMENTS  descendant direct (ENFANTS) du menu

    l($('nav').children())

    //  je souhaite parmi ces enfants, uniquement les elements "ul"
     l($('nav').children('ul'))
    //  je souhaite recuperer les "li" de "ul"
    l($('nav').children('ul').find('li'))

    //  je souhaite recuperer uniquement le 2 element des li
     l($('nav').children('ul').find('li').eq(1))
    //   connaitre le voisin imediat  du menu
    l($('nav').next())
    l($('nav').next().next()) /*voisin du voisin*/ 
    l($('nav').prev())
    // les parents
    l($('nav').parent())
})