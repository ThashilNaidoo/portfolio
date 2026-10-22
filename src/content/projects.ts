export type Project = {
  title: string
  summary: string
  tech: string[]
  repo?: string
  live?: string
}

// Placeholder entries: replace with your own projects.
export const projects: Project[] = [
  {
    title: 'Project One',
    summary:
      'One or two sentences on what it does, the problem it solves, and your part in it.',
    tech: ['TypeScript', 'React', 'Node.js'],
    repo: 'https://github.com/your-handle/project-one',
    live: 'https://example.com',
  },
  {
    title: 'Project Two',
    summary:
      'Highlight something specific: a hard technical problem, a measurable result, or a design decision.',
    tech: ['Python', 'PostgreSQL'],
    repo: 'https://github.com/your-handle/project-two',
  },
  {
    title: 'Project Three',
    summary: 'Keep summaries short; the card links out for detail.',
    tech: ['Go', 'Docker'],
  },
]
