import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyBwVgYxHK8bfLIrOCbqQoVJuwHZHKJ10sM";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const tempText = document.querySelector('#tempText').textContent;
const precipText = document.querySelector('#precipText').textContent;
const humidityText = document.querySelector('#humidityText').textContent;
const altitudeText = document.querySelector('#altitudeText').textContent;
var infantText = document.querySelector('#infantText');
if (infantText != null) {
    infantText = document.querySelector('#infantText').textContent;
}
var hivaidsText = document.querySelector('#hivaidsText');
if (hivaidsText != null) {
    hivaidsText = document.querySelector('#hivaidsText').textContent;
}
var pregnantText = document.querySelector('#pregnantText');
if (pregnantText != null) {
    pregnantText = document.querySelector('#pregnantText').textContent;
}
var travelingText = document.querySelector('#travelingText');
if (travelingText != null) {
    travelingText = document.querySelector('#travelingText').textContent;
}
var ageText = document.querySelector('#ageText');
if (ageText != null) {
    ageText = document.querySelector('#ageText').textContent;
}

// Your AI prompt
const prompt = `Without the precautionary text telling me to check with health advisories, what are preventive measures for malaria for at an area where ${tempText}, ${precipText}, ${humidityText}, ${altitudeText}, and if ${infantText}, ${hivaidsText}, ${pregnantText}, ${travelingText}, ${ageText}`;
async function getContent() {
    const result = await model.generateContent(prompt);
    const container = document.querySelector('.container');
    const suggestion = document.createElement('section');
    const suggestionText = document.createElement('p');
    suggestionText.textContent = result.response.text();
    container.appendChild(suggestion);
    suggestion.appendChild(suggestionText);
    //console.log(result.response.text());
}

getContent();