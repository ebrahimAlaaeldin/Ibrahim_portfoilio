import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, Download, Code, Database, Brain, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

export default function App() {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = [
    'Backend Developer',
    'Java & Spring Boot',
    'REST API Specialist',
    'SQL & Database Optimizer',
    'AI & Data Science Explorer',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeEffect = () => {
      const currentPhraseText = phrases[phraseIndex];
      
      if (isDeleting) {
        setCurrentPhrase(currentPhraseText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setCurrentPhrase(currentPhraseText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentPhraseText.length) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
        typeSpeed = 500;
      }
      
      setTimeout(typeEffect, typeSpeed);
    };

    const timer = setTimeout(typeEffect, 100);
    return () => clearTimeout(timer);
  }, [phraseIndex, charIndex, isDeleting, phrases]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Ibrahim Alaaeldin</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Ibrahim Alaaeldin</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 min-h-[2rem]">
                <span className="text-blue-600 font-semibold">{currentPhrase}</span>
                <span className="animate-pulse">|</span>
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Backend Developer with hands-on experience in Java/Spring Boot, REST APIs, and SQL optimization. 
                I also explore AI and Data Science, applying machine learning and analytics to build smarter, 
                data-driven systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a href="#projects" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View My Work
                </a>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <a href="https://github.com/ebrahimAlaaeldin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/ibrahim-alaaeldin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/ibrahim_dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/profile_pic.png" 
                  alt="Ibrahim Alaaeldin profile picture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              I'm a Computer & Systems Engineering student and Backend Developer focused on Java/Spring Boot, 
              REST APIs, and database optimization. I blend solid engineering with AI & data science to build 
              reliable, data-driven features.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Recently, I completed a backend internship at VOIS (Vodafone Intelligent Solutions) where I helped 
              build a restaurant reservation system, documented APIs with Swagger, and worked in Agile teams. 
              I enjoy turning requirements into clean, well-tested code and clear API contracts.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I've shipped projects like a Smart City Parking system with real-time updates, a secure healthcare 
              backend with JWT/RBAC, and ML models for classification and analytics. I'm currently open to 
              internship and freelance opportunities in backend and AI.
            </p>

            {/* Skills */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Code className="text-blue-600" size={24} />
                  Backend Skills
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Spring Boot / REST APIs</span>
                    <span className="text-blue-600 font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">JWT • Hibernate/JPA</span>
                    <span className="text-blue-600 font-semibold">84%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">MySQL / PostgreSQL</span>
                    <span className="text-blue-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Brain className="text-blue-600" size={24} />
                  AI & Data Science
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Machine Learning</span>
                    <span className="text-blue-600 font-semibold">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Data Analysis</span>
                    <span className="text-blue-600 font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Python & Libraries</span>
                    <span className="text-blue-600 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Backend Developer Intern — Explore Program
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                VOIS (Vodafone Intelligent Solutions) · Cairo, Egypt
              </p>
              <p className="text-gray-600 mb-2">Aug 2024 – Sep 2024</p>
              <p className="text-gray-700 mb-4">
                Built a restaurant reservation system backend with Spring Boot and MySQL. Wrote clear API docs 
                with Swagger to streamline integrations and collaborated across Scrum teams following clean-code practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">REST APIs</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Swagger</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Agile/Scrum</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI & Data Science Training
              </h3>
              <p className="text-green-600 font-medium mb-2">
                DEPI (Digital Egypt Pioneers Initiative) · Cairo, Egypt
              </p>
              <p className="text-gray-600 mb-2">Jan 2024 – Mar 2024</p>
              <p className="text-gray-700 mb-4">
                Intensive training in machine learning, data analysis, and AI applications. Developed practical 
                projects using Python, scikit-learn, and data visualization tools.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Data Analysis</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Smart City Parking */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Zap className="text-white" size={48} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart City Parking</h3>
                <p className="text-gray-600 mb-4">
                  Real-time parking management with WebSocket updates and optimized SQL queries — achieved ~60% 
                  faster lookups and sub-second availability refresh.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Spring Boot</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">MySQL</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">WebSocket</span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/ebrahimAlaaeldin/Smart-City-Parking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    View Code →
                  </a>
                </div>
              </div>
            </div>

            {/* MedCare */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Shield className="text-white" size={48} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">MedCare Healthcare Backend</h3>
                <p className="text-gray-600 mb-4">
                  Role-based access (RBAC) and JWT auth for patient records with clean API contracts. 
                  Delivered 99.9% uptime and audit-ready logging.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Spring Boot</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">JWT</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">RBAC</span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/ebrahimAlaaeldin/MedCare-Backend" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium text-sm">
                    View Code →
                  </a>
                </div>
              </div>
            </div>

            {/* AI Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Brain className="text-white" size={48} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cardio Classifier ML Model</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning model for cardiovascular disease prediction using ensemble methods. 
                  Achieved 87% accuracy with feature engineering and cross-validation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">scikit-learn</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">ML</span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 text-center mb-8">
                I'm currently open to internship and freelance opportunities in backend development and AI. 
                Let's discuss how I can help bring your ideas to life!
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Mail className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">ibrahim.alaaeldin@example.com</p>
                </div>
                <div className="text-center">
                  <Globe className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Cairo, Egypt</p>
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Ibrahim Alaaeldin. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
