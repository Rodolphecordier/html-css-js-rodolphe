<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exercice 7</title>
</head>
<body>
       
    <form id="MonFormulaire" method="post" action="connexion.php">
        <input type="text" name="email" placeholder="Email" /><br /><br />
        <input type="text" name="mdp" placeholder="Mot de Passe" /><br /><br />       
        <input type="submit" id="submit" value="Connexion" />
    </form>
    
    <!-- CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
        1. A l'aide d'une API de Géolocalisation, vous affichez dans un paragraphe du formulaire l'adresse IP ainsi que la Ville et/ou Code Postal de l'utilisateur connecté.
        
        // -- Utilisation de JSONP : geoip.nekudo.com || ip-api.com
     
    -->
   
    <!-- Intégration de jQuery -->
    <script
    src="https://code.jquery.com/jquery-3.1.1.min.js"
    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
    crossorigin="anonymous">
    {
    "status": "success",
    "country": "COUNTRY",
    "countryCode": "COUNTRY CODE",
    "region": "REGION CODE",
    "regionName": "REGION NAME",
    "city": "CITY",
    "zip": "ZIP CODE",
    "lat": LATITUDE,
    "lon": LONGITUDE,
    "timezone": "TIME ZONE",
    "isp": "ISP NAME",
    "org": "ORGANIZATION NAME",
    "as": "AS NUMBER / NAME",
    "query": "IP ADDRESS USED FOR QUERY"
}
    </script>
</body>
</html>