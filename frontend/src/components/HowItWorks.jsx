import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "1",
    title: "Select Skills",
    desc: "Choose the skills you know from our comprehensive database",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    number: "2",
    title: "AI Matching",
    desc: "Our AI analyzes and intelligently matches your skills",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16h4c1.1 0 2-1 2-2V6c0-1.1-.9-2-2-2H2"></path>
        <path d="M22 16h-4c-1.1 0-2-1-2-2V6c0-1.1.9-2 2-2h4"></path>
        <path d="M12 2v20"></path>
        <path d="M6 10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2"></path>
        <path d="M8 14h8"></path>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Similarity Score",
    desc: "Calculate weighted similarity with career profiles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Career Recommendation",
    desc: "Get top career recommendations matched to your profile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
  },
];

const HowItWorks = () => (
  <section className="hiw-section" id="how-it-works">
    <div className="section-container">
      <div className="hiw-header">
        <h2 className="hiw-title">How It Works</h2>
      </div>
      <div className="hiw-steps">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="hiw-step">
              <div className="hiw-step-number">{step.number}</div>
              <div className="hiw-step-icon-wrap">{step.icon}</div>
              <div className="hiw-step-content">
                <div className="hiw-step-title">{step.title}</div>
                <div className="hiw-step-desc">{step.desc}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="hiw-arrow">
                <svg className="hiw-arrow-svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path d="M0 10 H20 M16 4 L22 10 L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
