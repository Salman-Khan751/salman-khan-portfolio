/**
 * Single source of truth for every piece of portfolio content.
 * All facts here come from the three résumés (AI Engineer, Full-Stack Developer,
 * Software Engineer) and the previous portfolio. Edit this file to update the site.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://salmankhan-portfolio.vercel.app").replace(/\/$/, "");

export const PERSON = {
  name: "",
  phone: "+92-341-5981261",
  email: "salmank.official751@gmail.com",
  linkedin: "https://www.linkedin.com/in/salman-khan-ai-software-engineer/",
  github: "https://github.com/Salman-Khan751",
  githubUsername: "Salman-Khan751",
  location: "Islamabad, Pakistan",
} as const;

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const;

export const IDENTITY = {
  title: "AI Engineer & Full-Stack Developer",
  roles: ["AI Engineer", "Generative AI Engineer", "Agentic AI Engineer", "LLM Engineer", "Full-Stack Developer"],
  tagline: "I build AI systems that ship — from model to production API to interface.",
  summary:
    "AI Engineer with a BS in Artificial Intelligence and 1+ year of hands-on experience building LLM, RAG, NLP, computer-vision and speech systems, plus the FastAPI backends and React interfaces that put them in users’ hands.",
  metrics: [
    { value: "3", label: "organizations since Aug 2025" },
    { value: "6+", label: "professional AI projects delivered" },
    { value: "95%", label: "BERT classification accuracy on MediTranscribe" },
  ],
  /** The three strengths shown around the hero emblem. */
  strengths: ["AI & ML engineering", "Generative AI & agents", "Full-stack development"],
} as const;

export const ABOUT = {
  heading: "The engineer behind the model",
  lead: "I build the model, the API and the interface around it, because an AI system nobody can use doesn’t help anyone.",
  paragraphs: [
    "I hold a Bachelor of Science in Artificial Intelligence from PMAS Arid Agriculture University, Rawalpindi. I currently work as an AI Engineer at Develo IT Solution, building LangGraph-based AI workflows and the FastAPI services behind them.",
    "Since August 2025 I’ve applied AI across healthcare, telecom, networking and transportation: a prescription-to-ICD-10 mapping system, an LLM and RAG network anomaly tracker, call intent and emotion detection, and real-time vehicle detection for toll monitoring.",
    "On several projects I built both the model and the product around it. MediTranscribe pairs Whisper with a fine-tuned BERT model behind a Flask API and a React.js interface, and the call analysis system ships with a React.js dashboard on FastAPI and MongoDB.",
  ],
  pillars: [
    {
      title: "AI & machine learning",
      text: "Speech, language and vision systems: Whisper and Wav2Vec2.0 for audio, BERT and spaCy for text, YOLOv5 for detection, served through FastAPI.",
    },
    {
      title: "Generative AI & agents",
      text: "LLM applications with RAG pipelines, LangGraph agentic workflows, prompt engineering, and LoRA/QLoRA fine-tuning with quantization.",
    },
    {
      title: "Full-stack development",
      text: "React.js, Next.js and Node.js on the front, FastAPI, Flask and Express.js on the back, with PostgreSQL, MySQL and MongoDB, JWT auth and RBAC.",
    },
  ],
} as const;

export interface SkillGroup {
  title: string;
  items: string[];
}
export interface SkillColumn {
  id: string;
  title: string;
  groups: SkillGroup[];
}

export const LANGUAGES = ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C# / .NET", "C++", "SQL"];

export const SKILL_COLUMNS: SkillColumn[] = [
  {
    id: "ai",
    title: "AI & machine learning",
    groups: [
      {
        title: "Machine learning & deep learning",
        items: ["Machine Learning", "Predictive Modeling", "Deep Learning", "Neural Networks (ANN, CNN, RNN, LSTM)", "Scikit-learn", "PyTorch", "TensorFlow"],
      },
      {
        title: "Computer vision",
        items: ["Object Detection", "Image Segmentation", "YOLOv5 / v8 / v11", "Vision Transformers (ViTs)", "Segment Anything (SAM)", "OpenCV", "Roboflow", "Data Annotation"],
      },
      {
        title: "NLP & speech",
        items: ["NLP", "Sentiment Analysis", "Emotion AI", "Aspect-Based Sentiment Analysis", "Information Extraction", "Speech Recognition (ASR)", "Whisper", "Wav2Vec2.0", "spaCy", "NLTK"],
      },
      { title: "Data science", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    ],
  },
  {
    id: "genai",
    title: "Generative AI & agents",
    groups: [
      {
        title: "Techniques",
        items: ["Generative AI", "Large Language Models", "Agentic AI", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "LLM fine-tuning (LoRA, QLoRA)", "Quantization"],
      },
      { title: "Frameworks & APIs", items: ["OpenAI API", "LangChain", "LangGraph", "Hugging Face Transformers"] },
      { title: "Vector databases", items: ["Pinecone", "FAISS", "ChromaDB"] },
    ],
  },
  {
    id: "fullstack",
    title: "Full-stack & infrastructure",
    groups: [
      {
        title: "Frontend",
        items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery", "Responsive Web Design"],
      },
      {
        title: "Backend & APIs",
        items: ["FastAPI", "Flask", "Node.js", "Express.js", ".NET Core", "ASP.NET", "Spring Boot", "Hibernate", "REST", "GraphQL", "WebSockets", "JWT", "RBAC", "Microservices", "Celery"],
      },
      {
        title: "Databases & messaging",
        items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis", "SQL Optimization", "Schema Design", "RabbitMQ", "Apache Kafka"],
      },
      {
        title: "Cloud & tooling",
        items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git & GitHub", "Prometheus", "Grafana", "Postman", "JUnit", "Mockito", "Agile / Scrum"],
      },
    ],
  },
];

export interface ExperienceItem {
  title: string;
  tech: string[];
  points: string[];
}
export interface ExperienceJob {
  org: string;
  period: string;
  roles: string[];
  items: ExperienceItem[];
  footnote?: string;
}

export const EXPERIENCE: ExperienceJob[] = [
  {
    org: "Develo IT Solution",
    period: "Sep 2026 – Present",
    roles: ["AI Engineer", "Full-Stack Developer"],
    items: [
      {
        title: "Choose KINN — AI Social Connection Platform",
        tech: ["Python", "Next.js", "React Native", "LangGraph", "OpenAI API", "FastAPI", "Redis", "Celery", "WebSockets", "PostgreSQL", "AWS"],
        points: [
          "Developed LangGraph-based AI workflows with LLMs, prompt engineering, and context-aware processing for stateful conversational features.",
          "Built FastAPI REST APIs and AI services for profile recommendations, user discovery, connection workflows, and personalized interactions.",
          "Implemented real-time features with WebSockets and background processing with Redis and Celery, backed by PostgreSQL.",
        ],
      },
    ],
  },
  {
    org: "CodeAndFork",
    period: "Feb 2026 – Present (Part-Time)",
    roles: ["AI Engineer", "Full-Stack Developer"],
    items: [
      {
        title: "AI-Powered Network Anomaly Tracking System",
        tech: ["Python", "LLMs", "RAG", "OpenAI API", "LoRA", "QLoRA", "FastAPI", "WebSockets", "Prometheus", "Grafana"],
        points: [
          "Developed an LLM and RAG-based system to analyze infrastructure logs, network metrics, and operational data for real-time monitoring and intelligent insights.",
          "Implemented LoRA and QLoRA fine-tuning and quantization, with FastAPI, WebSockets, Prometheus, and Grafana for real-time alerting, inference serving, and observability.",
        ],
      },
      {
        title: "MedCodeAI — Prescription-to-ICD Mapping System",
        tech: ["Python", "React.js", "NLP", "spaCy", "NER", "Sentence Transformers", "FHIR", "ICD-10"],
        points: [
          "Developed a medical AI/NLP system using spaCy and Named Entity Recognition to extract structured data from prescriptions and clinical text and map it to ICD-10 codes.",
          "Implemented semantic search and clinical text classification using Sentence Transformers, embeddings, fuzzy matching, and FHIR APIs.",
        ],
      },
    ],
  },
  {
    org: "BIIT",
    period: "Aug 2025 – Jan 2026",
    roles: ["Research Associate", "AI Engineer", "Full-Stack Developer"],
    items: [
      {
        title: "AI Call Intent & Emotion Detection System",
        tech: ["Python", "Whisper", "Wav2Vec2.0", "DistilBERT", "spaCy", "FastAPI", "React.js", "MongoDB"],
        points: [
          "Built a telecom call-analysis system that classifies customer intent (upgrade, complaint, cancellation), reducing manual call triage effort for the support team.",
          "Combined Whisper, DistilBERT, and Wav2Vec2.0 for speech-to-text and emotion detection, deployed behind a low-latency FastAPI service.",
          "Built a React.js dashboard on REST APIs and normalized MongoDB schemas, giving support teams immediate visibility into call intent and emotion.",
        ],
      },
      {
        title: "Vehicle Detection for Toll Monitoring",
        tech: ["Python", "YOLOv5", "OpenCV", "Roboflow", "Flask", "React.js", "MongoDB"],
        points: [
          "Developed a YOLOv5-based computer vision system for real-time vehicle detection and classification on live video streams, improving toll audit accuracy.",
          "Paired the model with a Flask backend and React.js interface, with database schema design for vehicle and toll data.",
        ],
      },
      {
        title: "ToxicTrack — Hate Speech Detection System",
        tech: ["Python", "BERT", "spaCy", "Transformers"],
        points: ["Fine-tuned BERT models in a real-time NLP pipeline to classify toxic, abusive, and threatening language for content moderation."],
      },
    ],
    footnote: "Managed SDLC using Agile practices, Git version control, and collaborative workflows.",
  },
];

export interface Project {
  title: string;
  period: string;
  badge?: string;
  tech: string[];
  points: string[];
  highlight?: { value: string; label: string };
}

/** Flagship project — shown large. */
export const FEATURED_PROJECT: Project = {
  title: "MediTranscribe — AI Medical Transcription System",
  period: "2025 – 2026",
  badge: "Final year project",
  tech: ["Python", "Flask", "React.js", "MySQL", "OpenAI Whisper", "BERT", "NLP"],
  points: [
    "Built a full-stack AI platform for real-time doctor–patient consultations, integrating speech-to-text, automated prescription extraction, and EHR data capture.",
    "Fine-tuned BERT on a custom medical dataset across clinical categories including prescriptions, symptoms, diagnostics, CPT codes, and clinical notes.",
    "Built secure Flask REST APIs and a React.js frontend with role-based authentication, patient records, appointment scheduling, and vitals tracking.",
  ],
  highlight: { value: "95%", label: "classification accuracy across clinical categories" },
};

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Backend System",
    period: "2026",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "RBAC", "REST API"],
    points: [
      "Built a scalable RESTful backend with JWT authentication, role-based access control (RBAC), and CRUD APIs for users, products, carts, and orders.",
      "Designed relational database schemas and optimized SQL queries to improve performance, security, and scalability.",
    ],
  },
  {
    title: "NLP Chatbot",
    period: "2024",
    tech: ["Python", "TensorFlow", "FastAPI", "LLaMA", "NLP"],
    points: ["Fine-tuned a LLaMA-based model on custom datasets and deployed a context-aware, multi-turn chatbot through a FastAPI service with a web interface."],
  },
  {
    title: "Duplicate Question Detector",
    period: "2023",
    tech: ["Python", "Transformers", "spaCy", "NLP"],
    points: ["Built a transformer-based semantic similarity model on the Quora Question Pairs dataset, with spaCy text preprocessing and NLP feature engineering."],
  },
];

/** Smaller builds from the Software Engineer résumé — shown as compact rows. */
export const OTHER_PROJECTS: Project[] = [
  {
    title: "POS (Point of Sale)",
    period: "2022 – 2023",
    tech: ["Legacy migration"],
    points: ["Migrated a legacy POS system into a highly scalable and configurable digital product."],
  },
  {
    title: "Java Weather Application",
    period: "2022",
    tech: ["Java", "JavaFX", "OpenWeather API"],
    points: ["Built a Java desktop application that fetches and displays real-time weather data through API integration."],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Artificial Intelligence (BSAI)",
  school: "PMAS Arid Agriculture University, Rawalpindi, Pakistan",
  period: "2022 – 2026",
} as const;

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  skills: string[];
  image: string;
  width: number;
  height: number;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cyber",
    name: "Cybersecurity",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    skills: ["Cybersecurity", "Information Security Awareness", "Threat & Vulnerability Management"],
    image: "/certificates/cyber.jpg",
    width: 1000,
    height: 773,
  },
  {
    id: "genai",
    name: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2023",
    skills: ["Generative AI", "Artificial Intelligence (AI)", "Computer Ethics"],
    image: "/certificates/genai.jpg",
    width: 1000,
    height: 773,
  },
  {
    id: "dataanalysis",
    name: "Data Analysis",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    skills: ["Data Analysis", "Data Visualization", "Statistics"],
    image: "/certificates/dataanalysis.jpg",
    width: 1000,
    height: 773,
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    issuer: "Great Learning",
    year: "2023",
    skills: ["AWS Lambda", "Serverless", "Cloud Computing"],
    image: "/certificates/great1.jpg",
    width: 1000,
    height: 707,
  },
];

export const RESUMES = [
  {
    key: "ai",
    label: "AI Engineer",
    description: "LLMs, RAG, NLP, computer vision and speech AI.",
    file: "/resumes/Salman_Khan_AI_Engineer.pdf",
  },
  {
    key: "fullstack",
    label: "Full-Stack Developer",
    description: "React.js, Node.js, Python APIs and database design.",
    file: "/resumes/Salman_Khan_Full_Stack_Developer.pdf",
  },
  {
    key: "software",
    label: "Software Engineer",
    description: "Backend services, REST APIs, OOP, Java and Python.",
    file: "/resumes/Salman_Khan_Software_Engineer.pdf",
  },
] as const;
