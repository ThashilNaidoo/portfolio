export type Project = {
  title: string
  period: string
  summary: string
  tech: string[]
  repo?: string
  live?: string
  video?: string
}

export const projects: Project[] = [
  {
    title: 'Physical Digital Twins of Deformable Objects',
    period: 'Oct 2026 – Present',
    summary:
      'SFU research: building simulatable digital twins (shape + material) of deformable objects from a single RGB-D camera, for robotics and AR/VR. Combines 3D shape completion with physics-based simulation, benchmarked against baselines on real multi-view captures.',
    tech: ['PyTorch', 'CUDA'],
  },
  {
    title: 'Physically Based Path Tracer',
    period: 'Oct 2026 – Present',
    summary:
      'A path tracer written from scratch, with a depth-of-field camera, diffuse/metal/glass materials, OBJ meshes and area lights. Accelerated by a binned-SAH BVH (32-byte flattened nodes) and a tile-based thread pool, profiled with Tracy.',
    tech: ['C++', 'Tracy'],
    repo: 'https://github.com/ThashilNaidoo/raytracer',
  },
  {
    title: 'OKO – AI Farming Assistant',
    period: 'Apr 2024 – Aug 2024',
    summary:
      'Mobile app giving African farmers personalised crop and pest advice through Gemini-powered chat. I built the Node.js/MongoDB backend and generated crop imagery with Stable Diffusion; a localised UI raised adoption in field trials.',
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Gemini API', 'Stable Diffusion'],
    repo: 'https://github.com/ThashilNaidoo/Oko',
  },
  {
    title: 'The Pirate King – VR Escape Room',
    period: 'Aug 2023 – Nov 2023',
    summary:
      'Solo project: a VR escape room designed and built in Unreal Engine 5, with puzzles scripted in Blueprints and every 3D asset made in Blender.',
    tech: ['Unreal Engine 5', 'Blueprints', 'Blender', 'Photoshop'],
    video: 'https://www.youtube.com/watch?v=lC0cDBU_G4E',
  },
  {
    title: 'Smart Hybrid Office Booker',
    period: 'Mar 2022 – Nov 2022',
    summary:
      'Owned the React frontend in a 4-person team: an office-layout editor and an interactive seating map for booking desks and meeting rooms. Used internally at Epi-Use Africa.',
    tech: ['React', 'Go', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/ThashilNaidoo/Smart-Hybrid-Workforce-manager',
  },
]
