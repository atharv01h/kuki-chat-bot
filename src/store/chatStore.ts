// Coded by Atharv Hatwar
import { create } from 'zustand';
// Coded by Atharv Hatwar
import { Message, UserInfo } from '../types/chat';

// Coded by Atharv Hatwar
interface ChatState {
  messages: Message[];
  userInfo: UserInfo;
  conversationContext: string[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setUserInfo: (info: Partial<UserInfo>) => void;
  addContext: (context: string) => void;
}

// Coded by Atharv Hatwar
export const useChatStore = create<ChatState>((set) => ({
  // Coded by Atharv Hatwar
  messages: [],
  // Coded by Atharv Hatwar
  userInfo: {
    name: null,
    gender: null,
  },
  // Coded by Atharv Hatwar
  conversationContext: [],
  // Coded by Atharv Hatwar
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: crypto.randomUUID(),
          timestamp: new Date(),
        },
      ],
    })),
  // Coded by Atharv Hatwar
  setUserInfo: (info) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...info },
    })),
  // Coded by Atharv Hatwar
  addContext: (context) =>
    set((state) => ({
      conversationContext: [...state.conversationContext, context],
    })),
}));