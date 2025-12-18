
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client using the required named parameter and process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIPoweredRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User asks for movie recommendation: "${userPrompt}". 
      Respond with a list of 3 movie names and a one-sentence hook for each. 
      Format as JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              reason: { type: Type.STRING }
            },
            required: ["title", "reason"]
          }
        }
      }
    });

    // Access the text property directly on GenerateContentResponse
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("AI Recommendation failed:", error);
    return [];
  }
};

export const getMovieSearchEnhanced = async (query: string) => {
    try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `The user is searching for "${query}" on a premium movie streaming site. 
          Provide 5 related cinematic genres or themes as a comma-separated list.`,
        });
        // Access the text property directly on GenerateContentResponse
        return (response.text || '').split(',').map(s => s.trim());
    } catch (error) {
        return [];
    }
}