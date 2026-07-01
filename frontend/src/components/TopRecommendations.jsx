import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { careers } from "../data/careers";
import { calculateWeightedSimilarity, getMatchedSkills, getMissingSkills } from "../utils/aiEngine";
import "./TopRecommendations.css";

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
  "qa-engineer":          "✅",
  "network-engineer":     "🌐",
  "mobile-developer":     "📱",
};

const TopRecommendations = ({ selectedSkills, isVisible, onCareersScored }) => {
  const navigate = useNavigate();

  const scoredCareers = Object.values(careers)
    .map(career => {
      const score = calculateWeightedSimilarity(selectedSkills, career.skills);
      const matched = getMatchedSkills(selectedSkills, career.skills);
      const missing = getMissingSkills(selectedSkills, career.skills);
      return { ...career, score, matchedSkills: matched, missingSkills: missing };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4); 

  useEffect(() => {
    if (isVisible && scoredCareers.length > 0 && onCareersScored) {
      onCareersScored(scoredCareers);
    }
  }, [isVisible, scoredCareers, onCareersScored]);

  if (!isVisible) return null;

  return (
    <div className="rec-panel-container">
      <div className="rec-cards-list">
        {scoredCareers.map((career, i) => {
          const isTop = i === 0;
          return (
            <div 
              key={career.id} 
              className={`rec-panel-card ${isTop ? "top-match" : ""}`} 
              onClick={() => navigate(`/career/${career.id}`)}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="rec-panel-icon">{careerIcons[career.id] || "💼"}</div>
              <div className="rec-panel-main">
                <div className="rec-panel-name">{career.title}</div>
                <div className="rec-panel-meta">
                  <strong>{career.matchedSkills.length}</strong> skills matched
                </div>
                {career.missingSkills && career.missingSkills.length > 0 && (
                  <div className="rec-missing-skills" style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "6px" }}>
                    <strong style={{ color: "var(--warning)" }}>Learn: </strong>
                    {career.missingSkills.slice(0, 3).join(", ")}
                    {career.missingSkills.length > 3 ? "..." : ""}
                  </div>
                )}
              </div>
              <div className="rec-panel-score">
                <span className="rec-panel-score-val">{career.score}%</span>
                <span className="rec-panel-score-lbl">Match</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRecommendations;
