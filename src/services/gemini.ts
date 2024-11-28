// Coded by Atharv Hatwar
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Message } from '../types/chat';
import { createSystemPrompt } from './promptBuilder';
import { sanitizeHistory } from './historyManager';

// Coded by Atharv Hatwar
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
// Coded by Atharv Hatwar
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Coded by Atharv Hatwar
export async function generateResponse(
  prompt: string,
  userInfo: { name: string | null; gender: string | null }
): Promise<string> {
  try {
    // Coded by Atharv Hatwar
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.9,
        topP: 0.8,
        topK: 40,
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
      ],
    });

    // Coded by Atharv Hatwar
    const systemPrompt = createSystemPrompt(userInfo);
    // Coded by Atharv Hatwar
    const result = await chat.sendMessage(`${systemPrompt}\n\nUser: ${prompt}`);
    
    // Coded by Atharv Hatwar
    const response = result.response.text();
    if (!response) {
      throw new Error('Empty response from API');
    }

    return response;
  } catch (error) {
    console.error('Error generating response:', error);
    if (error instanceof Error && error.message.includes('Empty response')) {
      return "Oops! 😅 Mujhe samajh nahi aaya. Kya tum dobara se bata sakte ho? 💕";
    }
    return "Arey yaar! 😅 Kuch technical problem ho rahi hai. Thodi der baad baat karte hain, okay? 💖";
  }
}