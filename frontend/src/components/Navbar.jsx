import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.03c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .1 2.63.72 3.25-.9.1-.73.4-1.22.72-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16A10.7 10.7 0 0 1 12 3.88c.96 0 1.93.13 2.84.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.27-5.15 5.55.41.35.77 1.04.77 2.1v3.42c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z" />
  </svg>
);

const SparkLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2.5 14.7 9l6.8 3-6.8 3L12 21.5 9.3 15l-6.8-3 6.8-3L12 2.5Z" fill="#fff" opacity="0.9" />
    <path d="M19 2.5 20 5l2.5 1L20 7l-1 2.5L18 7l-2.5-1L18 5l1-2.5Z" fill="#fff" opacity="0.7" />
  </svg>
);

const navItems = [
  ["Home", "home"],
  ["Pipeline", "how-it-works"],
  ["Analyze with AI", "skills"],
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
      const current = navItems.reduce((acc, [, id]) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 120 ? id : acc;
      }, "home");
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="nav-shell">
        <Link className="nav-brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="nav-logo">
            <img src="/assets/skillnova_logo.svg" alt="SkillNova Logo" className="nav-logo-img" />
          </span>
          <span className="nav-brand-copy"><strong>SkillNova</strong></span>
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {label}
            </a>
          ))}
          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          >
            About
          </a>
          <a
            href="#developer"
            className={`nav-link ${activeSection === "developer" ? "active" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollTo("developer"); }}
          >
            About Developer
          </a>
        </div>

        <div className="nav-actions">
          <a className="nav-icon-link" href="https://github.com/underdographx/SkillNova" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <button className="nav-cta" onClick={() => scrollTo("skills")}>Get Started</button>
          <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
