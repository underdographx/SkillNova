import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-gradient-top" aria-hidden="true" />
    <div className="section-container">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/#home" className="footer-logo">
            <img src="/assets/skillnova_logo.svg" alt="SkillNova Logo" className="footer-logo-img" />
            <span>SkillNova</span>
          </a>
          <p>
            AI-powered career guidance for learners who want a clearer path from current skills to future roles.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/underdographx" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .7a11.3 11.3 0 0 0-3.57 22.03c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .1 2.63.72 3.25-.9.1-.73.4-1.22.72-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16A10.7 10.7 0 0 1 12 3.88c.96 0 1.93.13 2.84.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.27-5.15 5.55.41.35.77 1.04.77 2.1v3.42c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/anuja-yadav-5392a6376/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:anujaay013@gmail.com" aria-label="Email" className="footer-social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/#home">Home</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#skills">Analyze Skills</a>
          <a href="/#about">About SkillNova</a>
          <a href="/#developer">About Developer</a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/underdographx" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/anuja-yadav-5392a6376/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:anujaay013@gmail.com">Email</a>
        </div>
      </div>


    </div>
  </footer>
);

export default Footer;
