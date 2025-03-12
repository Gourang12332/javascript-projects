import { GoogleGenerativeAI } from '@google/generative-ai';

     // Import the necessary class [10, 12]

var prompts  = document.querySelector('#inppro')


const genAI = new GoogleGenerativeAI("api key"); // Initialize with your API key [3, 10, 12]



const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Select the Gemini model you want to use [6, 8, 10]

async function generateText(prompt) {

    const result = await model.generateContent(prompt); [12, 13, 20]
     // result is an array of objects, among which one is response. and further response is also an object having a function text, resulting our final text after some processiog
    const response = await result.response;
    console.log(response.text()); // Access the generated text [12, 20]

}



// Example usage:

generateText(prompts); 
