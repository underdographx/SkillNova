import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import "./DeveloperPage.css";

const DeveloperPage = () => (
  <div className="developer-page">
    <Navbar />
    <main>
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default DeveloperPage;
