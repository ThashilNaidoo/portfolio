export type Degree = {
  school: string
  degree: string
  detail?: string
  location: string
  start?: string
  end: string
}

// Most recent first.
export const education: Degree[] = [
  {
    school: 'Simon Fraser University',
    degree: 'M.Sc. Computer Science, Visual Computing',
    detail: 'Graphics & Computer Vision',
    location: 'Burnaby, BC, Canada',
    start: 'Sep 2026',
    end: 'Expected Aug 2028',
  },
  {
    school: 'University of Pretoria',
    degree: 'B.Sc. Honours in Computer Science',
    detail: 'Cum Laude · GPA 84.25%',
    location: 'Pretoria, South Africa',
    end: '2024',
  },
  {
    school: 'University of Pretoria',
    degree: 'B.Sc. in Computer Science',
    detail: 'Cum Laude · GPA 86.81%',
    location: 'Pretoria, South Africa',
    end: '2023',
  },
]
