import { useState, useRef } from "react";

const MediaItem = ({ item }) => (
  <div className="w-full aspect-[16/9] rounded-lg shadow-lg border-2 border-white overflow-hidden">
    {item.type === "youtube" ? (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${item.videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      <img
        className="w-full h-full object-cover"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={item.src}
        alt={item.alt}
      />
    )}
  </div>
);

const HobbyCard = ({ id, title, description, media = [] }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setIndex(i => (i - 1 + media.length) % media.length);
  const next = () => setIndex(i => (i + 1) % media.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const hasMultiple = media.length > 1;

  return (
    <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
      <div className="mb-3">
        <h3 className="text-company">{title}</h3>

        {media.length > 0 && (
          <div
            className="group relative mt-2 mb-2 select-none max-w-[50%] mx-auto"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <MediaItem item={media[index]} />

            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors transition-opacity duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  <i className="bi bi-chevron-left" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors transition-opacity duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  <i className="bi bi-chevron-right" />
                </button>

                <div className="flex justify-center gap-2 mt-2">
                  {media.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to item ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                        i === index ? "bg-[#29e0d5]" : "bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <p className="text-description">{description}</p>
      </div>
    </section>
  );
};

export default HobbyCard;
