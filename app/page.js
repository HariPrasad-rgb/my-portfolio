'use client'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'; // ✅ Add this
import ContactSection from './components/ContactSection';
import { useEffect } from 'react';
import Footer from './components/Footer';

export default function Home() {
    useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // or 'auto'
  }, [])
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects /> 
      <ContactSection/>
      <Footer/>
      {/* ✅ Render Projects Section */}
    </>
  );
}
