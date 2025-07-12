'use client';

import { skills } from '../constants/skills';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-6 bg-[#0f172a]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} Icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
