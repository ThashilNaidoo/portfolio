export type Link = {
  label: string
  href: string
}

export type Profile = {
  name: string
  role: string
  tagline: string
  about: string
  email: string
  links: Link[]
}

export const profile: Profile = {
  name: 'Thashil Naidoo',
  role: 'AI/ML Software Engineer · M.Sc. Visual Computing @ SFU',
  tagline:
    'I build AI tools by day, write path tracers by night, and lose to Souls-like bosses in between.',
  about:
    'AI/ML software engineer and M.Sc. Computer Science student at Simon Fraser University in Burnaby, BC, specialising in visual computing (graphics and computer vision). Previously I built RAG systems and real-time messaging backends at TecEx, and transaction APIs for Standard Bank.',
  email: 'thashil.naidoo@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/thashilnaidoo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thashilnaidoo' },
  ],
}
