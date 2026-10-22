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

// Placeholder copy: replace with your own.
export const profile: Profile = {
  name: 'Thashil Naidoo',
  role: 'Software Engineer',
  tagline: 'I build thoughtful, well-crafted software for the web.',
  about:
    'A short paragraph about who you are, what you work on, and what you care about. Keep it to two or three sentences.',
  email: 'you@example.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  ],
}
