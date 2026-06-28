import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";
import { RESUMES } from "../data/profile";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="resume-inner"
        >
          <p className="section-eyebrow">Resume</p>
          <h2 className="section-title">Download my resume</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            One core profile, tailored into a few formats depending on the role. Pick whichever fits what you're
            hiring for.
          </p>

          <div className="resume-grid">
            {RESUMES.map((r, i) => (
              <motion.a
                key={r.key}
                href={r.file}
                download
                className="resume-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                whileTap={{ scale: 0.97 }}
              >
                <FiFileText className="resume-card-icon" />
                <div className="resume-card-text">
                  <span className="resume-card-label">{r.label}</span>
                  <span className="resume-card-sub mono">PDF · Download</span>
                </div>
                <FiDownload className="resume-card-dl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
