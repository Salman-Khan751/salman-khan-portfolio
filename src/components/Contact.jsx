import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { PERSON } from "../data/profile";
import "./Contact.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 600;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  else if (form.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Enter a valid email address.";

  if (!form.message.trim()) errors.message = "Tell me a little about what you're building.";
  else if (form.message.trim().length < 10) errors.message = "A few more details would help (10+ characters).";
  else if (form.message.length > MAX_MESSAGE) errors.message = `Keep it under ${MAX_MESSAGE} characters.`;

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success | error

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PERSON.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Open to AI Software Engineering roles and collaborations. Fill in the form — it's validated, and
            opens a pre-filled email for you to send.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <a href={`mailto:${PERSON.email}`} className="contact-row">
              <FiMail />
              <span>{PERSON.email}</span>
            </a>
            <a href={`tel:${PERSON.phone.replace(/[^+\d]/g, "")}`} className="contact-row">
              <FiPhone />
              <span>{PERSON.phone}</span>
            </a>
            <div className="contact-row">
              <FiMapPin />
              <span>{PERSON.location}</span>
            </div>

            <div className="contact-socials">
              <a href={PERSON.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FiGithub /> GitHub
              </a>
              <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form card"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="form-field">
              <label className="visually-hidden" htmlFor="name">Your name</label>
              <motion.input
                id="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={showError("name") ? "has-error" : ""}
                animate={showError("name") ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
              />
              <AnimatePresence>
                {showError("name") && (
                  <motion.span
                    className="field-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <FiAlertCircle /> {errors.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="form-field">
              <label className="visually-hidden" htmlFor="email">Your email</label>
              <motion.input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={showError("email") ? "has-error" : ""}
                animate={showError("email") ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
              />
              <AnimatePresence>
                {showError("email") && (
                  <motion.span
                    className="field-error"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <FiAlertCircle /> {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="form-field">
              <label className="visually-hidden" htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                rows={5}
                maxLength={MAX_MESSAGE}
                placeholder="What are you building?"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={showError("message") ? "has-error" : ""}
                animate={showError("message") ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
              />
              <div className="field-footer">
                <AnimatePresence>
                  {showError("message") && (
                    <motion.span
                      className="field-error"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FiAlertCircle /> {errors.message}
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="field-counter mono">{form.message.length}/{MAX_MESSAGE}</span>
              </div>
            </div>

            <motion.button type="submit" className="btn btn-primary" whileTap={{ scale: 0.96 }} whileHover={{ y: -2 }}>
              Send message <FiSend />
            </motion.button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  className="form-status form-status-success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <FiCheckCircle /> Your email app should be open with the message ready to send.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="form-status form-status-error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <FiAlertCircle /> Please fix the highlighted fields before sending.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
