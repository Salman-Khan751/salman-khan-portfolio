import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSON, IDENTITY } from "../data/profile";
import "./Hero.css";

function useTiltMouse(ref) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: px * 18, y: py * -18 });
    };
    const handleLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref]);

  return tilt;
}

function RoleSlider({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <div className="hero-role-slider">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="hero-role-slider-text"
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="hero-role-slider-bar" aria-hidden="true" />
    </div>
  );
}

export default function Hero() {
  const tiltRef = useRef(null);
  const tilt = useTiltMouse(tiltRef);

  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <motion.div
        className="hero-glow"
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-glow hero-glow-2"
        aria-hidden="true"
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          
            Hi!{" "}
            <motion.span
              className="hero-wave"
              role="img"
              aria-label="waving hand"
              animate={{ rotate: [0, 18, -10, 18, -4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            >
              👋
            </motion.span>{" "}
            I'm Salman Khan
          </motion.p>

          {/* <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {PERSON.name}
          </motion.h1> */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <RoleSlider roles={IDENTITY.roles} />
          </motion.div>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            {IDENTITY.summary}
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            <motion.a
              className="btn btn-primary"
              href="#contact"
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </motion.a>
            <motion.a
              className="btn btn-ghost"
              href="#projects"
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View projects
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52 }}
          >
            {IDENTITY.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="hero-metric"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.56 + i * 0.08 }}
              >
                <span className="hero-metric-value mono">{m.value}</span>
                <span className="hero-metric-label">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href={PERSON.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FiGithub />
            </a>
            <a href={PERSON.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin />
            </a>
            <a href={`mailto:${PERSON.email}`} aria-label="Send email">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            ref={tiltRef}
            className="hero-visual-tilt"
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
          >
            <div className="hero-visual-ring hero-visual-ring-1" />
            <div className="hero-visual-ring hero-visual-ring-2" />
            <motion.div
              className="hero-visual-orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <span className="hero-orbit-dot" />
            </motion.div>
            <motion.div
              className="hero-visual-orbit hero-visual-orbit-2"
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              <span className="hero-orbit-dot" />
            </motion.div>
            <div className="hero-visual-card">              
            <img src="/logo/image-3.png" alt="Salman Khan logo" className="hero-visual-logo" />  
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero-scroll-cue"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
