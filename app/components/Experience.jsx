'use client';

import { experiences } from '../constants/experiences';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
 <section id="experience" className="min-h-screen py-24 px-4 bg-[#111827] text-white">



      <h2 className="text-4xl font-extrabold text-center mb-16">
        Work Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#a78bfa]/30" />

        {/* Timeline Entries */}
        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-16 flex flex-col md:flex-row items-center ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Dot */}
           <span className="absolute w-4 h-4 bg-purple-400 rounded-full border-4 border-[#0f172a] left-1/2 -translate-x-1/2 z-10 shadow-md hover:scale-125 hover:shadow-purple-500 transition-all duration-300 animate-pulse" />


              {/* Card */}
             <div
  className={`w-full md:w-[48%] bg-slate-800/70 p-6 rounded-xl shadow-md border border-slate-700 hover:border-purple-400 hover:shadow-purple-400/40 transition-all duration-300 ${
    isLeft ? 'md:mr-auto' : 'md:ml-auto'
  }`}
>

              <h3 className="text-lg md:text-xl font-semibold text-purple-300 mb-1">{exp.title}</h3>
<p className="text-sm text-slate-300 font-medium">
  <span className="text-white">{exp.company}</span> · <span className="text-slate-400">{exp.location}</span>
</p>

                <p className="text-sm text-slate-400 mb-4">{exp.date}</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
