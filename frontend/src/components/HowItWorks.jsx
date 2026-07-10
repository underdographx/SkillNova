import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  {
    num: 1,
    title: "Select Your Skills",
    desc: "Choose the skills you have",
    connectorIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>
    )
  },
  {
    num: 2,
    title: "AI Matching",
    desc: "Our AI analyzes and matches your skills",
    connectorIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    )
  },
  {
    num: 3,
    title: "Similarity Score",
    desc: "Calculate similarity with career profiles",
    connectorIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    )
  },
  {
    num: 4,
    title: "Best Careers",
    desc: "Get top career recommendations"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const HowItWorks = () => {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="section-container">
        <motion.div 
          className="hiw-container-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hiw-title">How It Works</h2>
          
          <motion.div 
            className="hiw-steps-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.num}>
                <motion.div className="hiw-step-card" variants={itemVariants}>
                  <div className="hiw-step-num">{step.num}</div>
                  <h3 className="hiw-step-title">{step.title}</h3>
                  <p className="hiw-step-desc">{step.desc}</p>
                </motion.div>
                
                {step.connectorIcon && (
                  <motion.div className="hiw-connector-icon" variants={itemVariants}>
                    {step.connectorIcon}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
