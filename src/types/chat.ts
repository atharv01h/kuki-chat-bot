export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface UserInfo {
  name: string | null;
  gender: string | null;
}