import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";
import SkillSelection from "../components/SkillSelection";
import AIAnalysis from "../components/AIAnalysis";
import TopRecommendations from "../components/TopRecommendations";
import AIInsights from "../components/AIInsights";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [scoredCareers, setScoredCareers] = useState([]);

  const handleAnalyze = () => {
    if (selectedSkills.length === 0) return;
    setShowRecommendations(false);
    setScoredCareers([]);
    setIsAnalyzing(true);
    // Smooth scroll to analysis
    setTimeout(() => {
      document.getElementById("analysis-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setShowRecommendations(true);
    setTimeout(() => {
      document.getElementById("recommendations-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCareersScored = (careers) => {
    setScoredCareers(careers);
  };

  return (
    <div className="home-page">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <StatsSection />
        
        <HowItWorks />
        
        <section className="home-section" id="skills">
          <div className="section-container">
            <div className="home-section-header">
              <h2 className="home-section-title">Step 1: Select Your Skills</h2>
              <p className="home-section-sub">Choose the skills you know or are interested in.</p>
            </div>
            <SkillSelection 
              selectedSkills={selectedSkills} 
              setSelectedSkills={setSelectedSkills} 
              onAnalyze={handleAnalyze} // Add analyze button directly in SkillSelection
            />
          </div>
        </section>

        {isAnalyzing && (
          <section className="home-section" id="analysis-section">
            <div className="section-container" style={{ maxWidth: "800px" }}>
              <div className="home-section-header">
                <h2 className="home-section-title">AI Analysis Engine</h2>
                <p className="home-section-sub">Our AI is analyzing your profile...</p>
              </div>
              <AIAnalysis 
                isAnalyzing={isAnalyzing}
                onComplete={handleAnalysisComplete} 
              />
            </div>
          </section>
        )}

        {showRecommendations && (
          <section className="home-section" id="recommendations-section">
            <div className="section-container">
              <div className="home-section-header">
                <h2 className="home-section-title">Top Career Matches</h2>
                <p className="home-section-sub">Based on our similarity engine analysis.</p>
              </div>
              <TopRecommendations 
                selectedSkills={selectedSkills} 
                isVisible={showRecommendations} 
                onCareersScored={handleCareersScored}
                onAnalyzeClick={handleAnalyze}
                isAnalyzing={isAnalyzing}
              />
            </div>
          </section>
        )}

        {showRecommendations && scoredCareers.length > 0 && (
          <AIInsights 
            selectedSkills={selectedSkills} 
            scoredCareers={scoredCareers} 
          />
        )}
        
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
