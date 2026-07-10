import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";
import SkillSelection from "../components/SkillSelection";
import TopRecommendations from "../components/TopRecommendations";
import AIAnalysis from "../components/AIAnalysis";
import AboutSection from "../components/AboutSection";
import AboutProject from "../components/AboutProject";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [scoredCareers, setScoredCareers] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleSkillChange = (updater) => {
    setSelectedSkills(updater);
    setShowRecommendations(false);
    setSelectedCareer(null);
  };

  const handleAnalyze = () => {
    if (selectedSkills.length === 0) return;
    setIsAnalyzing(true);
    setShowRecommendations(false);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setShowRecommendations(true);
  };

  const handleCareersScored = (careers) => {
    setScoredCareers(careers);
    if (careers.length > 0 && !selectedCareer) {
      setSelectedCareer(careers[0]);
    }
  };

  return (
    <div className="home-page">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        
        <section className="home-dashboard-section" id="skills">
          <div className="section-container">
            {/* Full Width Skills Selection */}
            <div style={{ marginBottom: '40px' }}>
              <SkillSelection
                selectedSkills={selectedSkills}
                setSelectedSkills={handleSkillChange}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
              />
            </div>

            <div className="dashboard-2col-layout">
              {/* Column 1: Recommendations */}
              <div className="dashboard-col col-recommendations">
                <div className="dashboard-col-header">
                  <h3>Your Top Career Recommendations</h3>
                  <p>Based on your skills and our AI analysis</p>
                </div>
                {showRecommendations ? (
                  <TopRecommendations 
                    selectedSkills={selectedSkills} 
                    isVisible={true} 
                    onCareersScored={handleCareersScored}
                    onAnalyzeClick={handleAnalyze}
                    isAnalyzing={isAnalyzing}
                    onSelectCareer={setSelectedCareer}
                    activeCareerId={selectedCareer?.id}
                  />
                ) : isAnalyzing ? (
                  <AIAnalysis isAnalyzing={isAnalyzing} onComplete={handleAnalysisComplete} />
                ) : (
                  <div className="empty-state-panel">
                    <div className="empty-state-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                    <p className="empty-state-title">No recommendations yet</p>
                    <p>Select your skills above and click <strong>Find My Career</strong> to see your personalized career matches.</p>
                  </div>
                )}
              </div>

              {/* Column 2: Career Detail Pane */}
              <div className="dashboard-col col-details">
                <div className="dashboard-col-header">
                  <h3>Career Details</h3>
                  <p>In-depth look at your top match</p>
                </div>
                {selectedCareer ? (
                  <div className="career-detail-pane">
                    <div className="detail-header">
                      <div className="detail-header-main">
                        <div className="detail-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg></div>
                        <h2>{selectedCareer.title} <span className="match-badge">{selectedCareer.score}% Match</span></h2>
                      </div>
                    </div>
                    
                    <div className="detail-section">
                      <h4><span className="icon">👤</span> Overview</h4>
                      <p>{selectedCareer.desc}</p>
                    </div>

                    <div className="detail-section">
                      <h4><span className="icon">📝</span> Key Responsibilities</h4>
                      <ul>
                        <li>Design and develop AI models and algorithms</li>
                        <li>Train and fine-tune machine learning models</li>
                        <li>Work with large datasets to improve model performance</li>
                        <li>Deploy AI solutions into production</li>
                        <li>Collaborate with cross-functional teams</li>
                      </ul>
                    </div>
                    
                    <div className="detail-section">
                      <h4><span className="icon">🎯</span> Skills Required</h4>
                      <div className="skills-pill-list">
                        {selectedCareer.matchingSkills?.map(s => <span key={s} className="pill match">{s}</span>)}
                        {selectedCareer.missingSkills?.map(s => <span key={s} className="pill missing">{s}</span>)}
                      </div>
                    </div>

                    <div className="detail-section">
                      <h4><span className="icon">💰</span> Average Salary</h4>
                      <div className="salary-display">₹8 – ₹25 LPA<span className="muted">(India)</span></div>
                    </div>
                    
                    <button 
                      className="btn-primary w-full" 
                      style={{ marginTop: '8px' }}
                      onClick={() => navigate('/career/' + selectedCareer.id)}
                    >
                      Explore Career Roadmap
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                ) : (
                   <div className="empty-state-panel">
                     <div className="empty-state-icon">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/>
                       </svg>
                     </div>
                     <p className="empty-state-title">No career selected</p>
                     <p>Select a career from your recommendations to view details here.</p>
                   </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <AboutProject />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
