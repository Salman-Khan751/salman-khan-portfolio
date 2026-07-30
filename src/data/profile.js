// Single source of truth for all portfolio content.
// IDENTITY drives the hero section — one consistent "AI Software Engineer" positioning.
// Experience/Projects retain their original multi-discipline tags for context lower on the page.

export const IDENTITY = {
  title: "AI Software Engineer",
  roles: ["AI Engineer","Generative AI Engineer","Mern Stack Developer" ,"Full Stack Developer", "Software Engineer"],
  tagline: "I build AI systems that ship — from model to production API to interface.",
  summary:
    // "Results-driven AI Software Engineer with expertise in Generative AI, Agentic AI Automation, ML, DL, NLP, and Full-Stack Development. Proficient in Python, FastAPI, React.js, LangChain, LangGraph, and modern AI frameworks. I build intelligent, scalable, and production-ready applications. Passionate about developing AI agents, RAG systems, and data-driven solutions that solve real-world problems and deliver exceptional user experiences."
    "AI Engineer with a Bachelor's degree in Artificial Intelligence and hands-on experience designing, fine-tuning, and deploying production-grade Machine Learning, NLP, Computer Vision, and Generative AI / Agentic AI systems. Proficient in Large Language Models (LLMs), Transformers, Retrieval Augmented Generation (RAG), Prompt Engineering, and vector databases using Python, PyTorch, TensorFlow, Hugging Face, LangChain, and LangGraph. Skilled in building and shipping scalable full-stack applications with Flask, FastAPI, React.js, and Node.js, backed by MySQL, MongoDB, Docker, AWS, and CI/CD pipelines. Track record of delivering real-time, low-latency AI solutions across telecom, healthcare, and transportation industries.",
  metrics: [
    { value: "5+", label: "AI systems shipped to production" },
    { value: "95%", label: "Peak model classification accuracy" },
    { value: "8+", label: "Technologies across the ML & web stack" },
  ],
};

export const PERSON = {
  name: "Salman Khan",
  roles: ["AI Software Engineer"],
  phone: "+92-341-5981261",
  email: "salmank.official751@gmail.com",
  linkedin: "https://www.linkedin.com/in/salman-khan-ai-software-engineer/",
  github: "https://github.com/Salman-Khan751",
  githubUsername: "Salman-Khan751",
  location: "Rawalpindi, Pakistan",
};

export const RESUMES = [
  { key: "ai", label: "AI Engineer", file: "/resumes/Salman_Khan_AI_Engineer.pdf" },
  { key: "mern", label: "Full Stack Developer ( MERN )", file: "/resumes/Salman_Khan_Full_Stack_Developer.pdf" },
  { key: "swe", label: "Software Engineer", file: "/resumes/Salman_Khan_Software_Engineer.pdf" },
];

// Skill groups with stable ids used for lens-accent matching
export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { id: "python", label: "Python" },
      { id: "java", label: "Java" },
      { id: "js", label: "JavaScript" },
      { id: "ts", label: "TypeScript" },
      { id: "cpp", label: "C++" },
      { id: "csharp", label: "C#" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { id: "ml", label: "Machine Learning" },
      { id: "dl", label: "Deep Learning" },
      { id: "nlp", label: "NLP" },
      { id: "computer_vision", label: "Computer Vision" },
      { id: "transformers", label: "Transformers" },
      { id: "Generative_AI", label: "Generative AI" },
      { id: "Agentic_AI", label: "Agentic AI" },          
      { id: "llms", label: "LLMS" },
      { id: "rag", label: "RAG" },
      { id: "Prompt_Engineering", label: "Prompt Engineering" },
      { id: "cnn", label: "CNN / RNN / LSTM" },
      { id: "langchain", label: "LangChain / LangGraph" },
      { id: "pytorch", label: "PyTorch" },
      { id: "tensorflow", label: "TensorFlow" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "spacy", label: "spaCy / NLTK" },
      { id: "Speech_Recognition", label: "Speech Recognition" },
      { id: "opencv", label: "OpenCV" },
      { id: "roboflow", label: "Roboflow" },
    ],
  },
  {
    title: "Web & Backend",
    items: [
      { id: "react", label: "React.js" },
      { id: "node", label: "Node.js" },
      { id: "express", label: "Express.js" },
      { id: "flask", label: "Flask" },
      { id: "fastapi", label: "FastAPI" },
      { id: "springboot", label: "Spring Boot" },
      { id: "rest", label: "REST APIs" },
      { id: "grpc", label: "gRPC / SOAP" },
      { id: "tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    title: "Data & Databases",
    items: [
      { id: "mysql", label: "MySQL" },
      { id: "mongodb", label: "MongoDB" },
      { id: "postgresql", label: "PostgreSQL" },
      { id: "graphql", label: "GraphQL" },
      { id: "redis", label: "Redis" },
      { id: "numpy", label: "NumPy / Pandas" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { id: "git", label: "Git / GitHub" },
      { id: "docker", label: "Docker" },
      { id: "kubernetes", label: "Kubernetes" },
      { id: "aws", label: "AWS" },
      { id: "kafka", label: "Apache Kafka" },
      { id: "junit", label: "JUnit / Mockito" },
      { id: "oop", label: "OOP / DSA" },
    ],
  },
];

export const EXPERIENCE = [
  {
    org: "Biit",
    period: "Jul 2025 – Present ",
    roles: [ "AI Engineer", "Full-Stack Developer", "Software Engineer"],
    items: [
      {
        title: "AI Call Intent & Emotion Detection System",
        tech: ["Python", "Whisper", "Wav2Vec2.0", "spaCy", "Transformers", "FastAPI", "React.js", "MongoDB"],
        points: [
          "Built a telecom call-analysis system that automatically classifies customer intent (upgrade, complaint, cancellation), reducing manual call triage effort for the support team. ",
          "Implemented speech-to-text and emotion detection (angry, neutral, frustrated) by combining Whisper, DistilBERT, and Wav2Vec2.0, enabling real-time sentiment flags on live calls.",
          "Built a full-stack dashboard with REST APIs to visualize call intent and emotion in real time.",
          "Deployed the pipeline behind a FastAPI service, supporting low-latency inference for production call-center workflows.",
        ],
        lens: ["ai", "mern", "swe"],
      },
      {
        title: "Vehicle Detection for Toll Monitoring",
        tech: ["Python", "YOLOv5", "OpenCV", "Roboflow", "React.js", "Flask", "MongoDB"],
        points: [
          "Developed a YOLOv5-based computer vision system for real-time vehicle detection and classification at toll booths, processing live video streams.",
          "Improved toll audit accuracy by automatically extracting vehicle counts, vehicle types, and timestamps, reducing reliance on manual logging.",
          "Built a full-stack web app with Flask APIs managing vehicle data in MongoDB.",
          "Designed database schemas and REST APIs for vehicle and toll data management.",
        ],
        lens: ["ai", "mern", "swe"],
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
    period: "2025",
    badge: "Final Year Project",
    tech: ["Python", "Flask", "React.js", "MySQL", "OpenAI Whisper", "Fine-Tuned BERT", "NLP"],
    points: [
      "Full-stack AI medical transcription system for real-time doctor–patient consultations with automated speech-to-text, prescription extraction, and EHR integration.",
      "Integrated OpenAI Whisper for live transcription and fine-tuned BERT on a custom medical dataset (95% classification accuracy) to categorize clinical text — RX, symptoms, diagnostics, CPT codes, notes.",
      "Built secure Flask REST APIs and a React.js frontend with role-based authentication, patient records, appointment scheduling, vitals tracking, and consultation workflows.",
    ],
    lens: ["ai", "mern", "swe"],
    githubRepo: null,
  },
  {
    title: "Real-Time NLP Chatbot",
    period: "2024",
    tech: ["Python", "TensorFlow", "FastAPI", "Flask", "LLaMA", "NLP"],
    points: [
      "Context-aware NLP chatbot with multi-turn conversation capability for real-time, intelligent user interactions.",
      "Fine-tuned a LLaMA-based model on custom datasets; built a scalable FastAPI/Flask backend for deployment-ready conversational AI.",
    ],
    lens: ["ai", "mern", "swe"],
    githubRepo: null,
  },
  {
    title: "Movie Recommender System",
    period: "2024",
    tech: ["Python", "Scikit-learn", "Pandas", "Collaborative Filtering"],
    points: [
      "Personalized movie recommendation system using collaborative filtering and similarity-based ML algorithms.",
      "Processed large-scale datasets with Pandas and implemented Scikit-learn pipelines to enhance user engagement.",
    ],
    lens: ["ai", "mern"],
    githubRepo: null,
  },
  {
    title: "Duplicate Question Detector — Semantic Similarity",
    period: "2023",
    tech: ["Python", "Transformers", "spaCy", "NLP"],
    points: [
      "Semantic similarity model using transformer-based embeddings to detect duplicate questions with high accuracy.",
      "Preprocessed the Quora Question Pairs dataset with spaCy and applied NLP feature engineering for a scalable deduplication solution.",
    ],
    lens: ["ai", "mern"],
    githubRepo: null,
  },
  {
    title: "Sentiment Analyzer",
    period: "2023",
    tech: ["NLP", "NLTK", "Scikit-learn"],
    points: ["Text classification system to detect positive, negative, and neutral sentiment."],
    lens: ["mern"],
    githubRepo: null,
  },
  {
    title: "E-Commerce Backend System",
    period: "2026",
    tech: ["Java", "Spring Boot", "MySQL"],
    points: [
      "RESTful backend for an e-commerce platform with secure authentication and product, cart, and order management.",
    ],
    lens: ["swe"],
    githubRepo: null,
  },
  {
    title: "POS (Point of Sale) System",
    period: "2022 — 2023",
    tech: ["Java", "SQL"],
    points: ["Migrated a legacy POS system into a highly scalable and configurable digital product."],
    lens: ["swe"],
    githubRepo: null,
  },
  {
    title: "Java Weather App",
    period: "2022",
    tech: ["Java", "JavaFX", "OpenWeather API"],
    points: ["Real-time desktop application fetching live weather data with interactive forecasts."],
    lens: ["mern", "swe"],
    githubRepo: null,
  },
  {
    title: "Collage Maker / WhatsScan / Write It Down",
    period: "2020 — 2021",
    tech: ["Android"],
    points: ["Published Android apps with image filters, QR scanning, and task reminders."],
    lens: ["swe"],
    githubRepo: null,
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Artificial Intelligence (BSAI)",
  school: "PMAS Arid Agriculture University, Rawalpindi, Pakistan",
  period: "2022 — 2025",
};

export const CERTIFICATIONS = [
  {
    id: "genai",
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    date: "Aug 13, 2024",
    skills: ["Generative AI", "Artificial Intelligence (AI)", "Computer Ethics"],
    image: "/certificates/genai.jpg",
  },
  {
    id: "cyber",
    name: "Career Essentials in Cybersecurity",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    date: "Aug 16, 2024",
    skills: ["Cybersecurity", "Information Security Awareness", "Threat & Vulnerability Management"],
    image: "/certificates/cyber.jpg",
  },
  {
    id: "softdev",
    name: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    date: "Aug 18, 2024",
    skills: ["Software Development", "Programming Fundamentals", "OOP"],
    image: "/certificates/softdev.jpg",
  },
  {
    id: "dataanalysis",
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    date: "Aug 20, 2024",
    skills: ["Data Analysis", "Data Visualization", "Statistics"],
    image: "/certificates/dataanalysis.jpg",
  },
  {
    id: "coursera1",
    name: "Build a Free Website with WordPress",
    issuer: "Coursera Project Network",
    year: "2024",
    date: "Sep 2, 2024",
    skills: ["WordPress", "Web Development", "CMS"],
    image: "/certificates/coursera1.jpg",
  },
  {
    id: "coursera2",
    name: "Create a Lead Generation Messenger Chatbot using Chatfuel",
    issuer: "Coursera Project Network",
    year: "2024",
    date: "Sep 2, 2024",
    skills: ["Chatbot Design", "Lead Generation", "Automation"],
    image: "/certificates/coursera2.jpg",
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    issuer: "Great Learning Academy",
    year: "2024",
    date: "Sep 2024",
    skills: ["AWS Lambda", "Serverless", "Cloud Computing"],
    image: "/certificates/great1.jpg",
  },
  {
    id: "frontend-css",
    name: "Front End Development — CSS",
    issuer: "Great Learning Academy",
    year: "2024",
    date: "Sep 2024",
    skills: ["CSS", "Front-End Development", "Responsive Design"],
    image: "/certificates/great2.jpg",
  },
  {
    id: "frontend-html",
    name: "Front End Development — HTML",
    issuer: "Great Learning Academy",
    year: "2024",
    date: "Sep 2024",
    skills: ["HTML", "Front-End Development", "Web Structure"],
    image: "/certificates/great3.jpg",
  },
  {
    id: "design-app",
    name: "Design App",
    issuer: "Great Learning Academy",
    year: "2024",
    date: "Sep 2024",
    skills: ["UI Design", "App Design", "Prototyping"],
    image: "/certificates/great4.jpg",
  },
];
