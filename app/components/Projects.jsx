'use client';

import { projects } from '../constants/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 bg-[#0f172a] text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
