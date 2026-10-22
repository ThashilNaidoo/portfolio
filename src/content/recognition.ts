export type Recognition = {
  kind: 'Publication' | 'Certification' | 'Award'
  title: string
  detail?: string
  year: string
  href?: string
}

export const recognition: Recognition[] = [
  {
    kind: 'Publication',
    title: 'Generalisability of Convolutional Neural Networks for Disease Prediction',
    detail: 'IEEE CAI 2024',
    year: '2024',
    href: 'https://ieeexplore.ieee.org/abstract/document/10605338',
  },
  {
    kind: 'Certification',
    title: 'Self-Driving Cars Specialization',
    detail: 'University of Toronto',
    year: '2025',
    href: 'https://www.coursera.org/account/accomplishments/specialization/T6CYWMWJX3RN',
  },
  {
    kind: 'Certification',
    title: 'AWS Certified Solutions Architect – Associate',
    detail: 'Amazon Web Services',
    year: '2024',
    href: 'https://www.credly.com/badges/797af1a3-2185-4f0d-b82d-cefd5d60a0c8/linked_in_profile',
  },
  {
    kind: 'Certification',
    title: 'AWS Certified Developer – Associate',
    detail: 'Amazon Web Services',
    year: '2024',
    href: 'https://www.credly.com/badges/4a533ff0-0fd7-455e-8ad8-cb31bc406217/linked_in_profile',
  },
  {
    kind: 'Award',
    title: 'Top Computer Science student at the University of Pretoria',
    detail: '3 years running',
    year: '2021–2023',
  },
  {
    kind: 'Award',
    title: 'Dean’s List',
    detail: 'Every year of study',
    year: '2020–2024',
  },
  {
    kind: 'Award',
    title: 'VC Merit Award',
    detail: 'University of Pretoria',
    year: '2020',
  },
]
