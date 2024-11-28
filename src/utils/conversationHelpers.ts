// Coded by Atharv Hatwar
import { Message } from '../types/chat';

// Coded by Atharv Hatwar
export function extractEmotionalContext(messages: Message[]): string {
  // Coded by Atharv Hatwar
  const recentMessages = messages.slice(-5);
  // Coded by Atharv Hatwar
  const emotionalKeywords = {
    happy: ['happy', 'khush', 'excited', 'maza', 'fun'],
    sad: ['sad', 'dukhi', 'upset', 'problem', 'tension'],
    angry: ['angry', 'gussa', 'frustrated', 'annoyed'],
    worried: ['worried', 'tension', 'stress', 'anxiety', 'dar'],
  };

  // Coded by Atharv Hatwar
  let dominantEmotion = '';
  // Coded by Atharv Hatwar
  for (const message of recentMessages) {
    // Coded by Atharv Hatwar
    const content = message.content.toLowerCase();
    // Coded by Atharv Hatwar
    for (const [emotion, keywords] of Object.entries(emotionalKeywords)) {
      // Coded by Atharv Hatwar
      if (keywords.some(keyword => content.includes(keyword))) {
        dominantEmotion = emotion;
        break;
      }
    }
  }

  // Coded by Atharv Hatwar
  return dominantEmotion;
}

// Coded by Atharv Hatwar
export function shouldUseTeasingLanguage(name: string | null): boolean {
  if (!name) return false;
  const specialUsers = ['vaishnavi', 'disha', 'nishant', 'tanishka', 'sakshi', 'sanskriti', 'omkar', 'abhishek', 'shrijit', 'swarup'];
  return specialUsers.includes(name.toLowerCase());
}