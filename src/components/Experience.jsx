import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/profile";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Where the work happened</h2>
          <p className="section-sub">
            One role, three hats — research, AI engineering, and full-stack delivery, on the same projects.
          </p>
        </motion.div>

        <div className="exp-timeline">
          {EXPERIENCE.map((job) => (
            <div key={job.org} className="exp-job">
              <motion.div
                className="exp-job-header"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
              >
                <div>
                  <h3>{job.org}</h3>
                  <div className="exp-roles">
                    {job.roles.map((r) => (
                      <span key={r} className="pill accent">{r}</span>
                    ))}
                  </div>
                </div>
                <span className="exp-period mono">{job.period}</span>
              </motion.div>

              <div className="exp-items">
                {job.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="exp-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                  >
                    <div className="exp-item-dot" />
                    <div className="exp-item-body">
                      <h4>{item.title}</h4>
                      <div className="exp-item-tech">
                        {item.tech.map((t) => (
                          <span key={t} className="mono">{t}</span>
                        ))}
                      </div>
                      <ul className="exp-item-points">
                        {item.points.map((p, pi) => (
                          <li key={pi}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {job.footnote && <p className="exp-footnote">{job.footnote}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
