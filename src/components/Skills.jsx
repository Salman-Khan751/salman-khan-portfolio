import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/profile";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Skills &amp; Technologies</p>
          <h2 className="section-title">The toolkit behind the work</h2>
          <p className="section-sub">
            Grouped the way I actually use them — languages, AI/ML, the web layer, data, and the tools that keep it
            all deployable.
          </p>
        </motion.div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              className="skills-group card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <h3 className="skills-group-title mono">{group.title}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item.id} className="skills-tag">
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
