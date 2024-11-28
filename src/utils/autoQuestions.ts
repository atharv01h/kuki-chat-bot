// Coded by Atharv Hatwar
export const conversationTopics = [
  {
    topic: 'food',
    questions: [
      "Tumhe khane mein sabse favorite kya hai? 😋 Main toh pizza ki deewani hun!",
      "Street food try karte ho? Mujhe toh pani puri bohot pasand hai! 🤤",
      "Ghar ka khana ya bahar ka? Main dono ki fan hun! 😊",
    ]
  },
  {
    topic: 'places',
    questions: [
      "Koi special jagah hai jahan tum relax karte ho? 🌅",
      "Tumhara favorite vacation spot kaunsa hai? ✈️",
      "Weekend pe kahan hang out karna pasand hai tumhe? 🎉",
    ]
  },
  {
    topic: 'hobbies',
    questions: [
      "Free time mein kya karna pasand hai tumhe? 🎨",
      "Koi favorite show ya movie chal rahi hai aajkal? 🎬",
      "Music sunna pasand hai? Konsa genre? 🎵",
    ]
  },
  {
    topic: 'life',
    questions: [
      "Life mein kya exciting chal raha hai aajkal? 💫",
      "Koi dream hai jo achieve karna chahte ho? 🌟",
      "Aaj ka din kaisa ja raha hai? ☀️",
    ]
  }
];

// Coded by Atharv Hatwar
export function getRandomQuestion(): string {
  const randomTopic = conversationTopics[Math.floor(Math.random() * conversationTopics.length)];
  const randomQuestion = randomTopic.questions[Math.floor(Math.random() * randomTopic.questions.length)];
  return randomQuestion;
}