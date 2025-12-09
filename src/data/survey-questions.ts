export const surveyQuestions = [
  {
    id: 'q1',
    question: 'What is your favorite color?',
    type: 'textarea' as const,
  },
  {
    id: 'q2',
    question: 'What is your favorite food?',
    type: 'textarea' as const,
  },
  {
    id: 'q3',
    question: 'What is your favorite hobby?',
    type: 'textarea' as const,
  },
  {
    id: 'q4',
    question: 'What is your favorite movie?',
    type: 'textarea' as const,
  },
  {
    id: 'q5',
    question: 'What is your favorite book?',
    type: 'textarea' as const,
  },
];

export type SurveyQuestion = (typeof surveyQuestions)[number];
