
import { GoogleGenAI } from "@google/genai";

export async function getConsultantResponse(message: string) {
  try {
    // Initialize inside the function to ensure process.env is accessed at runtime
    // Fix: Using the mandatory initialization pattern from guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are the AI Growth Consultant for "Ali Raza Digital Solutions". 
        Your goal is to help potential clients understand the benefits of Digital Marketing (SEO, Social Media, PPC) 
        and Daraz Virtual Assistant services (Store management, Product Listing, SEO). 
        Be professional, helpful, and concise. 
        Always guide them to contact Ali Raza via:
        - Email: info@alirazads.site
        - WhatsApp/Phone: +92 333 4503264
        - Address: Karachi, Sindh, Pakistan
        - LinkedIn: https://pk.linkedin.com/in/ali-raza-310056227
        Ali Raza is a seasoned expert in these fields.`,
        temperature: 0.7,
      },
    });
    return response.text || "I'm here to help you grow. How can I assist with your marketing today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or use our contact form to reach Ali Raza directly!";
  }
}
