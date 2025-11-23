import { GoogleGenAI, Type } from "@google/genai";
import { KeywordStrategyResult } from "../types";

export const generateKeywordStrategy = async (
  businessNiche: string,
  targetAudience: string
): Promise<KeywordStrategyResult | null> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a keyword strategy for a business in the "${businessNiche}" niche targeting "${targetAudience}". 
      Provide 3 distinct keyword clusters with high potential.`,
      config: {
        systemInstruction: "You are a world-class SEO Strategist. Your goal is to provide actionable, high-impact keyword clusters with clear search intent and content ideas.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            topic: { type: Type.STRING, description: "The main topic analyzed" },
            strategy: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  clusterName: { type: Type.STRING, description: "Name of the keyword cluster" },
                  searchIntent: { type: Type.STRING, description: "User intent (e.g., Informational, Transactional)" },
                  keywords: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING },
                    description: "List of 3-5 specific long-tail keywords"
                  },
                  contentIdea: { type: Type.STRING, description: "A title for a blog post or landing page targeting this cluster" }
                },
                required: ["clusterName", "searchIntent", "keywords", "contentIdea"]
              }
            }
          },
          required: ["topic", "strategy"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as KeywordStrategyResult;

  } catch (error) {
    console.error("Error generating keyword strategy:", error);
    return null;
  }
};
