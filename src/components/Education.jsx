import { motion } from "framer-motion";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";
import { EDUCATION } from "../data/profile";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">Foundation for everything else</h2>
        </motion.div>

        <motion.div
          className="edu-card card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="edu-icon"><FiBookOpen /></div>
          <span className="edu-period mono">{EDUCATION.period}</span>
          <h3>{EDUCATION.degree}</h3>
          <p>{EDUCATION.school}</p>

          <a
            className="edu-cert-link"
            href="#certificates"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See my certifications <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
