import React, { useEffect, useRef, useState } from "react";
import "./AIAnalysis.css";

const STEPS = [
  { text: "Initializing AI Engine", duration: 800 },
  { text: "Extracting Skills",       duration: 1000 },
  { text: "Generating User Profile",     duration: 1200 },
  { text: "Computing Similarity Scores",    duration: 1500 },
  { text: "Ranking Career Profiles",          duration: 900 },
  { text: "Generating Explainable AI",duration: 1100 },
];

const AIAnalysis = ({ isAnalyzing, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  // If we are not currently analyzing and haven't finished, reset state
  useEffect(() => {
    if (!isAnalyzing && !done) {
      setCurrentStep(0);
    }
  }, [isAnalyzing, done]);

  useEffect(() => {
    if (!isAnalyzing) return;

    if (currentStep < STEPS.length) {
      timerRef.current = setTimeout(() => {
        setCurrentStep((s) => s + 1);
      }, STEPS[currentStep]?.duration || 1000);
    } else {
      timerRef.current = setTimeout(() => {
        setDone(true);
        setTimeout(() => { if (onComplete) onComplete(); }, 600);
      }, 500);
    }
    return () => clearTimeout(timerRef.current);
  }, [isAnalyzing, currentStep, onComplete]);

  return (
    <div className="ai-panel-container">
      {STEPS.map((step, idx) => {
        const isCompleted = done || (isAnalyzing && idx < currentStep);
        const isActive    = isAnalyzing && idx === currentStep;
        
        return (
          <div
            key={idx}
            className={`ai-step${isCompleted ? " completed" : ""}${isActive ? " active" : ""}`}
          >
            <div
              className={`ai-step-indicator ${
                isCompleted ? "ai-step-indicator--done"
                : isActive  ? "ai-step-indicator--active"
                : "ai-step-indicator--waiting"
              }`}
            >
              {isCompleted && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </div>

            <div className="ai-step-content">
              <div className="ai-step-text">{step.text}</div>
              {isActive && (
                <div className="ai-step-progress">
                  <div className="ai-step-progress-fill" style={{ animationDuration: `${step.duration}ms` }}/>
                </div>
              )}
              {isCompleted && (
                <div className="ai-step-progress">
                  <div className="ai-step-progress-fill" style={{ animation: "none", width: "100%" }}/>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div className={`ai-complete-row ${done ? "done" : ""}`}>
        <div className="ai-complete-icon">
          {done && (
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="20 6 9 17 4 12"/>
             </svg>
          )}
        </div>
        <div className="ai-complete-text">Recommendation Ready</div>
      </div>
    </div>
  );
};

export default AIAnalysis;
