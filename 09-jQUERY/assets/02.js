/*--------------------------------------------------------
            les selecteurs JQUERY
---------------------------------------------------------*/

// -- format $('selecteur')
// --EN JQUERY, tout les selecteur CSS son disponibles

$(function(){
    // dom ready
    //  les flemars.js
    function l(e){
        console.log(e);
    }
    //  -- selectioner les balises span :
    // en JS
    l(document.getElementsByTagName('span'));

    //  EN JQUERY
    l($('span'));
    //  -- selectioner mon menu :
    // en JS
    l(document.getElementById('menu'));

    //  EN JQUERY
    l($('menu'));
    //  -- selectioner une classe :
    // en JS
    l(document.getElementsByClassName('MaClasse'));
    
        //  EN JQUERY
        l($('MaClasse'));
        // selectionner un attribut

        l($("[href='https://www.google.com']"));
});