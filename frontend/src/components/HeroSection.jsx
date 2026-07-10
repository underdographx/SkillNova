import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="section-container">
        <div className="hero-layout">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              AI-Powered Career Guidance
            </div>
            <h1 className="hero-title">
              Discover Your<br />
              Perfect Career<br />
              with <span className="hero-title-ai">AI</span>
            </h1>
            <p className="hero-desc">
              Get personalized career recommendations based on your skills and interests using intelligent similarity matching.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Get Started
              </button>
              <button className="btn-outline" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-graphic"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-container">
              <img 
                src="/assets/hero_career_landscape.jpg" 
                alt="AI Career Analysis Dashboard Premium 3D Illustration" 
                className="hero-3d-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
