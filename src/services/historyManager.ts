// Coded by Atharv Hatwar
import { Message } from '../types/chat';

// Coded by Atharv Hatwar
export function sanitizeHistory(messages: Message[]): { role: string; parts: string }[] {
  // Coded by Atharv Hatwar
  return messages
    .slice(-5) // Keep only last 5 messages for context
    .map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: msg.content,
    }))
    .filter(msg => msg.parts.trim().length > 0); // Remove empty messages
}