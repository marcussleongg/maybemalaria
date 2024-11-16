const body = document.querySelector('body');
const weatherUrl = "http://api.weatherapi.com/v1/current.json?key=6c99696223224d338cc210510241611&q=9.005401,38.763611&aqi=no";
function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
}
const jsonStr = httpGet(weatherUrl);
const jsonObj = JSON.parse(jsonStr);
console.log(httpGet(weatherUrl));
const tempF = jsonObj.current.temp_f;
const tempC = jsonObj.current.temp_c;
const precipitationMm = jsonObj.current.precip_mm;
const precipitationIn = jsonObj.current.precip_in;
const humidity = jsonObj.current.humidity;
console.log('hi');
console.log(`temperature in farenheit is ${tempF}`);
console.log(`temperature in celcius is ${tempC}`);
console.log(`precipitation in mm is ${precipitationMm}`);
console.log(`precipitation in inches is ${precipitationIn}`);
console.log(`humidity percentage is ${humidity}`);