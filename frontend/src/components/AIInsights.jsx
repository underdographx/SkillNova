import { motion } from "framer-motion";
import { generateAIInsights } from "../utils/aiEngine";
import "./AIInsights.css";

const AIInsights = ({ selectedSkills, scoredCareers }) => {
  const insights = generateAIInsights(selectedSkills, scoredCareers);
  if (!insights) return null;

  const topCareer = scoredCareers[0];
  const strength = Math.max(12, insights.careerReadiness);

  return (
    <section className="insights-section">
      <div className="section-container">
        <motion.div
          className="insights-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="insights-header">
            <div>
              <span className="section-eyebrow">AI report</span>
              <h2 className="insights-title">Your Skill Insights</h2>
              <p className="insights-sub">A compact report that explains where you are strong and what to learn next.</p>
            </div>
            <div className="readiness-meter" style={{ "--readiness": `${strength}%` }}>
              <strong>{insights.careerReadiness}%</strong>
              <span>Overall readiness</span>
            </div>
          </div>

          <div className="insights-grid">
            <div className="insight-block wide">
              <span className="insight-block-label">Best career trend</span>
              <h3>{insights.topMatch}</h3>
              <p>{topCareer?.futureScope || "Growing"} market outlook with {topCareer?.demand || "high"} demand.</p>
              <div className="trend-bars">
                {[62, 78, 70, 88, 82, 94].map((value, index) => (
                  <span key={index} style={{ height: `${value}%` }} />
                ))}
              </div>
            </div>

            <div className="insight-block">
              <span className="insight-block-label">Strengths</span>
              <div className="insight-list">
                {insights.strengths.map((skill) => <span className="insight-token good" key={skill}>{skill}</span>)}
              </div>
            </div>

            <div className="insight-block">
              <span className="insight-block-label">Weaknesses</span>
              <div className="insight-list">
                {insights.gaps.length > 0
                  ? insights.gaps.map((skill) => <span className="insight-token gap" key={skill}>{skill}</span>)
                  : <span className="insight-token good">No major gaps</span>}
              </div>
            </div>

            <div className="insight-block">
              <span className="insight-block-label">Suggested skills</span>
              <div className="insight-list">
                {topCareer?.missingSkills?.slice(0, 4).map((skill) => <span className="insight-token" key={skill}>{skill}</span>)}
              </div>
            </div>

            <div className="insight-block path">
              <span className="insight-block-label">Next learning path</span>
              <h3>{insights.nextSkill}</h3>
              <p>Prioritize this skill first. It has the highest near-term impact on your strongest career match.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInsights;
