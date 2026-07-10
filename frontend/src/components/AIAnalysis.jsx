import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./AIAnalysis.css";

const STEPS = [
  { text: "Initializing AI", detail: "Preparing recommendation pipeline", duration: 700 },
  { text: "Extracting Skills", detail: "Normalizing selected skill signals", duration: 900 },
  { text: "Creating User Profile", detail: "Building weighted preference vector", duration: 1000 },
  { text: "Calculating Similarity", detail: "Comparing against career profiles", duration: 1200 },
  { text: "Ranking Careers", detail: "Sorting by match and confidence", duration: 800 },
  { text: "Generating Insights", detail: "Writing strengths, gaps, and next path", duration: 900 },
  { text: "Finished", detail: "Recommendation report is ready", duration: 500 },
];

const AIAnalysis = ({ isAnalyzing, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isAnalyzing) return;

    if (currentStep < STEPS.length - 1) {
      timerRef.current = setTimeout(() => setCurrentStep((s) => s + 1), STEPS[currentStep]?.duration || 900);
    } else {
      timerRef.current = setTimeout(() => {
        setDone(true);
        setTimeout(() => onComplete?.(), 550);
      }, STEPS[currentStep]?.duration || 500);
    }

    return () => clearTimeout(timerRef.current);
  }, [isAnalyzing, currentStep, onComplete]);

  const progress = Math.round(((done ? STEPS.length : currentStep + 1) / STEPS.length) * 100);

  return (
    <motion.div
      className="ai-panel-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="ai-analysis-header">
        <div>
          <span className="ai-kicker">Live analysis</span>
          <h3>{done ? "Recommendations ready" : STEPS[currentStep]?.text}</h3>
          <p>{done ? "Your career report has been generated." : STEPS[currentStep]?.detail}</p>
        </div>
        <div className="ai-progress-ring" style={{ "--progress": `${progress}%` }}>
          <strong>{progress}%</strong>
        </div>
      </div>

      <div className="ai-master-progress">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="ai-steps">
        {STEPS.map((step, idx) => {
          const isCompleted = done || idx < currentStep;
          const isActive = !done && idx === currentStep;
          return (
            <div key={step.text} className={`ai-step ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}`}>
              <div className="ai-step-indicator">
                {isCompleted ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                ) : (
                  <span />
                )}
              </div>
              <div className="ai-step-content">
                <div className="ai-step-text">{step.text}</div>
                <p>{step.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AIAnalysis;
