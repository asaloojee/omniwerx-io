export const surveyQuestions = [
  {
    id: 'q1',
    question: 'How many online coaching clients are you currently managing?',
    type: 'radio' as const,
    options: [
      '1-10',
      '11-25',
      '26-40',
      '41-60',
      '60+'
    ]
  },
  {
    id: 'q2',
    question: 'What is the single biggest time sink in your coaching workflow each week?',
    type: 'radio' as const,
    options: [
      'Creating/updating programs',
      'Reviewing client videos and providing feedback',
      'Managing client communication and check-ins',
      'Tracking payments and billing issues',
      'Staying organized across different platforms/tools',
      'Onboarding new clients',
      'Other'
    ],
    hasOther: true
  },
  {
    id: 'q3',
    question: 'Which tools/platforms do you currently pay for to run your coaching business? (Select all that apply)',
    type: 'checkbox' as const,
    options: [
      'Payment processor (Stripe, PayPal, Square, etc.)',
      'Video messaging (Loom, etc.)',
      'Cloud storage (Google Drive, Dropbox, etc.)',
      'Programming software (Trainerize, Kahunas, etc.)',
      'Communication (WhatsApp Business, Telegram Premium, etc.)',
      'Other',
      'None - I use all free tools'
    ],
    hasOther: true
  },
  {
    id: 'q4',
    question: 'If you could only fix ONE frustration about how you currently deliver coaching to clients, what would it be?',
    type: 'radio' as const,
    options: [
      'Clients lose track of program updates or video feedback',
      'Too much time switching between different apps',
      'Hard to remember individual client contexts and issues',
      'Payment/billing requires too much manual work',
      'Difficult to scale beyond my current roster size',
      'Other'
    ],
    hasOther: true
  }
];

export type SurveyQuestion = (typeof surveyQuestions)[number];
