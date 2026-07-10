import "./AboutProject.css";

const features = [
  {
    icon: "⚡",
    iconBg: "purple",
    title: "AI-Powered Engine",
    desc: "Our advanced AI analyzes your skills using intelligent algorithms to deliver accurate career matches.",
  },
  {
    icon: "🎯",
    iconBg: "orange",
    title: "Smart Matching",
    desc: "We compare your skills with 20+ technology career profiles using similarity scoring.",
  },
  {
    icon: "📊",
    iconBg: "pink",
    title: "Personalized Insights",
    desc: "Get detailed insights about your strengths, missing skills, and recommended next steps.",
  },
  {
    icon: "🗺️",
    iconBg: "purple",
    title: "Actionable Roadmaps",
    desc: "Receive personalized learning roadmaps to bridge skill gaps and accelerate your growth.",
  },
  {
    icon: "💻",
    iconBg: "blue",
    title: "For Every Learner",
    desc: "Whether you're a student, developer, or professional, SkillNova is for you.",
  },
  {
    icon: "✅",
    iconBg: "green",
    title: "Trusted & Reliable",
    desc: "Built with data-driven models to ensure reliable, unbiased, and transparent results.",
  },
];

const stats = [
  { icon: "👥", value: "10K+", label: "Users Empowered" },
  { icon: "🎯", value: "95%", label: "Accuracy Rate" },
  { icon: "📋", value: "20+", label: "Career Profiles" },
  { icon: "⚙️", value: "50+", label: "Technologies Covered" },
];

const accentColors = {
  purple: "rgba(139, 92, 246, 0.15)",
  orange: "rgba(255, 140, 66, 0.15)",
  pink: "rgba(236, 72, 153, 0.15)",
  blue: "rgba(59, 130, 246, 0.15)",
  green: "rgba(34, 197, 94, 0.15)",
};

const accentBorders = {
  purple: "rgba(139, 92, 246, 0.25)",
  orange: "rgba(255, 140, 66, 0.25)",
  pink: "rgba(236, 72, 153, 0.25)",
  blue: "rgba(59, 130, 246, 0.25)",
  green: "rgba(34, 197, 94, 0.25)",
};

const underlineColors = {
  purple: "#8b5cf6",
  orange: "#ff7a2f",
  pink: "#ec4899",
  blue: "#3b82f6",
  green: "#22c55e",
};

const AboutProject = () => {
  return (
    <section className="home-section" id="about">
      <div className="section-container">
        <div className="about-project-layout">
          {/* Left Column */}
          <div className="about-project-left">
            <div className="about-project-badge">
              <span>📦</span> ABOUT SKILLNOVA
            </div>
            <h2 className="about-project-heading">
              Empowering You to Discover the Right{" "}
              <span className="about-project-accent">Tech Career</span>
            </h2>
            <p className="about-project-desc">
              SkillNova is an AI-powered career recommendation platform that helps you discover the technology career that best matches your skills, interests, and potential.
            </p>
            <div className="about-project-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <span className="about-stat-icon">{stat.icon}</span>
                  <strong className="about-stat-value">{stat.value}</strong>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="about-project-features">
            {features.map((f) => (
              <div key={f.title} className="about-feature-card">
                <div
                  className="about-feature-icon"
                  style={{
                    background: accentColors[f.iconBg],
                    borderColor: accentBorders[f.iconBg],
                  }}
                >
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div
                  className="about-feature-line"
                  style={{ background: underlineColors[f.iconBg] }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
