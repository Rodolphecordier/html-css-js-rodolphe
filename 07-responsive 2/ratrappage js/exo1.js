var PremierTrimestre = [
    {
        nom       :   "LIEGEARD",
        prenom    :   "Hugo",
        moyenne   :   {
                            francais : 4,
                            math     : 8,
                            physique : 18
                        }
    },
    {
        nom       :   "MANAS",
        prenom    :   "Tanguy",
        moyenne   :   {
                            francais : 6,
                            math     : 15,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "ARAUJO",
        prenom    :   "Thiago",
        moyenne   :   {
                            francais : 10,
                            math     : 15,
                            physique : 16
                        }
    }
];
document.write(PremierTrimestre[1].nom+"<br>")
var rodolphe = {"prenom":"rodolphe",
								"moyenne":{
								"math": "20"}}
 PremierTrimestre.push(rodolphe);
 console.log(PremierTrimestre);
 document.write(PremierTrimestre[3].prenom +"<br>");
 
 for(i=0; i< PremierTrimestre.length; i++){
  document.write(PremierTrimestre[i].prenom+"<br>");
   document.write(PremierTrimestre[i].moyenne.math+"<br>");
 }
 
 var total=0
 for(var i=0;i< PremierTrimestre.length; i++){
 total += PremierTrimestre[i].moyenne.math;
 }
 var moyenneg = total / PremierTrimestre;
 
 document.write(moyenneg);

 for(var i=0;i< PremierTrimestre.length; i++){
 }
 var moyenneGenerale = 0;
for(var i = 0; i < PremierTrimestre.length; i++){
	var moyenneEleve = 0;
	for(var elm in PremierTrimestre[i].moyenne){
		moyenneEleve += PremierTrimestre[i].moyenne[elm];
	}
	moyenneGenerale += moyenneEleve / Object.keys(PremierTrimestre[i].moyenne).length;
}
moyenneGenerale / PremierTrimestre.length;