/*-------------------------------------
LE CHAINAGE DE METHODES AVEC JQUERY
--------------------------------------*/
$(function(){
    //  je souhaite cacher les div de la page
    // console.log($('div'));

    $('div').hide('slow',function(){
        // une fois que la methode hide() est terminée, mon alerte paut s'éxecutée
        alert('fin du hide');
        // NB : la fonction s'executera pour l'ensemble des elements du selecteur

        // CSS
        $('div').css('background', 'grey');
         $('div').css('color', 'orange');
        //   JE FAIS REAPARAITRE MES DIVs
        $('div').show('slow');
    }); // fin de fonction anonyme
    
    // en utilisant le chainage de methode, vous pouvez faire s'enchainer plusieurs fonction les unes après les autres....
    $('p').hide(1000).css('color','orange').css('font-size','20px').delay(2000).show(500);
    //  C'EST ENCORE TROP LONG !!!!!!!
    $('p').hide(1000).css({'color' : 'orange', 'font-size' : '20px'}).delay(2000).show(500);
});