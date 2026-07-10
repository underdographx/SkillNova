// Mapping skills to weights (1-10) indicating their overall impact in AI recommendation matching
export const skillWeights = {
  // Core Programming (High weight as they are foundational)
  "Python": 8, "JavaScript": 7, "Java": 7, "C++": 7, "Go": 6, "TypeScript": 6,
  
  // AI/ML (Very High weight for AI careers)
  "Machine Learning": 10, "Deep Learning": 10, "TensorFlow": 9, "PyTorch": 9, 
  "NLP": 9, "Computer Vision": 9, "LLMs": 10,
  
  // Data (High weight)
  "Data Analysis": 8, "Statistics": 7, "SQL": 8, "Pandas": 6, "NumPy": 6,

  // Web (High weight for fullstack/frontend/backend)
  "React": 8, "Node.js": 8, "HTML/CSS": 5, "Next.js": 7, "Django": 7,

  // Cloud/DevOps
  "Docker": 7, "Kubernetes": 8, "AWS": 8, "CI/CD": 7, "Linux": 6,

  // Default weight for any unlisted skill
  "default": 3
};

/**
 * Calculates weighted similarity between selected skills and career required skills
 * @param {string[]} selectedSkills - Skills chosen by the user
 * @param {string[]} careerSkills - Skills required for the career
 * @returns {number} Score from 0 to 100
 */
export const calculateWeightedSimilarity = (selectedSkills, careerSkills) => {
  if (!selectedSkills || selectedSkills.length === 0 || !careerSkills || careerSkills.length === 0) return 0;
  
  const normalize = (s) => s.toLowerCase().trim();
  const selectedNorm = selectedSkills.map(normalize);

  let totalWeightPossible = 0;
  let earnedWeight = 0;

  careerSkills.forEach(reqSkill => {
    const normReq = normalize(reqSkill);
    // Find original casing for weight lookup, or use default
    const weight = skillWeights[reqSkill] || skillWeights["default"];
    totalWeightPossible += weight;

    // Check if user has this skill (exact or substring match for robustness)
    if (selectedNorm.some(s => s === normReq || s.includes(normReq) || normReq.includes(s))) {
      earnedWeight += weight;
    }
  });

  if (totalWeightPossible === 0) return 0;
  
  let score = Math.round((earnedWeight / totalWeightPossible) * 100);
  return Math.min(100, score);
};

export const getMatchedSkills = (selectedSkills, careerSkills) => {
  if (!selectedSkills || selectedSkills.length === 0) return [];
  const normalize = (s) => s.toLowerCase().trim();
  const selectedNorm = selectedSkills.map(normalize);
  
  return careerSkills.filter(reqSkill => {
    const normReq = normalize(reqSkill);
    return selectedNorm.some(s => s === normReq || s.includes(normReq) || normReq.includes(s));
  });
};

export const getMissingSkills = (selectedSkills, careerSkills) => {
  const matched = getMatchedSkills(selectedSkills, careerSkills);
  return careerSkills.filter(s => !matched.includes(s));
};

export const generateAIInsights = (selectedSkills, scoredCareers) => {
  if (!selectedSkills || selectedSkills.length === 0 || !scoredCareers || scoredCareers.length === 0) {
    return null;
  }

  const topCareer = scoredCareers[0];
  const missing = getMissingSkills(selectedSkills, topCareer.skills);
  
  return {
    careerReadiness: topCareer.score,
    strengths: selectedSkills.slice(0, 5),
    gaps: missing.slice(0, 5),
    nextSkill: missing.length > 0 ? missing[0] : "Advanced Projects",
    topMatch: topCareer.title
  };
};
