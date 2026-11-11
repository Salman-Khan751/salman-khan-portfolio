// Single source of truth for all portfolio content.
// IDENTITY drives the hero section — one consistent "AI Software Engineer" positioning.
// Experience/Projects retain their original multi-discipline tags for context lower on the page.

export const IDENTITY = {
  title: "AI Engineer",
  roles: ["AI Engineer", "Generative AI Engineer", "Agentic AI Engineer", "LLM Engineer", "Full Stack Developer"],
  tagline: "I build AI systems that ship — from model to production API to interface.",
  summary:
    "AI Engineer with hands-on experience developing and deploying Machine Learning, NLP, Computer Vision, Generative AI, Agentic AI, and LLM-based solutions. Skilled in RAG, LangGraph, Transformers, prompt engineering, LLM fine-tuning, and AI-powered backend development using Python, PyTorch, TensorFlow, Hugging Face, LangChain, and FastAPI. Experienced in building scalable AI and full-stack applications with React.js, Node.js, Flask, FastAPI, MySQL, MongoDB, Docker, and AWS. Applied AI solutions across healthcare, telecom, networking, and transportation domains, with a focus on practical, production-ready systems.",
  metrics: [
    { value: "6+", label: "AI systems shipped to production" },
    { value: "95%", label: "Peak model classification accuracy" },
    { value: "3", label: "AI Engineer roles since 2025" },
  ],
};

export const PERSON = {
  name: "Salman Khan",
  roles: ["AI Engineer"],
  phone: "+92-341-5981261",
  email: "salmank.official751@gmail.com",
  linkedin: "https://www.linkedin.com/in/salman-khan-ai-software-engineer/",
  github: "https://github.com/Salman-Khan751",
  githubUsername: "Salman-Khan751",
  location: "Rawalpindi, Pakistan",
};

export const RESUMES = [
  { key: "ai", label: "AI Engineer", file: "/resumes/Salman_Khan_AI_Engineer.pdf" },
];

// Skill groups with stable ids used for lens-accent matching
export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { id: "python", label: "Python" },
      { id: "java", label: "Java" },
      { id: "js", label: "JavaScript (ES6+)" },
      { id: "cpp", label: "C++" },
      { id: "csharp", label: "C#" },
      { id: "dotnet", label: ".NET" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { id: "ml", label: "Machine Learning" },
      { id: "dl", label: "Deep Learning" },
      { id: "nlp", label: "NLP" },
      { id: "computer_vision", label: "Computer Vision" },
      { id: "Generative_AI", label: "Generative AI" },
      { id: "Agentic_AI", label: "Agentic AI" },
      { id: "llms", label: "LLMs" },
      { id: "transformers", label: "Transformers" },
      { id: "rag", label: "RAG" },
      { id: "Prompt_Engineering", label: "Prompt Engineering" },
      { id: "ann", label: "ANN / RNN / CNN / LSTM" },
      { id: "Speech_Recognition", label: "Speech Recognition" },
      { id: "sentiment", label: "Sentiment & Emotion Analysis" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "pytorch", label: "PyTorch" },
      { id: "tensorflow", label: "TensorFlow" },
      { id: "sklearn", label: "Scikit-learn" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "spacy", label: "spaCy" },
      { id: "nltk", label: "NLTK" },
      { id: "opencv", label: "OpenCV" },
      { id: "langchain", label: "LangChain" },
      { id: "langgraph", label: "LangGraph" },
    ],
  },
  {
    title: "Data Science & Visualization",
    items: [
      { id: "numpy", label: "NumPy" },
      { id: "pandas", label: "Pandas" },
      { id: "matplotlib", label: "Matplotlib" },
      { id: "seaborn", label: "Seaborn" },
      { id: "annotation", label: "Data Annotation" },
      { id: "roboflow", label: "Roboflow" },
    ],
  },
  {
    title: "Web & Backend",
    items: [
      { id: "react", label: "React.js" },
      { id: "redux", label: "Redux" },
      { id: "node", label: "Node.js" },
      { id: "flask", label: "Flask" },
      { id: "fastapi", label: "FastAPI" },
      { id: "rest", label: "REST APIs" },
      { id: "graphql", label: "GraphQL" },
      { id: "html", label: "HTML5" },
      { id: "css", label: "CSS3" },
      { id: "tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    title: "Databases",
    items: [
      { id: "mysql", label: "MySQL" },
      { id: "mongodb", label: "MongoDB" },
      { id: "postgresql", label: "PostgreSQL" },
      { id: "faiss", label: "FAISS" },
      { id: "pinecone", label: "Pinecone" },
      { id: "chromadb", label: "ChromaDB" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { id: "git", label: "Git / GitHub" },
      { id: "docker", label: "Docker" },
      { id: "kubernetes", label: "Kubernetes" },
      { id: "aws", label: "AWS" },
      { id: "postman", label: "Postman" },
      { id: "cicd", label: "CI/CD" },
      { id: "agile", label: "Agile / Scrum" },
    ],
  },
];

export const EXPERIENCE = [
  {
    org: "Develo IT Solution",
    period: "Sep 2026 – Present",
    roles: ["AI Engineer"],
    items: [
      {
        title: "Choose KINN — AI Social Connection Platform",
        tech: ["Python", "Redis", "Celery", "LangGraph", "OpenAI API", "FastAPI", "WebSockets", "PostgreSQL", "AWS"],
        points: [
          "Developed LangGraph-based AI workflows with LLMs, prompt engineering, and context-aware processing for stateful conversational features.",
          "Built FastAPI REST APIs and AI services for profile recommendations, user discovery, connection workflows, and personalized interactions.",
        ],
        lens: ["ai"],
      },
    ],
  },
  {
    org: "CodeAndFork",
    period: "Feb 2026 – Aug 2026",
    roles: ["AI Engineer"],
    items: [
      {
        title: "MedCodeAI — Prescription-to-ICD Mapping System",
        tech: ["Python", "NLP", "spaCy", "NER", "Sentence Transformers", "FHIR", "ICD-10"],
        points: [
          "Developed a Medical AI/NLP system using Python, spaCy, Named Entity Recognition (NER), and clinical NLP to extract structured healthcare data from prescriptions and clinical text and map concepts to ICD-10 codes.",
          "Implemented semantic search and clinical text classification using Sentence Transformers, embeddings, medical ontologies, fuzzy matching, FHIR APIs, and ICD-10 data for automated medical coding.",
        ],
        lens: ["ai"],
      },
      {
        title: "AI-Powered Network Anomaly Tracking System",
        tech: ["Python", "LLMs", "RAG", "OpenAI API", "LoRA", "QLoRA", "FastAPI", "WebSockets", "Prometheus", "Grafana"],
        points: [
          "Developed an LLM and RAG-based anomaly detection system using Python to analyze infrastructure logs, network metrics, and operational data for real-time monitoring and intelligent insights.",
          "Implemented LoRA, QLoRA, LLM fine-tuning, and quantization, with FastAPI, WebSockets, Prometheus, and Grafana for real-time alerting, model inference, performance monitoring, and observability.",
        ],
        lens: ["ai"],
      },
    ],
  },
  {
    org: "BIIT",
    period: "Aug 2025 – Jan 2026",
    roles: ["Research Associate", "AI Engineer"],
    items: [
      {
        title: "AI Call Intent & Emotion Detection System",
        tech: ["Python", "Whisper", "Wav2Vec2.0", "spaCy", "Transformers", "FastAPI"],
        points: [
          "Built a telecom call-analysis system that automatically classifies customer intent (upgrade, complaint, cancellation), reducing manual call triage effort for the support team.",
          "Implemented speech-to-text and emotion detection (angry, neutral, frustrated) by combining Whisper, DistilBERT, and Wav2Vec2.0, enabling real-time sentiment flags on live calls.",
          "Deployed the pipeline behind a FastAPI service, supporting low-latency inference for production call-center workflows.",
        ],
        lens: ["ai"],
      },
      {
        title: "Vehicle Detection for Toll Monitoring",
        tech: ["Python", "YOLOv5", "OpenCV", "Roboflow"],
        points: [
          "Developed a YOLOv5-based computer vision system for real-time vehicle detection and classification at toll booths, processing live video streams.",
          "Improved toll audit accuracy by automatically extracting vehicle counts, vehicle types, and timestamps, reducing reliance on manual logging.",
        ],
        lens: ["ai"],
      },
      {
        title: "ToxicTrack — Hate Speech Detection System",
        tech: ["Python", "BERT", "spaCy", "Transformers"],
        points: [
          "Designed a real-time NLP pipeline to detect hate speech in user-generated content using transformer-based classification.",
          "Fine-tuned BERT models to classify toxic, abusive, and threatening language with high accuracy, supporting safer content moderation.",
        ],
        lens: ["ai"],
      },
    ],
    footnote: "Managed SDLC using Agile practices, Git version control, and collaborative workflows.",
  },
];

export const PROJECTS = [
  {
    title: "MediTranscribe — AI Medical Transcription System",
    period: "2025 — 2026",
    badge: "Final Year Project",
    tech: ["Python", "Flask", "React.js", "MySQL", "OpenAI Whisper", "Fine-Tuned BERT", "NLP"],
    points: [
      "Built a full-stack AI medical transcription platform for real-time doctor-patient consultations, integrating speech-to-text, automated prescription extraction, and EHR data capture.",
      "Fine-tuned BERT on a custom medical dataset, achieving 95% classification accuracy across clinical categories including prescriptions, symptoms, diagnostics, CPT codes, and clinical notes.",
      "Developed secure Flask REST APIs and React.js frontend with role-based authentication, patient record management, appointment scheduling, and vitals tracking.",
    ],
    lens: ["ai"],
    githubRepo: null,
  },
  {
    title: "E-Commerce Backend System",
    period: "2026",
    tech: ["Node.js", "Express.js", "MySQL", "JWT Authentication", "REST API"],
    points: [
      "Built a scalable RESTful backend using Node.js, Express.js, and MySQL, implementing JWT authentication, role-based access control (RBAC), and CRUD APIs for users, products, carts, and orders.",
      "Designed relational database schemas, optimized SQL queries, and integrated RESTful APIs to improve backend performance, security, and scalability.",
    ],
    lens: ["ai"],
    githubRepo: null,
  },
  {
    title: "NLP Chatbot",
    period: "2024",
    tech: ["Python", "TensorFlow", "FastAPI", "LLaMA", "NLP"],
    points: [
      "Developed a context-aware, multi-turn conversational chatbot capable of sustaining coherent dialogue across multiple exchanges.",
      "Fine-tuned a LLaMA-based model on custom datasets and deployed it via a scalable FastAPI service with a web interface.",
    ],
    lens: ["ai"],
    githubRepo: null,
  },
  {
    title: "Duplicate Question Detector — Semantic Similarity",
    period: "2023",
    tech: ["Python", "Transformers", "spaCy", "NLP"],
    points: [
      "Built a transformer-based semantic similarity model to detect duplicate questions with high accuracy on the Quora Question Pairs dataset.",
      "Applied NLP feature engineering and text preprocessing with spaCy to deliver a scalable deduplication solution.",
    ],
    lens: ["ai"],
    githubRepo: null,
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Artificial Intelligence (BSAI)",
  school: "PMAS Arid Agriculture University, Rawalpindi, Pakistan",
  period: "2022 — 2026",
};

export const CERTIFICATIONS = [
  {
    id: "cyber",
    name: "Cybersecurity",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    date: "2024",
    skills: ["Cybersecurity", "Information Security Awareness", "Threat & Vulnerability Management"],
    image: "/certificates/cyber.jpg",
  },
  {
    id: "genai",
    name: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2023",
    date: "2023",
    skills: ["Generative AI", "Artificial Intelligence (AI)", "Computer Ethics"],
    image: "/certificates/genai.jpg",
  },
  {
    id: "dataanalysis",
    name: "Data Analysis",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    date: "2024",
    skills: ["Data Analysis", "Data Visualization", "Statistics"],
    image: "/certificates/dataanalysis.jpg",
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    issuer: "Great Learning",
    year: "2023",
    date: "2023",
    skills: ["AWS Lambda", "Serverless", "Cloud Computing"],
    image: "/certificates/great1.jpg",
  },
];
