import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { useChatStore } from './store/chatStore';
import { generateResponse } from './services/gemini';
import { getRandomQuestion } from './utils/autoQuestions';

function App() {
  const { messages, userInfo, addMessage, setUserInfo } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const autoQuestionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetAutoQuestionTimer = () => {
    if (autoQuestionTimerRef.current) {
      clearTimeout(autoQuestionTimerRef.current);
    }
    
    if (userInfo.name && messages.length > 0) {
      autoQuestionTimerRef.current = setTimeout(async () => {
        const question = getRandomQuestion();
        const response = await generateResponse(question, userInfo);
        addMessage({ content: response, sender: 'bot' });
      }, 50000); // 50 seconds
    }
  };

  useEffect(() => {
    if (messages.length === 0) {
      addMessage({
        content: "Heyy! Main tumhari dost Kuki! 🤗 Pehle toh mujhe batao, tumhara naam kya hai aur tum male ho ya female?",
        sender: 'bot'
      });
    }
    scrollToBottom();
    resetAutoQuestionTimer();

    return () => {
      if (autoQuestionTimerRef.current) {
        clearTimeout(autoQuestionTimerRef.current);
      }
    };
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    addMessage({ content, sender: 'user' });
    resetAutoQuestionTimer();

    if (!userInfo.name || !userInfo.gender) {
      const nameParts = content.toLowerCase().split(' ');
      const possibleName = nameParts.find(word => word.length > 2) || nameParts[0];
      
      if (!userInfo.name && possibleName) {
        setUserInfo({ name: possibleName });
      }
      
      if (!userInfo.gender) {
        if (content.toLowerCase().includes('female') || content.toLowerCase().includes('girl') || content.toLowerCase().includes('ladki')) {
          setUserInfo({ gender: 'female' });
        } else if (content.toLowerCase().includes('male') || content.toLowerCase().includes('boy') || content.toLowerCase().includes('ladka')) {
          setUserInfo({ gender: 'male' });
        }
      }
    }

    const response = await generateResponse(content, userInfo);
    addMessage({ content: response, sender: 'bot' });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-lg z-10">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://cdn.hero.page/pfp/b3ec7a97-9402-4c0c-9378-fc8b973d73b5-pastel-anime-girl-cute-aesthetic-anime-pfp-1.png"
                alt="Kuki"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Kuki</h1>
              <p className="text-sm text-pink-100">Created with ❤️ by Atharv Hatwar</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <ChatMessage 
              key={message.id} 
              message={message}
              showAvatar={index === 0 || messages[index - 1]?.sender !== message.sender}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default App;