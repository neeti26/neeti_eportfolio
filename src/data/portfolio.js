export const personalInfo = {
  name: "Neeti Malu",
  title: "Data Scientist & ML Engineer",
  tagline: "Turning raw data into real decisions.",
  subtitle: "I build intelligent systems that detect fraud, generate synthetic data, and map human emotion — all powered by Python, ML, and a relentless curiosity for what data can do.",
  email: "neetimalu26@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/neeti-malu/",
  github: "https://github.com/neeti26",
  location: "Pune, India",
  availability: "Open to Opportunities",
};

export const stats = [
  { value: "9.4", label: "GPA", suffix: "/10" },
  { value: "30", label: "Accuracy Boost", suffix: "%" },
  { value: "0.94", label: "F1-Score", suffix: "" },
  { value: "6+", label: "Projects", suffix: "" },
];

export const experience = [
  {
    company: "CYNKEX",
    role: "Cyber Intern",
    period: "Jan 2026 – Present",
    type: "Internship",
    bullets: [
      "Automating GRC (Governance, Risk & Compliance) workflows to reduce manual audit effort and improve policy enforcement consistency.",
      "Building risk management systems that surface real-time threat indicators and map them to compliance frameworks.",
      "Collaborating with the security team to design dashboards that track risk posture across infrastructure assets.",
    ],
    tags: ["GRC", "Risk Management", "Compliance Automation", "Cybersecurity", "Python"],
  },
  {
    company: "Infosys Springboard",
    role: "Artificial Intelligence Intern",
    period: "Oct 2025 – Dec 2025",
    type: "Internship",
    bullets: [
      "Developed a Smart Traffic Management System using YOLOv8 and TensorFlow for real-time ANPR and vehicle classification.",
      "Integrated OpenCV for high-accuracy vehicle tracking and license plate recognition.",
      "Built interactive dashboards for city-scale traffic density visualization.",
    ],
    tags: ["YOLOv8", "TensorFlow", "OpenCV", "Python", "ANPR", "Computer Vision"],
  },
  {
    company: "NIT Trichy",
    role: "Data Analyst Intern",
    period: "Mar 2025 – Aug 2025",
    type: "Internship",
    bullets: [
      "Built ML models using Scikit-learn to detect fraudulent vehicle insurance claims, boosting accuracy by 30% through feature engineering and SMOTE.",
      "Enhanced model performance via hyperparameter tuning and cross-validation.",
      "Delivered weekly data reports and visual dashboards to stakeholders, enabling data-driven decision-making.",
    ],
    tags: ["Python", "Scikit-learn", "SMOTE", "Feature Engineering", "Dashboards"],
  },
  {
    company: "AdTech Digital",
    role: "Data Science Intern",
    period: "Dec 2024 – Jun 2025",
    type: "Internship",
    bullets: [
      "Analyzed campaign performance data and optimized Power BI dashboards, improving insight delivery and usability.",
      "Identified a 15% drop in user retention, providing actionable insights that redirected marketing strategies for better ROI.",
      "Automated Excel-based reporting workflows, reducing manual effort by 40%, and conducted A/B testing to guide budget allocation.",
    ],
    tags: ["Power BI", "A/B Testing", "Excel Automation", "Data Analysis", "ROI Optimization"],
  },
];

export const projects = [
  {
    title: "Vehicle Insurance Fraud Detection",
    subtitle: "POC",
    description: "A machine learning system to detect fraudulent vehicle insurance claims using ensemble classifiers. Achieved an F1-score of 0.94 with SMOTE-based class balancing and reduced false positives by 30%.",
    tags: ["Python", "Scikit-learn", "Random Forest", "SMOTE", "Matplotlib", "Seaborn"],
    github: "https://github.com/neeti26",
    demo: null,
    highlight: "F1-Score: 0.94 · False Positives ↓30%",
    icon: "🛡️",
    featured: true,
  },
  {
    title: "VAE-Powered Synthetic Data Generator",
    subtitle: "Intrusion Detection",
    description: "Developed a Variational Autoencoder (VAE) to generate synthetic network traffic data, addressing class imbalance in intrusion detection datasets. Improved anomaly detection accuracy by 25%.",
    tags: ["Python", "TensorFlow", "VAE", "Scikit-learn", "EDA", "Cybersecurity"],
    github: "https://github.com/neeti26/VAE-Powered-Synthetic-Data-Generator",
    demo: null,
    highlight: "Detection Accuracy ↑25%",
    icon: "🔐",
    featured: true,
  },
  {
    title: "PersonaSynth",
    subtitle: "Chat With Your AI Personality Twin",
    description: "A fully offline, privacy-friendly AI system that emulates a user's personality and communicates in their own voice. Integrated NLP and speech synthesis for personalized conversational responses.",
    tags: ["Python", "PyTorch", "Offline LLM", "NLP", "Speech Synthesis"],
    github: "https://github.com/neeti26/PersonaSynth",
    demo: null,
    highlight: "95% Personality Alignment Accuracy",
    icon: "🤖",
    featured: true,
  },
  {
    title: "Customer Emotion to Offer Mapper",
    subtitle: "NLP · Predictive Modeling",
    description: "Predictive model mapping customer emotions from text to optimal product/service offers. Increased targeted offer relevance by 20% through sentiment analysis and feature engineering.",
    tags: ["Python", "NLP", "Scikit-learn", "Pandas", "Sentiment Analysis"],
    github: "https://github.com/neeti26/emotion_offer_mapper_project",
    demo: null,
    highlight: "Offer Relevance ↑20%",
    icon: "💡",
    featured: false,
  },
  {
    title: "Live Polls & Quizzes DAO",
    subtitle: "Aptos Blockchain · Move Language",
    description: "Designed and deployed a decentralized application (DAO) on the Aptos blockchain for live polls and quizzes. Implemented smart contracts in Move for secure, tamper-proof poll management.",
    tags: ["Blockchain", "Move Language", "Aptos", "Smart Contracts", "DAO"],
    github: "https://github.com/neeti26/Test",
    demo: null,
    highlight: "Decentralized Governance",
    icon: "⛓️",
    featured: false,
  },
  {
    title: "Evolving Protocol Forge",
    subtitle: "React · Web3 · DAO Protocol Design",
    description: "Next-gen experimental protocol forge enabling dynamic DAO governance models and modular protocol creation. React-based futuristic UI with blockchain integration and evolving governance logic.",
    tags: ["React", "Web3", "DAO", "Blockchain", "Protocol Design"],
    github: "https://github.com/neeti26/Evolving-Protocol-Forge",
    demo: null,
    highlight: "Modular DAO Architecture",
    icon: "⚗️",
    featured: false,
  },
];

export const skills = {
  "Programming & Tools": [
    { name: "Python", level: 95 },
    { name: "SQL", level: 88 },
    { name: "Java", level: 72 },
    { name: "JavaScript", level: 70 },
    { name: "Git", level: 85 },
    { name: "AWS", level: 68 },
    { name: "Jupyter / Colab", level: 92 },
  ],
  "ML & Data Science": [
    { name: "Scikit-learn", level: 93 },
    { name: "TensorFlow", level: 80 },
    { name: "Pandas / NumPy", level: 95 },
    { name: "Matplotlib / Seaborn", level: 90 },
    { name: "SciPy", level: 78 },
    { name: "PyTorch", level: 72 },
  ],
  "Databases & Visualization": [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Power BI", level: 88 },
    { name: "Excel Dashboards", level: 90 },
  ],
  "Mathematics & Analysis": [
    { name: "Statistics & Probability", level: 90 },
    { name: "Linear Algebra", level: 85 },
    { name: "A/B Testing", level: 88 },
    { name: "Hypothesis Testing", level: 87 },
  ],
};

export const certifications = [
  { name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", issuer: "Oracle", date: "Oct 2025", badge: "🏅" },
  { name: "Amazon Web Services Technical Essentials", issuer: "AWS", date: "Oct 2025", badge: "☁️" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", date: "Oct 2025", badge: "☁️" },
  { name: "Accenture UK – Introduction To Technology Apprenticeship", issuer: "Accenture", date: "Jul 2025", badge: "💼" },
  { name: "Introducing Generative AI with AWS", issuer: "AWS", date: "Jun 2025", badge: "🤖" },
  { name: "Data Science Certification", issuer: "School of Internet Marketing, Pune", date: "Mar 2025", badge: "🎓" },
];

export const education = [
  {
    institution: "Bharati Vidyapeeth Deemed University, Pune",
    degree: "Bachelor of Computer Application",
    period: "Mar 2023 – May 2026",
    gpa: "8.95 / 10.0",
    coursework: ["Database Management", "Data Structures", "Machine Learning", "Business Analytics"],
  },
];
