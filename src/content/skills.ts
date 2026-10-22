export type TagGroup = {
  label: string
  items: string[]
}

export const skills: TagGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'Go', 'SQL'],
  },
  {
    label: 'ML & AI',
    items: ['PyTorch', 'CUDA', 'LLMs', 'RAG', 'Prompt engineering', 'Ollama', 'Qdrant', 'Neo4j'],
  },
  {
    label: 'Graphics & Vision',
    items: ['3D reconstruction', 'Physics simulation', 'Path tracing', 'Unreal Engine 5', 'Blender'],
  },
  {
    label: 'Backend & Cloud',
    items: [
      'FastAPI',
      'Flask',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'AWS (Lambda, S3, RDS, DynamoDB, SQS)',
    ],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vite'],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'CI/CD',
      'Pytest',
      'Jest',
      'Linux',
      'Claude Code',
    ],
  },
]
