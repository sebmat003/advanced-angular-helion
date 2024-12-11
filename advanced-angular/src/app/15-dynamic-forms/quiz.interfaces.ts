export interface Quiz {
  title: string;
  questions: Question[];
}

export interface Question {
  value: string;
  answers: string[];
  rightAnswers: number[];
}
