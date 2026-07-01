import React from "react";
import { generateAIInsights } from "../utils/aiEngine";
import "./AIInsights.css";

const AIInsights = ({ selectedSkills, scoredCareers }) => {
  const insights = generateAIInsights(selectedSkills, scoredCareers);

  if (!insights) return null;

  return (
    <section className="insights-section">
      <div className="section-container">
        <div className="insights-card">
          <div className="insights-header">
            <div className="insights-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div>
              <h3 className="insights-title">AI Skill Report</h3>
              <p className="insights-sub">Comprehensive analysis of your current profile</p>
            </div>
          </div>

          <div className="insights-grid">
            {/* Career Readiness */}
            <div className="insight-block">
              <div className="insight-block-label">Career Readiness</div>
              <div className="readiness-meter">
                <span className="readiness-score">{insights.careerReadiness}%</span>
                <span className="readiness-target">for {insights.topMatch}</span>
              </div>
            </div>

            {/* Strengths */}
            <div className="insight-block">
              <div className="insight-block-label">Your Strengths</div>
              <div className="insight-list">
                {insights.strengths.map((s, i) => (
                  <div key={i} className="insight-item">
                    <svg className="insight-item-icon success" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Gaps */}
            <div className="insight-block">
              <div className="insight-block-label">Identified Skill Gaps</div>
              <div className="insight-list">
                {insights.gaps.map((s, i) => (
                  <div key={i} className="insight-item">
                    <svg className="insight-item-icon warning" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {s}
                  </div>
                ))}
                {insights.gaps.length === 0 && (
                  <div className="insight-item">No major gaps identified!</div>
                )}
              </div>
            </div>

            {/* Next Skill Suggestion */}
            <div className="insight-block">
              <div className="insight-block-label">Suggested Next Skill</div>
              <div className="next-skill-box">
                <div className="next-skill-icon">🎯</div>
                <div className="next-skill-content">
                  <div className="next-skill-name">{insights.nextSkill}</div>
                  <div className="next-skill-desc">Highest ROI to boost score</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
