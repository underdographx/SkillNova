import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./StatsSection.css";

const Counter = ({ from, to, suffix, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      const currentVal = Math.floor(from + (to - from) * easeOut);
      
      setCount(currentVal);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <>{count}{suffix}</>;
};

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Career Paths",
    sub: "Curated career options",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    value: 30,
    suffix: "+",
    label: "Skills",
    sub: "In-demand skills mapped",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  {
    value: "AI",
    isString: true,
    label: "Recommendation Engine",
    sub: "Smart similarity matching",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
      </svg>
    )
  },
  {
    value: 100,
    suffix: "%",
    label: "Personalized",
    sub: "Tailored just for you",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    )
  }
];

const StatsSection = () => {
  const [hasInView, setHasInView] = useState(false);

  return (
    <section className="stats-section" id="stats">
      <div className="section-container">
        <motion.div 
          className="stats-container-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={() => setHasInView(true)}
          transition={{ duration: 0.5 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-icon-wrap">
                  <div className="stat-icon">{stat.icon}</div>
                </div>
                <div className="stat-content">
                  <div className="stat-value">
                    {stat.isString ? stat.value : (
                      hasInView ? <Counter from={0} to={stat.value} suffix={stat.suffix} /> : "0" + stat.suffix
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sub">{stat.sub}</div>
                </div>
                {index < stats.length - 1 && <div className="stat-divider" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
