'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-slate-800/70 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
    >
      {/* 🔼 Top Image */}
      {project.image && (
        <div className="relative h-32 md:h-36 lg:h-40 w-full">
          <Image
            src={project.image}
            alt={`${project.title} background`}
            fill
            className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105 group-hover:translate-y-1"
          />
        </div>
      )}

      {/* 🔲 Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold text-purple-300 mb-1">{project.title}</h3>
        <p className="text-sm text-slate-300 mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
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
      </div>
    </motion.div>
  );
}
