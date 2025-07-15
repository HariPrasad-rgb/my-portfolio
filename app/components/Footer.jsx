'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-4 text-center">
      <h3 className="text-lg font-semibold mb-4">Connect with me</h3>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/harim0399/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-[#8b5cf6] text-[#8b5cf6] rounded-full hover:bg-[#8b5cf6] hover:text-white transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="https://github.com/HariPrasad-rgb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-[#8b5cf6] text-[#8b5cf6] rounded-full hover:bg-[#8b5cf6] hover:text-white transition"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      <p className="text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Hari Prasad. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
