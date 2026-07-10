import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

const principles = [
  ["Skill-aware", "SkillNova compares your selected abilities with curated career profiles instead of giving generic advice."],
  ["Explainable", "Every recommendation highlights matched skills, missing skills, confidence, salary range, and next actions."],
  ["Built to grow", "The platform is ready for future resume parsing, saved reports, learning plans, and live labor-market signals."],
];

const AboutPage = () => (
  <div className="about-page">
    <Navbar />
    <main className="about-page-main">
      <section className="about-hero">
        <div className="section-container">
          <motion.div
            className="about-hero-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-eyebrow">About SkillNova</span>
            <h1>AI career guidance that turns skills into direction.</h1>
            <p>
              SkillNova helps learners understand which technology careers fit their current profile and what to learn next. It combines a curated career database with similarity scoring, explainable skill gaps, and roadmap-oriented recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-principles">
        <div className="section-container">
          <div className="about-principle-grid">
            {principles.map(([title, text]) => (
              <article className="about-principle-card" key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-engine">
        <div className="section-container">
          <div className="about-engine-panel">
            <div>
              <span className="section-eyebrow">Recommendation Engine</span>
              <h2>How the matching works</h2>
              <p>
                Your selected skills are normalized into a profile, then compared with career skill sets. The engine calculates fit, identifies overlaps, surfaces missing skills, and ranks career paths by relevance.
              </p>
            </div>
            <div className="about-engine-steps">
              <span>Select Skills</span>
              <span>Build Profile</span>
              <span>Score Similarity</span>
              <span>Rank Careers</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
