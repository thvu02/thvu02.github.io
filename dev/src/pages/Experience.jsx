import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ExperienceEntry from "../components/ExperienceEntry";
import { HashLink } from "react-router-hash-link";
import SECTIONS from "../data/experience";

const Experience = () => {
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
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pt-8">
            <ul className="anchors">
              {SECTIONS.map(({ id, title, entries }) => (
                <li key={id}>
                  <HashLink smooth className="hash-link" to={`#${id}`}>{title}</HashLink>
                  <ul className="sub-anchors">
                    {entries.map(entry => (
                      <li key={entry.id}>
                        <HashLink smooth className="sub-hash-link" to={`#${entry.id}`}>{entry.navLabel}</HashLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </header>
          <main className="pt-24 lg:w-[52%] lg:py-24">
            {SECTIONS.map(({ id, title, entries }) => (
              <section key={id} className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
                <h2 id={id} className="text-section">{title}</h2>
                {entries.map(entry => <ExperienceEntry key={entry.id} {...entry} />)}
              </section>
            ))}
          </main>
        </div>
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

export default Experience;