import { motion } from "framer-motion";
import "./AboutSection.css";

const infoCards = [
  ["Education", "Diploma in Computer Engineering", "M7 4 2 7l10-5 10 5-10 5L2 11"],
  ["Focus", "AI • Web Dev\nUI/UX • Problem Solving", "m8 8-4 4 4 4m8-8 4 4-4 4"],
  ["Goal", "Building intelligent\n& impactful solutions", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"],
];

const skills = [
  ["React.js", "⚛"],
  ["JavaScript", "JS"],
  ["Python", "🐍"],
  ["HTML5", "5"],
  ["CSS3", "3"],
  ["Tailwind CSS", "~"],
  ["Git", "◆"],
  ["GitHub", "GH"],
  ["Artificial Intelligence", "AI"],
  ["Machine Learning", "ML"],
  ["Data Structures", "DB"],
  ["Problem Solving", "💡"],
  ["Vite", "⚡"],
];

const socials = [
  ["GitHub", "https://github.com/underdographx", "M12 .7a11.3 11.3 0 0 0-3.57 22.03c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .1 2.63.72 3.25-.9.1-.73.4-1.22.72-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16A10.7 10.7 0 0 1 12 3.88c.96 0 1.93.13 2.84.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.27-5.15 5.55.41.35.77 1.04.77 2.1v3.42c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z"],
  ["LinkedIn", "https://www.linkedin.com/in/anuja-yadav-5392a6376/", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  ["Instagram", "https://www.instagram.com/anujay_13", "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-2.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"],
  ["Email", "mailto:anujaay013@gmail.com", "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4 8 5 8-5"],
];

const Icon = ({ path }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const FilledIcon = ({ path }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

const AboutSection = () => (
  <section className="about-section" id="developer">
    <div className="section-container">
      <motion.div
        className="developer-showcase"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <aside className="developer-left">
          <div className="developer-portrait">
            <img src="/assets/anuja-yadav-profile.jpeg" alt="Anuja Yadav" />
          </div>

          <div className="developer-badge">
            <Icon path="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            ABOUT THE DEVELOPER
          </div>

          <h2>Anuja Yadav</h2>
          <p className="developer-title">Computer Engineering Student<br />AI & Full Stack Developer</p>

          <div className="developer-quote">
            Passionate about building intelligent applications that combine clean design with practical functionality.
          </div>

          <div className="developer-socials">
            {socials.map(([label, href, path]) => (
              <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" key={label}>
                <FilledIcon path={path} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="developer-right">
          <div className="developer-section-heading">
            <Icon path="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <h3>ABOUT ME</h3>
          </div>
          <p className="developer-about-copy">
            I'm a Computer Engineering student passionate about Artificial Intelligence, Web Development, and creating modern, user-friendly digital experiences. I love turning ideas into reality through code.
          </p>

          <div className="developer-info-grid">
            {infoCards.map(([title, text, icon]) => (
              <article className="developer-info-card" key={title}>
                <Icon path={icon} />
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="developer-section-heading skills-heading">
            <Icon path="m8 8-4 4 4 4m8-8 4 4-4 4" />
            <h3>TECHNICAL SKILLS</h3>
          </div>

          <div className="developer-skill-list">
            {skills.map(([skill, icon]) => (
              <span className="developer-skill" key={skill}>
                <em>{icon}</em>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
