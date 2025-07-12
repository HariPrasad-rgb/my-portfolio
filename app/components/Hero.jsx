'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techIcons = [
  { src: '/icons/react-original.svg', alt: 'React', delay: 0 },
  { src: '/icons/icons8-nextjs.svg', alt: 'Next.js', delay: 0.2 },
  { src: '/icons/spring-original.svg', alt: 'Spring Boot', delay: 0.4 },
];

const Hero = () => {
  const letters = 'Hari Prasad'.split('');

  return (
    <section id="home"className="min-h-screen pt-32 pb-24 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden">

      {/* 🌌 Glowing Purple Blur Behind */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#8b5cf6] blur-[100px]"
        style={{
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1,
        }}
      />

      {/* 🛸 Floating Tech Icons Group */}
      <div className="absolute bottom-8 left-8 flex gap-4 z-0">
        {techIcons.map((icon, index) => (
  <motion.div
    key={index}
    initial={{ y: 0 }}
    animate={{ y: [-6, 6, -6] }}
    transition={{
      duration: 3 + icon.delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="relative w-10 h-10"
  >
    {/* Optional blur glow behind */}
    <div className="absolute w-12 h-12 rounded-full bg-[#8b5cf6] blur-2xl opacity-20 -z-10" />
    <Image
      src={icon.src}
      alt={icon.alt}
      width={36}
      height={36}
      className="opacity-30 hover:opacity-100 hover:scale-110 transition duration-300 drop-shadow-[0_0_6px_#8b5cf6]"
    />
  </motion.div>
))}

      </div>

      {/* 👋 Animated Name */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 flex flex-wrap justify-center leading-tight"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <span className="mr-2 text-white">Hi, I'm</span>
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={index >= 5 ? 'text-[#a78bfa]' : 'text-[#8b5cf6]'}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* 🧑‍💻 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        className="text-2xl md:text-3xl text-[#cbd5e1] mb-6 font-medium"
      >
        Full-Stack Developer
      </motion.h2>

      {/* 💬 Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.5 }}
        className="max-w-xl text-[#cbd5e1] mb-8 text-base md:text-lg leading-relaxed"
      >
        I build fast, beautiful, and scalable web apps using{' '}
        <span className="text-[#8b5cf6] font-semibold">Next.js</span>,{' '}
        <span className="text-[#8b5cf6] font-semibold">React</span>, and{' '}
        <span className="text-[#8b5cf6] font-semibold">Spring Boot</span>.
      </motion.p>

      {/* 🚀 CTA Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.7 }}
        className="bg-[#8b5cf6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a78bfa] transition duration-300"
      >
        Check My Work
      </motion.a>
    </section>
  );
};

export default Hero;
