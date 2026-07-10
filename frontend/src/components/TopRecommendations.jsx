import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { careers } from "../data/careers";
import { calculateWeightedSimilarity, getMatchedSkills, getMissingSkills } from "../utils/aiEngine";
import "./TopRecommendations.css";

const TopRecommendations = ({ selectedSkills, isVisible, onCareersScored, onSelectCareer, activeCareerId }) => {
  const navigate = useNavigate();

  const scoredCareers = useMemo(() => {
    return Object.values(careers)
      .map((career) => {
        const score = calculateWeightedSimilarity(selectedSkills, career.skills);
        const matched = getMatchedSkills(selectedSkills, career.skills);
        const missing = getMissingSkills(selectedSkills, career.skills);
        return { ...career, score, matchedSkills: matched, missingSkills: missing };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }, [selectedSkills]);

  useEffect(() => {
    if (isVisible && scoredCareers.length > 0 && onCareersScored) {
      onCareersScored(scoredCareers);
    }
  }, [isVisible, scoredCareers, onCareersScored]);

  if (!isVisible) return null;

  return (
    <div className="compact-rec-list">
      {scoredCareers.map((career, i) => {
        const isActive = activeCareerId === career.id;
        return (
          <div 
            key={career.id} 
            className={`compact-rec-card ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCareer && onSelectCareer(career)}
          >
            <div className="rec-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            
            <div className="rec-card-content">
              <div className="rec-card-header">
                <h4 className="rec-card-title">{career.title} {i === 0 && <span className="top-match-badge">Top Match</span>}</h4>
                <div className="rec-card-score">
                  <strong>{career.score}%</strong>
                  <span>Match</span>
                </div>
              </div>
              <div className="rec-card-skills">
                <span className="skills-label">Matched Skills</span>
                <div className="skills-row">
                  {career.matchedSkills.slice(0, 4).map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                  {career.matchedSkills.length === 0 && <span>None</span>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      <button 
        className="btn-outline w-full" 
        style={{ marginTop: '16px' }}
        onClick={() => navigate('/careers')}
      >
        View All Careers
      </button>
    </div>
  );
};

export default TopRecommendations;
