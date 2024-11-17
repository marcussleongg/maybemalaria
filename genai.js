import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyBwVgYxHK8bfLIrOCbqQoVJuwHZHKJ10sM";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const tempText = document.querySelector('#tempText').textContent;
const precipText = document.querySelector('#precipText').textContent;
const humidityText = document.querySelector('#humidityText').textContent;
const altitudeText = document.querySelector('#altitudeText').textContent;

// Your AI prompt
const prompt = `What are preventive measures for malaria for at an area where ${tempText}, ${precipText}, ${humidityText}, ${altitudeText}`;
async function getContent() {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

getContent();