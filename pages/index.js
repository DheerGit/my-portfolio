import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />

      <main className="relative z-10">
        <section
          id="about"
          className="bg-white/10 backdrop-blur-20 rounded-lg p-8"
        >
            <About />
        </section>
        <div className="h-40" />
        <section
          id="education"
          className="bg-white/10 backdrop-blur-20 rounded-lg p-8"
        >
            <Education />
        </section>
        <div className="h-40" />
        <section
          id="projects"
          className="bg-white/10 backdrop-blur-20 rounded-lg p-8"
        >
            <Projects />
        </section>
        <div className="h-40" />
        <section
          id="skills"
          className="bg-white/10 backdrop-blur-20 rounded-lg p-8"
        >
            <Skills />
        </section>
        <div className="h-40" />
        <section
          id="experience"
          className="bg-white/10 backdrop-blur-20 rounded-lg p-8"
        >
            <Experience />
        </section>
        <div className="h-40" />
        <section
          id="contact"
          className="bg-white/10 backdrop-blur-20 rounded-lg p-8"
        >
            <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
