export const personalInfo = {
  name: "Ranjith LK",
  title: "AI Engineer & Full Stack Developer",
  subtitle: "M.Sc Decision and Computing Sciences",
  phone: "+91 9489766467",
  email: "ranjithsabapathy2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/ranjith-lk",
  github: "https://github.com/Ranjith352",
  githubUsername: "Ranjith352",
  linkedinName: "Ranjith LK",
  location: "Tamil Nadu, India",
  resumeUrl: "/Ranjith_LK_Resume.pdf",
  avatar: "/images/ranjith_avatar.jpg",
  bio: "Passionate and motivated AI Engineer & Full Stack Developer pursuing M.Sc in Decision and Computing Sciences. Eager to solve real-world challenges through intelligent automation, computer vision, RAG-powered LLMs, and robust full-stack architecture. Known for strong adaptability, rapid problem-solving, and a continuous learning mindset.",
  summaryBullets: [
    "Specialized in Generative AI, RAG Systems, and Computer Vision",
    "Full-Stack mastery across React, FastAPI, Flask, and PostgreSQL",
    "Proven track record with hackathon awards & real-world intern experience",
    "Strong foundation in predictive decision modeling and scalable data systems"
  ]
};

export const statsData = [
  { label: "Flagship AI & Web Systems", value: "4+" },
  { label: "Academic CGPA", value: "7.9" },
  { label: "Hackathons & Honors", value: "5+" },
  { label: "Core Tech Stacks", value: "12+" }
];

export const skillsCategories = [
  {
    id: "ai-ml",
    title: "AI, ML & Deep Learning",
    icon: "Brain",
    skills: [
      "Large Language Models (LLMs)",
      "RAG Architecture",
      "Computer Vision (OpenCV)",
      "YOLOv8 Object Detection",
      "TensorFlow / Keras",
      "Transformers & BERT",
      "NLP (TF-IDF, Tokenization)",
      "Scikit-learn",
      "Predictive Analytics",
      "PyTorch Basics"
    ]
  },
  {
    id: "fullstack",
    title: "Full Stack & Web Dev",
    icon: "Code2",
    skills: [
      "React.js",
      "FastAPI (Async Python)",
      "Flask",
      "Streamlit",
      "JavaScript (ES6+)",
      "Python 3",
      "RESTful APIs",
      "HTML5 & Modern CSS3",
      "Responsive UI/UX"
    ]
  },
  {
    id: "databases",
    title: "Databases & Vector Stores",
    icon: "Database",
    skills: [
      "PostgreSQL + pgvector",
      "MySQL",
      "MongoDB",
      "Firebase Firestore",
      "Vector Embeddings",
      "Relational Schema Design"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud, Tools & Analytics",
    icon: "Cpu",
    skills: [
      "Git & GitHub",
      "Docker Containerization",
      "Groq & Ollama LLMs",
      "Gmail API Integration",
      "R Programming",
      "Data Visualization",
      "DevOps Workflows",
      "Mobile & Cloud App Dev"
    ]
  }
];

export const projectsData = [
  {
    id: "lenny-assistant",
    title: "The Lenny Growth Assistant",
    subtitle: "AI-Powered Conversational Growth Assistant",
    date: "June 2026",
    category: "GenAI & LLMs",
    badge: "Flagship GenAI",
    image: "/images/lenny_growth_assistant.jpg",
    description:
      "Full-stack AI conversational assistant using FastAPI, React, PostgreSQL, and RAG over Lenny's Podcast transcripts. Features runtime LLM provider switching, pgvector semantic search, and dynamic Markdown/HTML artifact generation.",
    highlights: [
      "Multi-provider LLM orchestration with seamless switching across OpenAI, Groq, and Ollama",
      "PostgreSQL pgvector semantic embedding retrieval for high-precision podcast insights",
      "Dynamic client-side Markdown and HTML artifact renderer for generated frameworks and strategy playbooks",
      "Asynchronous streaming response architecture with low-latency FastAPI endpoints"
    ],
    tech: ["FastAPI", "React", "PostgreSQL", "pgvector", "RAG", "OpenAI", "Groq", "Ollama"],
    architecture: {
      overview:
        "The system processes hours of podcast audio transcripts into chunked semantic embeddings stored in PostgreSQL with the pgvector extension. When a query is submitted, cosine similarity identifies relevant transcript segments to inject into context.",
      pipeline: [
        "Document Ingestion & Chunking with recursive text splitters",
        "Vectorization via OpenAI text-embedding-3-small and local Ollama models",
        "Hybrid search in PostgreSQL via pgvector cosine distance metrics",
        "Fast streaming generation via Groq LLaMA 3.3 and GPT-4o",
        "Interactive React frontend displaying generated artifacts in real-time"
      ]
    }
  },
  {
    id: "pothole-detection",
    title: "AI-Based Pothole Detection & Road Monitoring",
    subtitle: "Computer Vision & Smart Road Infrastructure",
    date: "Apr 2025",
    category: "Computer Vision",
    badge: "Computer Vision",
    image: "/images/pothole_detection.jpg",
    description:
      "Deep learning-based pothole detection system utilizing OpenCV, CNN (TensorFlow/Keras), and YOLOv8 for centimeter-accurate pothole classification and spatial localization with automated PDF reporting.",
    highlights: [
      "High-accuracy real-time object detection combining custom CNN classifiers and YOLOv8 models",
      "Interactive React & FastAPI web application supporting live webcam stream and video file processing",
      "Pseudo-LiDAR depth-style visualization rendering surface contour deviations and severity indexes",
      "Automated PDF reporting engine generating geo-tagged road damage summaries for maintenance teams"
    ],
    tech: ["OpenCV", "YOLOv8", "TensorFlow", "Keras", "CNN", "FastAPI", "React", "ReportLab"],
    architecture: {
      overview:
        "Designed to automate civic road safety inspections, the application streams video feeds through an optimized YOLOv8 detector. Detected anomalies undergo secondary CNN depth classification to produce LiDAR-style contour maps and automated damage reports.",
      pipeline: [
        "Frame extraction and preprocessing via OpenCV (denoising, contrast enhancement)",
        "YOLOv8 inference for bounding box detection and bounding confidence thresholds",
        "CNN depth/severity scoring module for damage profiling",
        "LiDAR-style pseudocolor depth mapping on HTML5 canvas",
        "Automated PDF generation summarizing coordinates, damage levels, and timestamped frame snapshots"
      ]
    }
  },
  {
    id: "complaint-system",
    title: "AI-Powered Complaint Management System",
    subtitle: "Enterprise NLP & Intelligent Ticket Routing",
    date: "April 2026",
    category: "NLP & Full Stack",
    badge: "NLP & Automation",
    image: "/images/complaint_system.jpg",
    description:
      "Enterprise NLP web application using Python, Flask, TF-IDF, BERT, and Multinomial Naive Bayes with Transformers to automatically classify customer complaints and route them with automated Gmail notifications.",
    highlights: [
      "Dual NLP classification pipeline marrying TF-IDF + Naive Bayes baseline with fine-tuned BERT Transformers",
      "Automatic department assignment and priority triage across multi-class customer tickets",
      "Real-time database synchronization and state persistence using Firebase Firestore",
      "Automated email notifications and acknowledgment dispatch through Google Gmail API"
    ],
    tech: ["Python", "Flask", "BERT", "Transformers", "TF-IDF", "Naive Bayes", "Firebase Firestore", "Gmail API"],
    architecture: {
      overview:
        "Customer grievances received via the web portal are preprocessed and vectorized. The classification ensemble predicts the responsible department with high confidence, saves the ticket to Firestore, and notifies stakeholders via Gmail API.",
      pipeline: [
        "Text normalization, stop-word removal, and BERT tokenization",
        "Ensemble classification with BERT Transformer and Naive Bayes confidence voting",
        "Automated routing to Department Queues (Billing, Support, Logistics, Technical)",
        "State persistence and lifecycle tracking in Firebase Firestore",
        "Gmail API integration triggering instant email confirmation with tracking numbers"
      ]
    }
  },
  {
    id: "healthcare-prediction",
    title: "Healthcare Prediction & Risk Analytics Platform",
    subtitle: "Clinical Decision Support & Health Insights",
    date: "May 2024",
    category: "Data Science",
    badge: "Predictive Analytics",
    image: "/images/healthcare_prediction.jpg",
    description:
      "Predictive healthcare analytics platform built with Streamlit and MySQL. Delivers risk assessments, interactive visual analytics, and personalized health recommendations for patients and physicians.",
    highlights: [
      "Supervised machine learning algorithms trained on biomedical datasets for early symptom assessment",
      "Interactive Streamlit dashboards featuring dynamic risk gauges, radar metrics, and health trends",
      "Persistent relational data management with MySQL storing patient profiles and historical records",
      "Tailored wellness recommendations generated based on calculated diagnostic probabilities"
    ],
    tech: ["Python", "Streamlit", "MySQL", "Scikit-learn", "Pandas", "Predictive Analytics", "Matplotlib"],
    architecture: {
      overview:
        "Provides an intuitive clinical dashboard where user-entered health vitals (BMI, blood pressure, glucose levels, symptom matrices) feed into predictive models to calculate disease propensity scores.",
      pipeline: [
        "Patient vitals input via dynamic Streamlit forms",
        "Feature scaling and imputation pipeline using Scikit-learn",
        "Trained predictive classification models evaluating probability scores",
        "Interactive graphical risk distribution visualizations",
        "Secure storage in MySQL with query optimization for patient lookup"
      ]
    }
  }
];

export const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "QR Solutions",
    location: "Trichy, India",
    period: "Jun 2025 – Nov 2025",
    type: "Internship (6 Months)",
    points: [
      "Developed and maintained full-stack web applications by integrating modern frontend interfaces with backend APIs and databases.",
      "Designed responsive user interfaces and implemented robust backend logic to support dynamic user workflows and efficient data management.",
      "Collaborated closely with cross-functional engineering teams on debugging, testing, deployment pipelines, and web performance optimization.",
      "Ensured API reliability, structured error handling, and high database query performance."
    ]
  }
];

export const educationData = [
  {
    degree: "M. Sc Decision and Computing Sciences",
    institution: "Decision and Computing Sciences",
    period: "2022 – 2027",
    score: "CGPA: 7.9 (as of June 2026)",
    details:
      "Integrated 5-year postgraduate program covering Computational Intelligence, Advanced Algorithms, Data Science, Machine Learning, Decision Support Systems, and Distributed Computing."
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "State Board",
    period: "2021 – 2022",
    score: "83%",
    details:
      "Completed higher secondary schooling with major focus in Mathematics, Physics, Chemistry, and Computer Science."
  }
];

export const hackathonsData = [
  {
    title: "Melinia Hackathon in Bid Battle",
    year: "2024",
    award: "🥈 2nd Prize Winner",
    color: "amber",
    description: "Secured 2nd Prize in the high-stakes Bid Battle algorithmic competition, designing strategic auction simulations and rapid decision systems."
  },
  {
    title: "Voyage Hackathon - VIT",
    year: "2024",
    award: "🎙️ Presenter & Finalist",
    color: "violet",
    description: "Presented innovative technical solutions at Vellore Institute of Technology (VIT), demonstrating applied computing architectures."
  },
  {
    title: "Hackrush Hackathon by WEC",
    year: "2025",
    award: "🚀 Hackathon Competitor",
    color: "cyan",
    description: "Participated in an intensive sprint hackathon organized by WEC, architecting and building rapid full-stack prototypes under tight deadlines."
  },
  {
    title: "LLMs & Applications Workshop",
    year: "2024",
    award: "📜 Microsoft Virtual Internship @ CodSoft",
    color: "emerald",
    description: "Completed intensive workshop and virtual internship on 'Large Language Models and Their Applications' covering prompt engineering, RAG, and AI agents."
  },
  {
    title: "Byte Sized Brainstorm Hackathon",
    year: "2023",
    award: "💡 Creative Innovator",
    color: "violet",
    description: "Competed in collaborative problem-solving and rapid software prototyping hackathon focused on impactful technical solutions."
  }
];
