import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
// Add other sections as you build them

export default function Home() {
  return (
    <>
   <Hero />         
      <Skills />
      <Experience />

      {/* Future: Projects, Experience, Contact sections */}
    </>
  );
}
