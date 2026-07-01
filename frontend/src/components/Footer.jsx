import React from "react";
import "./Footer.css";

const CompassLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="#FF2A7A" strokeWidth="2" strokeOpacity="0.2"/>
    <circle cx="16" cy="16" r="10" stroke="#FF2A7A" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2"/>
    <path d="M16 4L20 16L16 28L12 16L16 4Z" fill="url(#gradF)"/>
    <circle cx="16" cy="16" r="2.5" fill="#070B14" stroke="#FF2A7A" strokeWidth="1.5"/>
    <defs>
      <linearGradient id="gradF" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF2A7A" />
        <stop offset="100%" stopColor="#D41A5C" stopOpacity="0.6"/>
      </linearGradient>
    </defs>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <div className="footer-logo-icon">
                <CompassLogo />
              </div>
              <span className="footer-logo-text">SkillNova</span>
            </a>
            <p className="footer-desc">
              SkillNova is an AI-powered Career Recommendation Platform that analyzes your technical skills 
              using similarity matching algorithms to recommend personalized career paths.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Platform</h4>
            <div className="footer-links">
              <a href="/#home" className="footer-link">Home</a>
              <a href="/#how-it-works" className="footer-link">Pipeline</a>
              <a href="/#skills" className="footer-link">Analyze with AI</a>
              <a href="/#about" className="footer-link">About Us</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Developer</h4>
            <div className="footer-links">
              <a href="https://github.com/underdographx" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/anuja-yadav-5392a6376/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://www.instagram.com/anujay_13" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
              <a href="mailto:anujaay013@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} SkillNova AI. All rights reserved.</div>
          <div className="footer-socials">
            <a href="https://github.com/underdographx" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/anuja-yadav-5392a6376/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/anujay_13" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
