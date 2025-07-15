'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX, HiOutlineDocumentDownload } from 'react-icons/hi';
import useSectionObserver from '../hooks/useSectionObserver';

// ✅ Add 'Projects' to nav
const navLinks = ['Home', 'Skills', 'Experience', 'Projects'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = navLinks.map((link) => link.toLowerCase());
  const activeSection = useSectionObserver(sectionIds);

  // 🔍 Debug active section (optional)
  // console.log("🔥 Active section:", activeSection);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? 'backdrop-blur-md bg-[#0f172a]/70 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        {/* 👤 Logo */}
        <Link href="/">
          <motion.span
            className="text-xl font-bold text-[#8b5cf6] hover:text-white transition"
            whileHover={{ scale: 1.05 }}
          >
            Hari Prasad
          </motion.span>
        </Link>

        {/* 🌐 Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;

            return (
              <Link
                key={id}
                href={`#${id}`}
                className={`group relative font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#a78bfa]' : 'text-white'
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#a78bfa] rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}

          {/* 📄 Resume Button */}
          <a
            href="/Hari_Prasad_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 border border-[#8b5cf6] text-[#8b5cf6] rounded-full hover:bg-[#8b5cf6] hover:text-white transition font-semibold"
          >
            <HiOutlineDocumentDownload className="text-lg" />
            Resume
          </a>
        </div>

        {/* 📱 Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Slide-in Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md px-8 py-4 space-y-4 z-40"
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`block font-medium ${
                activeSection === link.toLowerCase()
                  ? 'text-[#a78bfa]'
                  : 'text-white'
              } hover:text-[#a78bfa]`}
            >
              {link}
            </Link>
          ))}

          {/* 📄 Resume on Mobile */}
          <a
            href="/Hari_Prasad_Resume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="inline-block mt-2 px-4 py-2 border border-[#8b5cf6] text-[#8b5cf6] rounded-full hover:bg-[#8b5cf6] hover:text-white transition font-semibold"
          >
            <HiOutlineDocumentDownload className="inline-block mr-2 text-lg" />
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
