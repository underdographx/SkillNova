import React, { useState, useEffect } from "react";
import "./Navbar.css";

// Minimal Compass Logo SVG (FloraAI style, no robots/brains)
const CompassLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Ring */}
    <circle cx="16" cy="16" r="14" stroke="#FF2A7A" strokeWidth="2" strokeOpacity="0.2"/>
    <circle cx="16" cy="16" r="10" stroke="#FF2A7A" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2"/>
    
    {/* Compass Needles */}
    <path d="M16 4L20 16L16 28L12 16L16 4Z" fill="url(#grad1)"/>
    
    {/* Center Dot */}
    <circle cx="16" cy="16" r="2.5" fill="#070B14" stroke="#FF2A7A" strokeWidth="1.5"/>

    <defs>
      <linearGradient id="grad1" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF2A7A" />
        <stop offset="100%" stopColor="#D41A5C" stopOpacity="0.6"/>
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Basic scroll spy for active section highlight
      const sections = ["home", "how-it-works", "skills", "about"];
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    // If not on homepage, navigate to home first (for a complete app you'd handle routing)
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="/#home" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
          <div className="logo-icon">
            <CompassLogo />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">SkillNova</span>
            <span className="nav-brand-sub">AI Career Guidance</span>
          </div>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className={`nav-link ${activeSection === "how-it-works" ? "active" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }}
          >
            Pipeline
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollTo("skills"); }}
          >
            Analyze with AI
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          >
            About
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
