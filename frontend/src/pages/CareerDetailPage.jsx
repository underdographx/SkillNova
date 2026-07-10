import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { careers } from "../data/careers";
import "./CareerDetailPage.css";

const careerIcons = {
  "ai-engineer":          "🤖",
  "ml-engineer":          "🧠",
  "data-scientist":       "📊",
  "frontend-developer":   "🎨",
  "backend-developer":    "⚙️",
  "fullstack-developer":  "🚀",
  "cloud-engineer":       "☁️",
  "cybersecurity-analyst":"🛡️",
  "devops-engineer":      "♾️",
  "uiux-designer":        "✏️",
  "data-analyst":         "📈",
  "business-analyst":     "📋",
  "software-engineer":    "💻",
  "game-developer":       "🎮",
  "blockchain-developer": "🔗",
  "database-administrator":"🐘",
  "embedded-engineer":    "🔌",
  "qa-engineer":          "🧪",
  "network-engineer":     "🌐",
  "mobile-developer":     "📱",
};

const CareerDetailPage = () => {
  const { id } = useParams();
  const career = careers[id];
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "responsibilities", "skills", "roadmap", "resources"];
      let current = "overview";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (!career) {
    return (
      <div className="career-detail-page">
        <Navbar />
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2>Career Profile Not Found</h2>
          <Link to="/" style={{ color: "var(--primary)" }}>Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="career-detail-page">
      <Navbar />

      <div className="career-detail-topbar">
        <Link to="/" className="career-back-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Analysis
        </Link>
        <div className="career-top-meta">
          <span>Demand: <strong>{career.demand}</strong></span>
          <span>Avg Salary: <strong>{career.salary}</strong></span>
        </div>
      </div>

      <section className="career-hero">
        <div className="section-container">
          <div className="career-hero-inner">
            <div className="career-hero-icon">
              {careerIcons[career.id] || "💼"}
            </div>
            <div className="career-hero-content">
              <h1 className="career-hero-title">{career.title}</h1>
              <p className="career-hero-desc">{career.overview}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-container">
        <div className="career-layout">
          
          <aside className="career-sidebar">
            <button className={`career-nav-link ${activeSection === "overview" ? "active" : ""}`} onClick={() => scrollTo("overview")}>
              Market Insights
            </button>
            <button className={`career-nav-link ${activeSection === "responsibilities" ? "active" : ""}`} onClick={() => scrollTo("responsibilities")}>
              Responsibilities
            </button>
            <button className={`career-nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={() => scrollTo("skills")}>
              Required Skills
            </button>
            <button className={`career-nav-link ${activeSection === "roadmap" ? "active" : ""}`} onClick={() => scrollTo("roadmap")}>
              Career Roadmap
            </button>
            <button className={`career-nav-link ${activeSection === "resources" ? "active" : ""}`} onClick={() => scrollTo("resources")}>
              Learning Resources
            </button>
          </aside>

          <main className="career-content">
            
            {/* Market Insights */}
            <section id="overview" className="career-section">
              <h2 className="career-section-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Market Insights
              </h2>
              <div className="career-metrics">
                <div className="career-metric-card">
                  <div className="metric-label">Average Salary</div>
                  <div className="metric-value">{career.salary}</div>
                </div>
                <div className="career-metric-card">
                  <div className="metric-label">Industry Demand</div>
                  <div className="metric-value">{career.demand}</div>
                </div>
                <div className="career-metric-card">
                  <div className="metric-label">Future Scope</div>
                  <div className="metric-value">{career.futureScope}</div>
                </div>
              </div>
            </section>

            {/* Responsibilities */}
            <section id="responsibilities" className="career-section">
              <h2 className="career-section-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Core Responsibilities
              </h2>
              <div className="career-list-grid">
                {career.responsibilities.map((resp, i) => (
                  <div key={i} className="career-list-item">
                    <svg className="career-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <div className="career-list-text">{resp}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="career-section">
              <h2 className="career-section-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Required Technical Skills
              </h2>
              <div className="career-skills-tags">
                {career.skills.map((skill, i) => (
                  <span key={i} className="career-skill-tag">{skill}</span>
                ))}
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="career-section">
              <h2 className="career-section-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Learning Roadmap
              </h2>
              <div className="career-roadmap">
                {career.roadmap.map((step, i) => (
                  <div key={i} className="roadmap-step">
                    <div className="roadmap-marker">{i + 1}</div>
                    <div className="roadmap-content">
                      <div className="roadmap-step-title">{step.step}</div>
                      <div className="roadmap-step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources */}
            <section id="resources" className="career-section">
              <h2 className="career-section-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                Learning Resources
              </h2>
              <div className="resources-grid">
                {career.resources.map((res, i) => (
                  <a key={i} href={res.url} target="_blank" rel="noreferrer" className="resource-card">
                    <div className="resource-left">
                      <span className="resource-icon">{res.icon}</span>
                      <span className="resource-name">{res.name}</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CareerDetailPage;
