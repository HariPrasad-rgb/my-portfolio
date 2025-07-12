'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-[#8b5cf6] z-[9999] blur-sm opacity-70"
      animate={{ x: position.x - 8, y: position.y - 8 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default Cursor;
