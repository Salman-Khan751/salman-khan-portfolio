import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiAward, FiCalendar, FiZoomIn } from "react-icons/fi";
import { CERTIFICATIONS } from "../data/profile";
import "./Certificates.css";

const VISIBLE_WINDOW = 2; // cards rendered on each side of the active one

function mod(n, m) {
  return ((n % m) + m) % m;
}

function circularOffset(index, active, length) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export default function Certificates() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const total = CERTIFICATIONS.length;
  const dragX = useRef(0);
  const trackRef = useRef(null);

  const goTo = useCallback((i) => setActive(mod(i, total)), [total]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || lightbox !== null) return;
    const t = setInterval(() => setActive((a) => mod(a + 1, total)), 4200);
    return () => clearInterval(t);
  }, [paused, lightbox, total]);

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((l) => mod(l + 1, total));
      if (e.key === "ArrowLeft") setLightbox((l) => mod(l - 1, total));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, total]);

  const handleDragEnd = (_, info) => {
    const threshold = 60;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
    dragX.current = 0;
  };

  return (
    <section id="certificates" className="certs-section">
      <div className="certs-bg-glow" aria-hidden="true" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Certifications</p>
          <h2 className="section-title">Verified learning, hands-on proof</h2>
          <p className="section-sub">
            {total} certifications across AI, cybersecurity, data, and full-stack web — drag, click an arrow, or
            tap a card to bring it forward. Click the active card to view it full-size.
          </p>
        </motion.div>

        <motion.div
          className="certs-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="certs-arrow certs-arrow-left" onClick={prev} aria-label="Previous certificate">
            <FiChevronLeft />
          </button>

          <div className="certs-track" ref={trackRef}>
            {CERTIFICATIONS.map((cert, i) => {
              const offset = circularOffset(i, active, total);
              const abs = Math.abs(offset);
              if (abs > VISIBLE_WINDOW) return null;

              const isActive = offset === 0;
              const x = offset * 168;
              const rotateY = offset * -32;
              const scale = isActive ? 1 : 1 - abs * 0.16;
              const z = -abs * 90;
              const zIndex = 100 - abs;
              const opacity = 1 - abs * 0.32;

              return (
                <motion.div
                  key={cert.id}
                  className={`certs-card ${isActive ? "is-active" : ""}`}
                  style={{ zIndex }}
                  drag={isActive ? "x" : false}
                  dragElastic={0.18}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  animate={{
                    x,
                    rotateY,
                    scale,
                    z,
                    opacity,
                  }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  onClick={() => (isActive ? setLightbox(i) : goTo(i))}
                  whileHover={isActive ? { scale: 1.03 } : {}}
                >
                  <div className="certs-card-inner">
                    <img src={cert.image} alt={cert.name} loading="lazy" draggable={false} />
                    {isActive && (
                      <div className="certs-card-zoom" aria-hidden="true">
                        <FiZoomIn />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button className="certs-arrow certs-arrow-right" onClick={next} aria-label="Next certificate">
            <FiChevronRight />
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={CERTIFICATIONS[active].id}
            className="certs-caption"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{CERTIFICATIONS[active].name}</h3>
            <div className="certs-caption-meta">
              <span><FiAward /> {CERTIFICATIONS[active].issuer}</span>
              <span><FiCalendar /> {CERTIFICATIONS[active].date}</span>
            </div>
            <div className="certs-caption-skills">
              {CERTIFICATIONS[active].skills.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="certs-dots">
          {CERTIFICATIONS.map((c, i) => (
            <button
              key={c.id}
              className={`certs-dot ${i === active ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${c.name}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="certs-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="certs-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <FiX />
            </motion.button>

            <button
              className="certs-lightbox-nav certs-lightbox-prev"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => mod(l - 1, total)); }}
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>

            <motion.div
              className="certs-lightbox-content"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={CERTIFICATIONS[lightbox].image} alt={CERTIFICATIONS[lightbox].name} />
              <div className="certs-lightbox-info">
                <h3>{CERTIFICATIONS[lightbox].name}</h3>
                <p>{CERTIFICATIONS[lightbox].issuer} · {CERTIFICATIONS[lightbox].date}</p>
              </div>
            </motion.div>

            <button
              className="certs-lightbox-nav certs-lightbox-next"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => mod(l + 1, total)); }}
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
