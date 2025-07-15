import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'; // ✅ Add this

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects /> {/* ✅ Render Projects Section */}
    </>
  );
}
