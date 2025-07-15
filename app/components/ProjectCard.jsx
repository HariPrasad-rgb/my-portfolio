'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-800/70 rounded-2xl p-6 border border-slate-700 hover:border-purple-400 hover:shadow-purple-500/40 transition-all duration-300 group"
    >
      <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>

      <p className="text-sm text-slate-300 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-purple-900/40 text-purple-200 text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-purple-400 flex items-center gap-1 text-sm"
          >
            <FaGithub /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-purple-400 flex items-center gap-1 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
