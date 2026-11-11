import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSON } from "../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <img src="/logo/image-3.png" alt="Salman Khan logo" className="footer-logo-img" />        
        </span>
        <p className="footer-text">
          Designed &amp; deployed by {PERSON.name} · © {new Date().getFullYear()}
        </p>        
        <div className="footer-socials">
          <a href={PERSON.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={PERSON.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${PERSON.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}
