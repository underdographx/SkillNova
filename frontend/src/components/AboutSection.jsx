import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        
        <div className="developer-container">
          
          {/* LEFT COLUMN */}
          <div className="dev-left">
            <div className="dev-photo-wrapper">
              <img 
                src="/developer-photo.png" 
                alt="Anuja Yadav" 
                className="dev-photo" 
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Anuja+Yadav&background=FF2A7A&color=fff"; }}
              />
            </div>

            <div className="dev-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              ABOUT THE DEVELOPER
            </div>

            <h2 className="dev-name">Anuja Yadav</h2>
            <div className="dev-title">
              Computer Engineering Student<br />
              AI & Full Stack Developer
            </div>

            <div className="dev-quote">
              Passionate about building intelligent applications that combine clean design with practical functionality.
            </div>

            <div className="dev-socials">
              <a href="https://github.com/underdographx" target="_blank" rel="noreferrer" className="dev-social-btn" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                <span className="dev-social-label">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/anuja-yadav-5392a6376/" target="_blank" rel="noreferrer" className="dev-social-btn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="dev-social-label">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/anujay_13" target="_blank" rel="noreferrer" className="dev-social-btn" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="dev-social-label">Instagram</span>
              </a>
              <a href="mailto:anujaay013@gmail.com" className="dev-social-btn" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="dev-social-label">Email</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="dev-right">
            
            <h3 className="dev-section-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              ABOUT ME
            </h3>
            
            <p className="dev-desc">
              I'm a Computer Engineering student passionate about Artificial Intelligence, Web Development, 
              and creating modern, user-friendly digital experiences. I love turning ideas into reality through code.
            </p>

            <div className="dev-highlights">
              <div className="dev-highlight-card">
                <div className="dev-highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="dev-highlight-title">Education</div>
                <div className="dev-highlight-text">Diploma in<br/>Computer Engineering</div>
              </div>
              
              <div className="dev-highlight-card">
                <div className="dev-highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div className="dev-highlight-title">Focus</div>
                <div className="dev-highlight-text">AI • Web Dev<br/>UI/UX • Problem Solving</div>
              </div>

              <div className="dev-highlight-card">
                <div className="dev-highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <div className="dev-highlight-title">Goal</div>
                <div className="dev-highlight-text">Building intelligent<br/>& impactful solutions</div>
              </div>
            </div>

            <h3 className="dev-section-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              TECHNICAL SKILLS
            </h3>

            <div className="dev-skills-grid">
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#61DAFB"}}>⚛️</div> React.js</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#F7DF1E"}}>JS</div> JavaScript</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#3776AB"}}>🐍</div> Python</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#E34F26"}}>5</div> HTML5</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#1572B6"}}>3</div> CSS3</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#06B6D4"}}>〰️</div> Tailwind CSS</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#F05032"}}>🔸</div> Git</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#ffffff"}}>🐙</div> GitHub</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "var(--primary)"}}>🧠</div> Artificial Intelligence</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "var(--primary)"}}>📊</div> Machine Learning</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "var(--success)"}}>📂</div> Data Structures</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "var(--warning)"}}>💡</div> Problem Solving</span>
              <span className="dev-skill-chip"><div className="dev-skill-icon" style={{color: "#646CFF"}}>⚡</div> Vite</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
