export type Job = {
  company: string
  role: string
  location: string
  start: string
  end: string
  highlights: string[]
}

// Most recent first.
export const experience: Job[] = [
  {
    company: 'TecEx',
    role: 'Intermediate Algorithms Engineer',
    location: 'Johannesburg, South Africa',
    start: 'Mar 2026',
    end: 'Aug 2026',
    highlights: [
      'Led end-to-end design of a production RAG system (Python, FastAPI) giving source-cited answers over enterprise documents.',
      'Built hybrid retrieval combining Qdrant vector search with a Neo4j knowledge graph, outperforming vector-only search on relational and analytical queries.',
      'Recommended and built self-hosted LLM serving (Ollama) for data privacy and cost; added SSE token streaming and cited prompting to curb hallucination.',
      'Designed the ingestion and query architecture: chunking, embeddings, entity extraction, and query routing.',
      'Built the React (Vite) client and containerized the full stack with Docker Compose.',
    ],
  },
  {
    company: 'TecEx',
    role: 'Algorithms Engineer',
    location: 'Johannesburg, South Africa',
    start: 'Mar 2025',
    end: 'Feb 2026',
    highlights: [
      'Architected and led backend development of a greenfield enterprise messaging platform, from data model to production.',
      'Built a low-latency real-time messaging backend (Flask, PostgreSQL, WebSockets) with group chats, inline documents, and file attachments.',
      'Chose an event-driven serverless design (AWS Lambda, EventBridge, SQS) over always-on services, including a pipeline that turns email replies into chat threads.',
      'Sped up API responses by redesigning PostgreSQL queries and indexes.',
      'Automated Salesforce user sync and set up the team’s testing and migration practices (Pytest, Alembic).',
    ],
  },
  {
    company: 'BBD Software (contracted to Standard Bank)',
    role: 'Software Engineer',
    location: 'Johannesburg, South Africa',
    start: 'Jan 2024',
    end: 'Feb 2025',
    highlights: [
      'Shipped 10+ APIs for the BOL+ transaction platform (Node.js, Python, AWS Lambda), speeding transactions by 30%.',
      'Reached 95% unit test coverage (Jest), cutting bugs by 20%.',
      'Provisioned AWS infrastructure as code with Terraform, cutting deployment time by 40%.',
      'Built React frontend features and GitHub Actions CI/CD pipelines, reducing manual deployments by 60%.',
    ],
  },
  {
    company: 'University of Pretoria',
    role: 'Research Assistant',
    location: 'Pretoria, South Africa',
    start: 'Mar 2023',
    end: 'Jun 2023',
    highlights: [
      'Built a dataset-difficulty estimation framework to guide neural network training.',
      'Researched incremental learning in deep neural networks, improving model accuracy by 5%.',
      'Evaluated how well CNNs generalise for disease prediction; published at IEEE CAI 2024.',
    ],
  },
  {
    company: 'Freude Gizmo',
    role: 'Full Stack Developer Intern',
    location: 'Fukuoka, Japan',
    start: 'Jan 2023',
    end: 'Feb 2023',
    highlights: [
      'Selected as 1 of 25 from 4,500 applicants (top 0.5%) for the METI Government of Japan internship.',
      'Migrated a PHP Laravel app to Next.js/React, improving performance by 30%.',
      'Ran white- and black-box testing that caught 10+ bugs before release; Dockerized the dev environment.',
      'Prototyped an in-house DBMS focused on consistency and retrieval efficiency.',
      'Worked across a language barrier with a Japanese team using documentation and visual communication.',
    ],
  },
  {
    company: 'University of Pretoria',
    role: 'Teaching Assistant',
    location: 'Pretoria, South Africa',
    start: 'Mar 2021',
    end: 'Jun 2023',
    highlights: [
      'Tutored 200+ students in Data Structures & Algorithms (Java), C++, and Compilers; set and graded assignments.',
    ],
  },
]
