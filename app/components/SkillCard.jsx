'use client';

import { motion } from 'framer-motion';

const SkillCard = ({ name, Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center bg-[#1e293b] rounded-xl p-5 shadow-md hover:shadow-[0_0_20px_#8b5cf6] transition"
    >
      <Icon className="text-4xl text-[#8b5cf6] mb-3" />
      <span className="text-white text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
