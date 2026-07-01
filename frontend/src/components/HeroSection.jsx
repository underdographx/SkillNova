import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="home">
      <div className="section-container" style={{ width: "100%" }}>
        <div className="hero-container">
          <div className="hero-layout">

            {/* LEFT: Text Content */}
            <div className="hero-content">
              <div className="hero-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 22,20 2,20"/>
                </svg>
                Powered by AI Similarity Engine
              </div>

              <h1 className="hero-title">
                Find the Career<br />
                <span className="hero-title-highlight">That Fits You</span>
              </h1>

              <p className="hero-desc">
                Discover your ideal career path using AI-powered similarity matching 
                and intelligent recommendation algorithms.
              </p>

              <div className="hero-actions">
                <button className="btn-primary" onClick={scrollToSkills}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                  </svg>
                  Analyze with AI
                </button>
                <button
                  className="btn-outline"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10 8 16 12 10 16"/>
                  </svg>
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT: Illustration */}
            <div className="hero-image-col">
              <img
                src="/hero-illustration.png"
                alt="AI Career Pathways Illustration"
                className="hero-illustration"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
