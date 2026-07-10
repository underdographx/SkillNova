import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CareerDetailPage from "./pages/CareerDetailPage";
import CareersListPage from "./pages/CareersListPage";
import AboutPage from "./pages/AboutPage";
import DeveloperPage from "./pages/DeveloperPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/career/:id" element={<CareerDetailPage />} />
      <Route path="/careers" element={<CareersListPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/developer" element={<DeveloperPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
