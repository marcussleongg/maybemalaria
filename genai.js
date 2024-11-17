import { GoogleGenerativeAI } from "@google/generative-ai";
function genAi() {
    
    // Fetch your API_KEY
    const API_KEY = "AIzaSyBwVgYxHK8bfLIrOCbqQoVJuwHZHKJ10sM";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // You can now safely access DOM elements
    const tempText = document.querySelector('#tempText').textContent;
    console.log(tempText);

    // Your AI prompt
    const prompt = "What are preventive measures for malaria for pregnant women in high humidity areas";

    try {
        // Await the result from the generative AI model
        const result = model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    };
}

export default genAi;