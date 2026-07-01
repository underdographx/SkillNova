import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { careerList } from "../data/careers";
import "./CareersListPage.css";

const careerIcons = {
  "ai-engineer":          "🤖",
  "ml-engineer":          "🧠",
  "data-scientist":       "📊",
  "frontend-developer":   "🎨",
  "backend-developer":    "⚙️",
  "cybersecurity-analyst":"🛡️",
  "cloud-engineer":       "☁️",
  "uiux-designer":        "✏️",
  "software-engineer":    "💻",
  "devops-engineer":      "🔧",
};

const CareersListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="careers-list-page">
        <div className="section-container">
          <div className="careers-list-header">
            <div className="careers-list-label">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#06B6D4">
                <polygon points="12,2 22,20 2,20"/>
              </svg>
              All Careers
            </div>
            <h1 className="careers-list-title">Explore Career Profiles</h1>
            <p className="careers-list-sub">
              Browse all {careerList.length} career paths curated by SkillNova's AI engine
            </p>
          </div>

          <div className="careers-grid">
            {careerList.map((career) => (
              <Link
                key={career.id}
                to={`/career/${career.id}`}
                className="careers-card"
              >
                <div className="careers-card-icon">
                  <span>{careerIcons[career.id] || "💼"}</span>
                </div>
                <div className="careers-card-title">{career.title}</div>
                <p className="careers-card-overview">
                  {career.overview.slice(0, 110)}...
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {career.skills.slice(0, 4).map((s, i) => (
                    <span
                      key={i}
                      style={{
                        background: "var(--primary-dim)",
                        border: "1px solid var(--primary-border)",
                        color: "var(--primary)",
                        borderRadius: "100px",
                        padding: "3px 9px",
                        fontSize: "11px",
                        fontWeight: 600
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="careers-card-footer">
                  <span className="careers-card-salary">{career.salary}</span>
                  <svg
                    className="careers-card-arrow"
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersListPage;
