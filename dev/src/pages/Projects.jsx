import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import PROJECTS from "../data/projects.jsx";

const Projects = () => {
  const containerRef = useRef(null);
  const sentinelRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowTop(!entry.isIntersecting),
      { threshold: 0 }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div ref={containerRef} className="page-container">
      <div ref={sentinelRef} style={{ height: "1px" }} aria-hidden="true" />
      <Navbar />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-6 md:py-12 lg:py-0">
        <main className="pt-24 lg:py-24 justify-center text-center">
          {PROJECTS.map(project => <ProjectCard key={project.id} {...project} />)}
        </main>
      </div>
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-orange-300/50 hover:bg-orange-300/80 transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up text-skill text-lg" />
        </button>
      )}
    </div>
  );
};

export default Projects;