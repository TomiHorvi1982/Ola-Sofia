export interface VocabularyItem {
  id: string;
  spanish: string;
  czech: string;
  pronunciation: string;
  category: string;
  exampleSpanish?: string;
  exampleCzech?: string;
  examplePronunciation?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  textColor: string;
}

export interface PlaceItem {
  id: string;
  name: string;
  description: string;
  emoji: string;
  location: string;
  distance: string;
  rating: number; // 1-5 stars
  funFact: string;
}

export interface QuizQuestion {
  id: string;
  type: 'pronunciation' | 'vocabulary';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
