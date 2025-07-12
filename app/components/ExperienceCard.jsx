'use client';

import { motion } from 'framer-motion';

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="relative pl-8 sm:pl-12 border-l border-[#8b5cf6] mb-10"
    >
      {/* Dot */}
      <div className="absolute left-[-7px] top-1 w-4 h-4 bg-[#8b5cf6] rounded-full border border-white"></div>

      <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
      <p className="text-sm text-[#cbd5e1] font-medium">
        {experience.company} · {experience.location}
      </p>
      <span className="text-xs text-[#94a3b8]">{experience.period}</span>

      <ul className="mt-3 list-disc ml-4 text-sm text-[#cbd5e1] space-y-1">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
