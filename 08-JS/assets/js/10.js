/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/


// -- Exemple de Tableau 3D
var PremierTrimestre = [
    {
        "nom"       :   "LIEGEARD",
        "prenom"    :   "Hugo",
        "moyenne"   :   {
                            "francais" : 4,
                            "math"     : 8,
                            "physique" : 18
                        }
    },
    {
        "nom"       :   "MANAS",
        "prenom"    :   "Tanguy",
        "moyenne"   :   {
                            "francais" : 6,
                            "math"     : 15,
                            "physique" : 9,
                            "anglais"  : 15.5
                        }
    },
    {
        "nom"       :   "ARAUJO",
        "prenom"    :   "Thiago",
        "moyenne"   :   {
                            "francais" : 10,
                            "math"     : 15,
                            "physique" : 16
                        }
    }
];
    
    console.log(PremierTrimestre);
    w('<ol>');
    for(let i = 0 ; i < PremierTrimestre.length ; i++) {
        let etudiant = PremierTrimestre[i];
        console.log(etudiant);
    
    l(etudiant);
    var nombredematieres = 0, sommedesnotes = 0;

    w('<li>');
    w(etudiant.prenom + " " + etudiant.nom);
    w('<ul>');
    for(let matière in etudiant.moyenne){
        l(matière);
        l(etudiant.moyenne[matière]);
        w(matière +" : " + etudiant.moyenne[matière]);
        nombredematieres++;
        sommedesnotes += etudiant.moyenne[matière];
      w('</li>')
   
    w('</ol>');
w('</ul>');
   w('<li>');
    w("<strong>moyenne génèrale : </strong>")+ (sommedesnotes / nombredematieres).toFixed(2);
    w('</li>');
    }}
  

    // -- petites fonctions raccourci (les flemards.js)  w('<li>')

    function w (t){
        document.write(t);

    }
    function l(e){
        console.log(e);
    }
    