import React, { useState } from "react";
import { skillGroups, allSkills } from "../data/skills";
import "./SkillSelection.css";

const ALL_LABEL = "All Skills";

const SkillSelection = ({ selectedSkills, setSelectedSkills, onAnalyze }) => {
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);

  const categories = [ALL_LABEL, ...skillGroups.map((g) => g.category)];

  const visibleSkills =
    activeCategory === ALL_LABEL
      ? allSkills
      : skillGroups.find((g) => g.category === activeCategory)?.skills || [];

  const getCategoryCount = (cat) =>
    cat === ALL_LABEL
      ? allSkills.length
      : skillGroups.find((g) => g.category === cat)?.skills.length || 0;

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="skill-panel-container">
      <div className="skill-selection-layout">
        {/* Category Sidebar */}
        <div className="skill-panel-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-category-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
              <span className="skill-category-count">{getCategoryCount(cat)}</span>
            </button>
          ))}
        </div>

        {/* Chips Area */}
        <div className="skill-chips-area">
          {visibleSkills.map((skill) => (
            <button
              key={skill}
              className={`skill-chip${selectedSkills.includes(skill) ? " selected" : ""}`}
              onClick={() => toggleSkill(skill)}
            >
              {selectedSkills.includes(skill) && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Info Bar & Analyze Button */}
      <div className="skill-selected-bar">
        <div className="skill-selected-info">
          <span className="skill-selected-label">Selected Skills:</span>
          <span className="skill-selected-count">{selectedSkills.length} selected</span>
          {selectedSkills.length > 0 && (
            <button className="skill-clear-btn" onClick={() => setSelectedSkills([])}>
              Clear All
            </button>
          )}
        </div>
        <button 
          className="btn-primary" 
          disabled={selectedSkills.length === 0}
          onClick={onAnalyze}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 22,20 2,20"/>
          </svg>
          Analyze Profile
        </button>
      </div>
      
    </div>
  );
};

export default SkillSelection;
