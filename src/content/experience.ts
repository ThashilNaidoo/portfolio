export type Job = {
  company: string
  role: string
  start: string
  end: string
  highlights: string[]
}

// Placeholder entries, most recent first: replace with your own history.
export const experience: Job[] = [
  {
    company: 'Company A',
    role: 'Software Engineer',
    start: '2024',
    end: 'Present',
    highlights: [
      'An accomplishment with impact, ideally with a number attached.',
      'Something you owned end to end.',
    ],
  },
  {
    company: 'Company B',
    role: 'Junior Developer',
    start: '2022',
    end: '2024',
    highlights: ['What you built, shipped, or improved.'],
  },
]
