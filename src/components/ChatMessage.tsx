// Coded by Atharv Hatwar
import React from 'react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
  showAvatar?: boolean;
}

export function ChatMessage({ message, showAvatar = true }: ChatMessageProps) {
  const isBot = message.sender === 'bot';

  return (
    <div 
      className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'} mb-2 animate-fadeIn`}
    >
      {isBot && showAvatar && (
        <img
          src="https://cdn.hero.page/pfp/b3ec7a97-9402-4c0c-9378-fc8b973d73b5-pastel-anime-girl-cute-aesthetic-anime-pfp-1.png"
          alt="Kuki"
          className="w-6 h-6 rounded-full mb-1 animate-scaleIn"
        />
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 transform transition-all duration-300 ease-out ${
          isBot
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-bl-none animate-slideInLeft'
            : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-none animate-slideInRight'
        }`}
      >
        <p className="text-sm md:text-base whitespace-pre-wrap break-words">{message.content}</p>
      </div>
    </div>
  );
}