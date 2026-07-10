export const careerList = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    overview: "Builds, tests, and deploys scalable artificial intelligence models and infrastructure.",
    responsibilities: [
      "Develop scalable AI models",
      "Optimize machine learning pipelines",
      "Deploy models to production (MLOps)",
      "Collaborate with data scientists and engineers"
    ],
    skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "LLMs"],
    salary: "₹18,00,000 - ₹35,00,000",
    demand: "Extremely High",
    futureScope: "Exponential Growth",
    roadmap: [
      { step: "Fundamentals", desc: "Master Python and linear algebra." },
      { step: "Core ML", desc: "Learn Scikit-learn, TensorFlow, or PyTorch." },
      { step: "Deployment", desc: "Understand Docker, FastAPI, and Kubernetes." }
    ],
    resources: [
      { name: "DeepLearning.AI", url: "https://deeplearning.ai", icon: "🧠" },
      { name: "Hugging Face Course", url: "https://huggingface.co/course", icon: "🤗" }
    ]
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    overview: "Focuses on designing and implementing machine learning algorithms that allow systems to learn and improve.",
    responsibilities: [
      "Design machine learning systems",
      "Research and implement ML algorithms",
      "Perform statistical analysis",
      "Train and retrain models"
    ],
    skills: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "SQL", "AWS"],
    salary: "₹15,00,000 - ₹30,00,000",
    demand: "Very High",
    futureScope: "Excellent",
    roadmap: [
      { step: "Math & Stats", desc: "Calculus, Probability, and Statistics." },
      { step: "Algorithms", desc: "Supervised and unsupervised learning." },
      { step: "Cloud/MLOps", desc: "Deploying models using AWS SageMaker or Azure ML." }
    ],
    resources: [
      { name: "Coursera ML", url: "https://coursera.org", icon: "📘" },
      { name: "Fast.ai", url: "https://fast.ai", icon: "🚀" }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    overview: "Analyzes complex data to extract actionable insights and solve business problems.",
    responsibilities: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis (EDA)",
      "Building predictive models",
      "Creating data visualizations"
    ],
    skills: ["Python", "R", "Data Analysis", "SQL", "Tableau", "Statistics", "Machine Learning"],
    salary: "₹12,00,000 - ₹25,00,000",
    demand: "High",
    futureScope: "Stable Growth",
    roadmap: [
      { step: "Data Wrangling", desc: "Master Pandas, SQL, and data cleaning." },
      { step: "Visualization", desc: "Learn Tableau, Power BI, Matplotlib." },
      { step: "Modeling", desc: "Learn regression, classification, clustering." }
    ],
    resources: [
      { name: "Kaggle", url: "https://kaggle.com", icon: "📊" },
      { name: "DataCamp", url: "https://datacamp.com", icon: "💻" }
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    overview: "Applies engineering principles to software creation, designing robust and scalable systems.",
    responsibilities: [
      "Design system architecture",
      "Write clean, maintainable code",
      "Code reviews and testing",
      "Optimize application performance"
    ],
    skills: ["Java", "C++", "Python", "Data Structures", "Algorithms", "Git", "System Design"],
    salary: "₹10,00,000 - ₹40,00,000",
    demand: "Very High",
    futureScope: "Evergreen",
    roadmap: [
      { step: "DSA", desc: "Master Data Structures and Algorithms." },
      { step: "System Design", desc: "Understand scalable architectures." },
      { step: "Project Building", desc: "Build end-to-end applications." }
    ],
    resources: [
      { name: "LeetCode", url: "https://leetcode.com", icon: "⌨️" },
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", icon: "🏗️" }
    ]
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    overview: "Creates the user interface and interactive elements of websites and web applications.",
    responsibilities: [
      "Build responsive UIs",
      "Consume REST APIs",
      "Optimize web performance",
      "Ensure cross-browser compatibility"
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    salary: "₹6,00,000 - ₹20,00,000",
    demand: "High",
    futureScope: "Stable",
    roadmap: [
      { step: "Basics", desc: "HTML, CSS, modern JavaScript (ES6+)." },
      { step: "Framework", desc: "Master React or Vue.js." },
      { step: "Advanced", desc: "State management, Next.js, Webpack/Vite." }
    ],
    resources: [
      { name: "Frontend Masters", url: "https://frontendmasters.com", icon: "🎨" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", icon: "📚" }
    ]
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    overview: "Builds and maintains the server-side logic, databases, and APIs that power applications.",
    responsibilities: [
      "Develop RESTful/GraphQL APIs",
      "Design database schemas",
      "Implement security and data protection",
      "Scale server infrastructure"
    ],
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Express", "Docker"],
    salary: "₹8,00,000 - ₹25,00,000",
    demand: "High",
    futureScope: "Stable",
    roadmap: [
      { step: "Server Language", desc: "Node.js, Python (Django/Flask), or Java (Spring)." },
      { step: "Databases", desc: "SQL (Postgres) and NoSQL (MongoDB)." },
      { step: "Architecture", desc: "Microservices, caching (Redis), Docker." }
    ],
    resources: [
      { name: "Backend Roadmap", url: "https://roadmap.sh/backend", icon: "🗺️" }
    ]
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    overview: "Handles both frontend and backend development, delivering complete web applications.",
    responsibilities: [
      "Develop client-side and server-side architecture",
      "Manage databases and APIs",
      "Deploy and maintain applications",
      "Ensure application responsiveness"
    ],
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "HTML/CSS"],
    salary: "₹10,00,000 - ₹28,00,000",
    demand: "Very High",
    futureScope: "Evergreen",
    roadmap: [
      { step: "Frontend", desc: "React and UI frameworks." },
      { step: "Backend", desc: "Node.js, Express, Databases." },
      { step: "Integration", desc: "Connecting APIs, authentication, deployment." }
    ],
    resources: [
      { name: "FreeCodeCamp", url: "https://freecodecamp.org", icon: "🔥" }
    ]
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    overview: "Designs, deploys, and manages scalable cloud infrastructure and services.",
    responsibilities: [
      "Migrate applications to the cloud",
      "Manage cloud environments (AWS/Azure/GCP)",
      "Optimize cloud costs",
      "Ensure cloud security"
    ],
    skills: ["AWS", "Azure", "Linux", "Docker", "Kubernetes", "Terraform", "Networking"],
    salary: "₹12,00,000 - ₹30,00,000",
    demand: "Very High",
    futureScope: "Growing",
    roadmap: [
      { step: "Networking & OS", desc: "Linux internals, TCP/IP, DNS." },
      { step: "Cloud Provider", desc: "Master AWS, Azure, or Google Cloud." },
      { step: "Infrastructure as Code", desc: "Learn Terraform, CloudFormation." }
    ],
    resources: [
      { name: "A Cloud Guru", url: "https://acloudguru.com", icon: "☁️" }
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    overview: "Protects IT infrastructure and data from cyber threats, attacks, and vulnerabilities.",
    responsibilities: [
      "Monitor networks for security breaches",
      "Conduct penetration testing",
      "Respond to security incidents",
      "Implement security protocols"
    ],
    skills: ["Network Security", "Linux", "Penetration Testing", "Ethical Hacking", "Firewalls", "Python"],
    salary: "₹8,00,000 - ₹22,00,000",
    demand: "High",
    futureScope: "Crucial/Growing",
    roadmap: [
      { step: "Fundamentals", desc: "Networking (CompTIA Network+), OS security." },
      { step: "Security Concepts", desc: "CompTIA Security+, risk management." },
      { step: "Specialization", desc: "Pen testing, SOC analysis, incident response." }
    ],
    resources: [
      { name: "TryHackMe", url: "https://tryhackme.com", icon: "🛡️" },
      { name: "HackTheBox", url: "https://hackthebox.com", icon: "📦" }
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    overview: "Bridges development and operations to automate CI/CD pipelines and infrastructure.",
    responsibilities: [
      "Build and maintain CI/CD pipelines",
      "Automate infrastructure provisioning",
      "Monitor system health",
      "Improve deployment frequency"
    ],
    skills: ["Docker", "Kubernetes", "Linux", "CI/CD", "AWS", "GitHub Actions", "Jenkins"],
    salary: "₹14,00,000 - ₹35,00,000",
    demand: "Very High",
    futureScope: "Excellent",
    roadmap: [
      { step: "OS & Scripting", desc: "Linux, Bash, Python." },
      { step: "Containers", desc: "Docker, Kubernetes." },
      { step: "CI/CD & IaC", desc: "Jenkins, GitHub Actions, Terraform." }
    ],
    resources: [
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops", icon: "♾️" }
    ]
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    overview: "Designs user-friendly interfaces and improves the overall user experience of digital products.",
    responsibilities: [
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Design high-fidelity UI mockups",
      "Collaborate with frontend developers"
    ],
    skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Interaction Design", "Adobe XD"],
    salary: "₹7,00,000 - ₹18,00,000",
    demand: "High",
    futureScope: "Stable",
    roadmap: [
      { step: "UX Principles", desc: "User psychology, research, wireframing." },
      { step: "UI Design", desc: "Color theory, typography, spacing." },
      { step: "Tools", desc: "Master Figma and prototyping." }
    ],
    resources: [
      { name: "Nielsen Norman Group", url: "https://nngroup.com", icon: "🧠" }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    overview: "Translates numbers and data into plain English to help businesses make better decisions.",
    responsibilities: [
      "Query databases to extract data",
      "Create dashboards and reports",
      "Identify trends and patterns",
      "Present findings to stakeholders"
    ],
    skills: ["SQL", "Excel", "Tableau", "Power BI", "Python", "Data Analysis", "Statistics"],
    salary: "₹6,00,000 - ₹15,00,000",
    demand: "High",
    futureScope: "Stable",
    roadmap: [
      { step: "Spreadsheets & SQL", desc: "Advanced Excel, writing complex SQL queries." },
      { step: "BI Tools", desc: "Tableau or Power BI for dashboards." },
      { step: "Python/R", desc: "Basic scripting for data manipulation." }
    ],
    resources: [
      { name: "DataCamp", url: "https://datacamp.com", icon: "📊" }
    ]
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    overview: "Acts as a bridge between IT and business, analyzing business needs and designing IT solutions.",
    responsibilities: [
      "Gather business requirements",
      "Document processes and workflows",
      "Communicate with stakeholders",
      "Facilitate project delivery"
    ],
    skills: ["Requirements Gathering", "Agile/Scrum", "Data Analysis", "SQL", "Communication", "Jira"],
    salary: "₹7,00,000 - ₹16,00,000",
    demand: "High",
    futureScope: "Stable",
    roadmap: [
      { step: "Business Fundamentals", desc: "Process mapping, requirements gathering." },
      { step: "Agile & Tools", desc: "Scrum, Jira, Confluence." },
      { step: "Tech Basics", desc: "Basic SQL, API understanding." }
    ],
    resources: [
      { name: "IIBA", url: "https://iiba.org", icon: "📈" }
    ]
  },
  {
    id: "game-developer",
    title: "Game Developer",
    overview: "Designs and develops video games for PC, console, or mobile platforms.",
    responsibilities: [
      "Program game logic and mechanics",
      "Optimize graphics and performance",
      "Implement AI and physics",
      "Fix bugs and polish gameplay"
    ],
    skills: ["Unity", "Unreal Engine", "C#", "C++", "Math/Physics", "3D Modeling Basics"],
    salary: "₹5,00,000 - ₹18,00,000",
    demand: "Medium",
    futureScope: "Growing with VR/AR",
    roadmap: [
      { step: "Programming", desc: "C# (Unity) or C++ (Unreal)." },
      { step: "Engine Basics", desc: "Learn Unity or Unreal Engine." },
      { step: "Game Math", desc: "Vectors, matrices, physics." }
    ],
    resources: [
      { name: "Unity Learn", url: "https://learn.unity.com", icon: "🎮" }
    ]
  },
  {
    id: "blockchain-developer",
    title: "Blockchain Developer",
    overview: "Develops decentralized applications (dApps) and smart contracts.",
    responsibilities: [
      "Write and audit smart contracts",
      "Build Web3 interfaces",
      "Design blockchain architecture",
      "Ensure cryptographic security"
    ],
    skills: ["Solidity", "Smart Contracts", "Web3.js", "Cryptography", "JavaScript", "Go"],
    salary: "₹12,00,000 - ₹35,00,000",
    demand: "Medium/Niche",
    futureScope: "High Potential",
    roadmap: [
      { step: "Cryptography", desc: "Hashing, public key cryptography." },
      { step: "Smart Contracts", desc: "Learn Solidity and Ethereum." },
      { step: "Web3 Integration", desc: "Connect frontend via Web3.js/Ethers.js." }
    ],
    resources: [
      { name: "CryptoZombies", url: "https://cryptozombies.io", icon: "🧟" }
    ]
  },
  {
    id: "database-administrator",
    title: "Database Administrator (DBA)",
    overview: "Ensures databases run efficiently and are secure from unauthorized access.",
    responsibilities: [
      "Install and configure databases",
      "Optimize query performance",
      "Manage backups and recovery",
      "Ensure data security and compliance"
    ],
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Linux", "Database Tuning"],
    salary: "₹8,00,000 - ₹20,00,000",
    demand: "Stable",
    futureScope: "Evolving to Cloud DBA",
    roadmap: [
      { step: "RDBMS Basics", desc: "Deep dive into SQL, normalization." },
      { step: "Administration", desc: "Backup, recovery, user management." },
      { step: "Performance Tuning", desc: "Indexes, execution plans, optimization." }
    ],
    resources: [
      { name: "PostgreSQL Docs", url: "https://postgresql.org/docs", icon: "🐘" }
    ]
  },
  {
    id: "embedded-engineer",
    title: "Embedded Systems Engineer",
    overview: "Writes software that controls physical hardware and IoT devices.",
    responsibilities: [
      "Write firmware in C/C++",
      "Debug hardware-software interfaces",
      "Optimize for power and memory",
      "Design RTOS applications"
    ],
    skills: ["Embedded C", "C++", "IoT", "Microcontrollers", "RTOS", "Hardware Debugging"],
    salary: "₹7,00,000 - ₹22,00,000",
    demand: "High",
    futureScope: "Growing with IoT",
    roadmap: [
      { step: "C/C++", desc: "Master low-level programming." },
      { step: "Hardware", desc: "Understand microcontrollers, sensors, communication protocols (I2C, SPI)." },
      { step: "RTOS", desc: "Real-time operating systems concepts." }
    ],
    resources: [
      { name: "Hackaday", url: "https://hackaday.com", icon: "🔧" }
    ]
  },
  {
    id: "qa-engineer",
    title: "QA / Test Engineer",
    overview: "Ensures software quality by writing automated tests and performing manual testing.",
    responsibilities: [
      "Write automated test scripts",
      "Perform regression and load testing",
      "Identify and document bugs",
      "Integrate tests into CI/CD pipelines"
    ],
    skills: ["QA Testing", "Selenium", "Jest", "Python", "Java", "CI/CD"],
    salary: "₹6,00,000 - ₹18,00,000",
    demand: "High",
    futureScope: "Stable (Shift to SDET)",
    roadmap: [
      { step: "Manual Testing", desc: "Test cases, bug reporting." },
      { step: "Automation Basics", desc: "Learn Selenium, Cypress, or Playwright." },
      { step: "Advanced QA", desc: "API testing, performance testing, CI/CD integration." }
    ],
    resources: [
      { name: "TestAutomationUniversity", url: "https://testautomationu.applitools.com", icon: "🎓" }
    ]
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    overview: "Designs, implements, and manages computer networks for organizations.",
    responsibilities: [
      "Configure routers and switches",
      "Monitor network performance",
      "Troubleshoot connectivity issues",
      "Implement network security"
    ],
    skills: ["Networking", "Cisco", "TCP/IP", "Firewalls", "Linux", "Python"],
    salary: "₹5,00,000 - ₹15,00,000",
    demand: "Stable",
    futureScope: "Evolving to Cloud Networking",
    roadmap: [
      { step: "Fundamentals", desc: "CompTIA Network+, OSI Model." },
      { step: "Routing & Switching", desc: "CCNA certification." },
      { step: "Network Automation", desc: "Python, Ansible for networks." }
    ],
    resources: [
      { name: "Cisco Learning", url: "https://learningnetwork.cisco.com", icon: "🌐" }
    ]
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    overview: "Creates applications for iOS and Android devices.",
    responsibilities: [
      "Develop cross-platform or native apps",
      "Integrate REST APIs",
      "Optimize app performance",
      "Publish apps to App Store/Play Store"
    ],
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "iOS Development", "Android Development"],
    salary: "₹8,00,000 - ₹24,00,000",
    demand: "High",
    futureScope: "Stable",
    roadmap: [
      { step: "Choose Path", desc: "Native (Swift/Kotlin) or Cross-platform (Flutter/React Native)." },
      { step: "UI & State", desc: "Build responsive UIs, manage application state." },
      { step: "Deployment", desc: "App store guidelines, publishing." }
    ],
    resources: [
      { name: "Flutter Docs", url: "https://flutter.dev/docs", icon: "📱" }
    ]
  }
];

export const careers = careerList.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});
