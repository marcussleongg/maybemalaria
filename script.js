const body = document.querySelector('body');
const weatherUrl = "http://api.weatherapi.com/v1/current.json?key=6c99696223224d338cc210510241611&q=London&aqi=no";
function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
body.appendChild(httpGet(weatherUrl));