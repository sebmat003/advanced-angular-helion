import { Quiz } from './quiz.interfaces';

export const QUIZ_DATA: Quiz[] = [
  {
    title: 'General Knowledge',
    questions: [
      {
        value: 'What is the capital of France?',
        answers: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        rightAnswers: [2],
      },
      {
        value: 'Which colors are in the French flag?',
        answers: ['Red', 'Blue', 'Green', 'White'],
        rightAnswers: [0, 1, 3],
      },
      {
        value: 'What is 2 + 2?',
        answers: ['3', '4', '5', '6'],
        rightAnswers: [1],
      },
    ],
  },
  {
    title: 'Tech Trivia',
    questions: [
      {
        value: 'Which of the following are programming languages?',
        answers: ['Python', 'HTML', 'JavaScript', 'CSS'],
        rightAnswers: [0, 2],
      },
      {
        value: 'Who is known as the father of computers?',
        answers: ['Alan Turing', 'Charles Babbage', 'Steve Jobs', 'Bill Gates'],
        rightAnswers: [1],
      },
      {
        value: "What does 'HTML' stand for?",
        answers: [
          'HyperText Markup Language',
          'Home Tool Markup Language',
          'Hyper Tool Machine Language',
          'HyperText Machine Language',
        ],
        rightAnswers: [0],
      },
      {
        value: 'Which company created the Java programming language?',
        answers: ['Microsoft', 'Sun Microsystems', 'Apple', 'IBM'],
        rightAnswers: [1],
      },
      {
        value: 'Which technologies are used for front-end development?',
        answers: ['HTML', 'CSS', 'JavaScript', 'C++'],
        rightAnswers: [0, 1, 2],
      },
    ],
  },
  {
    title: 'Science Quiz',
    questions: [
      {
        value: 'What planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        rightAnswers: [1],
      },
      {
        value: 'Which gas do plants absorb during photosynthesis?',
        answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        rightAnswers: [1],
      },
      {
        value: 'What is the chemical symbol for water?',
        answers: ['H2', 'O2', 'H2O', 'OH'],
        rightAnswers: [2],
      },
      {
        value: 'What are the states of matter?',
        answers: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        rightAnswers: [0, 1, 2, 3],
      },
      {
        value: 'What force keeps us grounded on Earth?',
        answers: ['Friction', 'Magnetism', 'Gravity', 'Electricity'],
        rightAnswers: [2],
      },
      {
        value: 'Which organ pumps blood throughout the human body?',
        answers: ['Lungs', 'Liver', 'Heart', 'Kidneys'],
        rightAnswers: [2],
      },
      {
        value: 'What is the boiling point of water in Celsius?',
        answers: ['0°C', '50°C', '100°C', '200°C'],
        rightAnswers: [2],
      },
      {
        value: 'What is the speed of light?',
        answers: [
          '300,000 km/s',
          '150,000 km/s',
          '1,000,000 km/s',
          '500,000 km/s',
        ],
        rightAnswers: [0],
      },
      {
        value: 'What is the center of an atom called?',
        answers: ['Electron', 'Nucleus', 'Proton', 'Neutron'],
        rightAnswers: [1],
      },
      {
        value: 'Which planet is the largest in the Solar System?',
        answers: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        rightAnswers: [2],
      },
    ],
  },
];
