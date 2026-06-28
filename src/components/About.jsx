import { motion } from "framer-motion";
import { FiCpu, FiCode, FiLayers } from "react-icons/fi";
import "./About.css";

const FACTS = [
  {
    icon: <FiCpu />,
    title: "AI & Machine Learning",
    text: "Speech, NLP, and computer-vision pipelines — from Whisper transcription to YOLO-based detection — taken from notebook to production API.",
  },
  {
    icon: <FiCode />,
    title: "Full-Stack Engineering",
    text: "React.js and Node.js on the front, Flask, FastAPI, and Spring Boot on the back — comfortable owning a feature end to end.",
  },
  {
    icon: <FiLayers />,
    title: "Systems & Architecture",
    text: "RESTful APIs, microservices, and relational/NoSQL data design, built with Agile workflows and Git-based collaboration.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">The engineer behind the model</h2>
          <p className="section-sub">
            I'm a BS Artificial Intelligence graduate who builds the model, the API, and the interface around it —
            because a system that nobody can use doesn't help anyone.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-bio card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              I graduated with a Bachelor of Science in Artificial Intelligence from PMAS Arid Agriculture
              University, Rawalpindi, and currently work as a AI Engineer at the Barani Institute of
              Information Technology, where I build AI systems that ship — not just train.
            </p>
            <p>
              My recent work spans telecom call-intent and emotion detection, real-time vehicle detection for toll
              monitoring, and a medical transcription platform that pairs speech-to-text with a fine-tuned BERT
              model at 95% classification accuracy. I built each of those as a full product: model, API, and UI.
            </p>
            <p>
              I think of myself as an AI Software Engineer first — someone who closes the gap between a trained
              model and a product people can actually use, end to end.
            </p>
          </motion.div>

          <div className="about-facts">
            {FACTS.map((f, i) => (
              <motion.div
                key={f.title}
                className="about-fact-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="about-fact-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
