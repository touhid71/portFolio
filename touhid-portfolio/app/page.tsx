"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleDownloadResume = () => {
    window.open("/resume-md-touhidul-islam.pdf", "_blank");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

const projects = [
  // ===== 1. ML PRODUCTION (লাইভ - সবার উপরে) =====
  {
    id: 1,
    title: "Fraud Customer Checker",
    category: "ml-production",
    categoryName: "ML Production",
    icon: "🛡️",
    color: "red",
    description: "AI-powered fraud detection for courier, logistics & e-commerce. Detects fake/no-delivery orders and COD issues with high accuracy.",
    tech: ["Random Forest", "Scikit-learn", "Streamlit", "Pandas"],
    liveLink: "https://fraudcheck-touhid.streamlit.app/",
    githubLink: "#",
    isLive: true
  },

  // ===== 2. LLM & RAG PROJECTS =====
  {
    id: 2,
    title: "RAG-based Document Q&A",
    category: "llm",
    categoryName: "LLM / RAG",
    icon: "📚",
    color: "purple",
    description: "Chat with your PDFs using LLM + LangChain + Vector DB. 40% better accuracy than vanilla LLM.",
    tech: ["LangChain", "ChromaDB", "Llama 2"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },
  {
    id: 3,
    title: "Bengali LLM Fine-tuning",
    category: "llm",
    categoryName: "Model Tuning",
    icon: "🇧🇩",
    color: "orange",
    description: "Fine-tuned Gemma-2B on Bengali dataset. 60% less training time vs full fine-tuning.",
    tech: ["LoRA", "PEFT", "Hugging Face"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },

  // ===== 3. COMPUTER VISION =====
  {
    id: 4,
    title: "Bangladeshi Currency Detection",
    category: "computer-vision",
    categoryName: "Computer Vision",
    icon: "💵",
    color: "blue",
    description: "YOLOv11 model with 98%+ precision. Optimized for mobile deployment.",
    tech: ["YOLOv11", "OpenCV"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },

  // ===== 4. AI AGENTS =====
  {
    id: 5,
    title: "AI Research Agent",
    category: "ai-agent",
    categoryName: "AI Agent",
    icon: "🔍",
    color: "green",
    description: "Autonomous agent that searches web, summarizes content, and writes research reports.",
    tech: ["LangChain", "GPT-4", "Tavily"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },

  // ===== 5. DATA ANALYTICS =====
  {
    id: 6,
    title: "E-commerce Sales Dashboard",
    category: "data-analytics",
    categoryName: "Data Analytics",
    icon: "📊",
    color: "cyan",
    description: "Interactive Power BI dashboard analyzing 50K+ transactions. Identified top products, seasonal trends, and customer segments.",
    tech: ["Power BI", "SQL", "Excel", "DAX"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },
  {
    id: 7,
    title: "Customer Churn Prediction Analysis",
    category: "data-analytics",
    categoryName: "Data Analytics",
    icon: "📉",
    color: "cyan",
    description: "Analyzed customer behavior patterns to predict churn. Created visualizations and recommendations that reduced churn by 15%.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },
  {
    id: 8,
    title: "COVID-19 Data Analysis (Bangladesh)",
    category: "data-analytics",
    categoryName: "Data Analytics",
    icon: "🦠",
    color: "cyan",
    description: "Time-series analysis of COVID-19 spread in Bangladesh. Built interactive dashboards with Plotly.",
    tech: ["Python", "Pandas", "Plotly", "Jupyter"],
    liveLink: null,
    githubLink: "#",
    isLive: false
  },

  // ===== 6. GOVT. ENTERPRISE (সবশেষে) =====
  {
    id: 9,
    title: "PPS Software - Ministry of Planning",
    category: "government",
    categoryName: "Software Engineering",
    icon: "🏛️",
    color: "amber",
    description: "Enterprise-grade project planning system. Full-stack development handling 1000+ concurrent users with 99.9% uptime.",
    tech: ["Angular", "Node.js", "PostgreSQL", "Docker", "Redis"],
    liveLink: null,
    githubLink: "#",
    isLive: true
  },
  {
    id: 10,
    title: "Data Visualization Dashboard",
    category: "government",
    categoryName: "Software Engineering",
    icon: "📈",
    color: "amber",
    description: "Real-time data visualization for project performance metrics. Reduced report generation time by 70%.",
    tech: ["Angular", "D3.js", "PostgreSQL", "REST API"],
    liveLink: null,
    githubLink: "#",
    isLive: true
  },
  {
    id: 11,
    title: "Performance Optimization Initiative",
    category: "government",
    categoryName: "Software Engineering",
    icon: "⚡",
    color: "amber",
    description: "Optimized application performance achieving 35-40% reduction in page load time through lazy loading & bundle optimization.",
    tech: ["Angular", "Webpack", "Lazy Loading", "Code Splitting"],
    liveLink: null,
    githubLink: "#",
    isLive: true
  }
];

  const filters = [
    { id: "all", label: "All Projects", icon: "📁" },
    { id: "government", label: "Govt. Enterprise", icon: "🏛️" },
    { id: "ml-production", label: "ML Production", icon: "🚀" },
    { id: "llm", label: "LLM & RAG", icon: "🤖" },
    { id: "computer-vision", label: "Computer Vision", icon: "👁️" },
    { id: "ai-agent", label: "AI Agents", icon: "⚡" },
    { id: "data-analytics", label: "Data Analytics", icon: "📊" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2">
          <span className="animate-pulse">📄</span>
          Downloading Resume...
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="grid-bg">
          <div className="grid-line"></div>
          <div className="glow-spot glow-spot-1"></div>
          <div className="glow-spot glow-spot-2"></div>
          <div className="glow-spot glow-spot-3"></div>
        </div>
        
        <div className="text-center">
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-8 inline-block animate-pulse-glow">
            🚀 3.5+ Years Engineering Maturity
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
            Md. Touhidul <span className="gradient-text animate-gradient">Islam</span>
          </h1>
          <p className="mt-6 text-xl text-blue-400 font-medium animate-slide-in-delay-1">
            AI/ML Engineer | LLM & Agentic AI Specialist
          </p>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-slide-in-delay-2">
            Building production-ready AI systems with <strong className="text-white">LLM Fine-tuning, RAG, AI Agents, and Computer Vision</strong>. 
            3.5+ years of full-stack experience at government project.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-slide-in-delay-3">
            <Link href="#projects" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20 relative overflow-hidden">
              <span className="relative z-10">🤖 Explore My AI Models</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </Link>
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center gap-2 hover:scale-105 duration-300"
            >
              <span>📄</span>
              Download Resume (PDF)
              <span className="animate-bounce-x">→</span>
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center animate-slide-in-delay-4">
            {[
              { value: "3.5+", label: "Years Experience", color: "from-blue-400 to-blue-600" },
              { value: "98%", label: "Model Precision", color: "from-purple-400 to-purple-600" },
              { value: "8+", label: "AI Projects", color: "from-emerald-400 to-emerald-600" },
              { value: "Govt.", label: "Enterprise Project", color: "from-orange-400 to-orange-600" },
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-slate-500 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why <span className="gradient-text">Hire Me</span>?
          </h2>
          <p className="text-slate-400 text-sm">Most candidates know one domain. I master three — and connect them seamlessly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-hover glass p-6 rounded-2xl text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">Production-Ready AI</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Most AI models stay in Jupyter notebooks. I deploy with <strong className="text-white">FastAPI + Docker</strong> — proven by <strong className="text-green-400">99.9% uptime</strong> at Ministry of Planning.</p>
          </div>
          <div className="card-hover glass p-6 rounded-2xl text-center">
            <div className="text-5xl mb-4">🗄️</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">PostgreSQL Expert</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Most AI engineers can't work with production databases. I design <strong className="text-white">complex schemas & optimize queries</strong> for government-scale applications.</p>
          </div>
          <div className="card-hover glass p-6 rounded-2xl text-center">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Full-Stack Capable</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Most AI engineers can't build UIs. I create <strong className="text-white">beautiful dashboards</strong> (React/Angular) — no extra frontend team needed.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-blue-600/10 rounded-2xl text-center border border-blue-500/30">
          <p className="text-white text-lg font-semibold">💡 <span className="text-blue-400">Bottom Line:</span> You don't need to hire 3 people (AI + Data + Frontend). You just need me.</p>
          <p className="text-slate-400 text-sm mt-2">One engineer, end-to-end delivery — from data to model to production UI.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-blue-600 rounded-full animate-pulse"></span> 
          Technical Arsenal
        </h2>
        
        <div className="card-hover glass mb-8 p-6 rounded-2xl border border-purple-500/30">
          <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Generative AI & Advanced ML
          </h3>
          <div className="flex flex-wrap gap-3">
            {["LLM Fine-tuning (LoRA)", "RAG (LangChain)", "AI Agents", "Prompt Engineering", "Transformers", "YOLOv11"].map((skill, i) => (
              <span key={i} className="px-3 py-1.5 bg-purple-600/20 text-purple-300 rounded-lg text-sm hover:bg-purple-600/40 transition-all duration-300 hover:scale-105 cursor-pointer">{skill}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🤖", title: "LLM & GenAI", skills: "LangChain, RAG, LoRA Fine-tuning, AI Agents, Transformers", color: "blue" },
            { icon: "👁️", title: "Computer Vision", skills: "YOLOv11, OpenCV, PyTorch, TensorFlow", color: "purple" },
            { icon: "⚙️", title: "Backend", skills: "FastAPI, Node.js, Docker, Laravel", color: "emerald" },
            { icon: "🎨", title: "Frontend", skills: "Next.js, React, Angular, Tailwind", color: "orange" },
          ].map((skill, idx) => (
            <div key={idx} className="card-hover glass p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
              <h3 className={`text-${skill.color}-400 font-bold mb-3 uppercase text-xs tracking-widest`}>{skill.title}</h3>
              <p className="text-white font-medium text-lg leading-snug">{skill.skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with Filter */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
          <span className="w-12 h-1 bg-purple-600 rounded-full animate-pulse"></span> 
          Featured AI Projects
        </h2>
        
        <p className="text-slate-400 mb-8 text-sm">
          🎯 {projects.filter(p => p.isLive).length} projects live · {projects.length} total projects
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-blue-600/30 text-blue-400 border border-blue-500/50 shadow-lg shadow-blue-600/20"
                  : "glass text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
              {filter.id !== "all" && (
                <span className="text-xs opacity-70">
                  ({projects.filter(p => p.category === filter.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="card-hover glass p-6 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <div className="flex gap-2 flex-wrap">
                  <div className={`px-3 py-1.5 bg-${project.color}-600/20 text-${project.color}-400 rounded-lg text-xs font-semibold flex items-center gap-1`}>
                    <span>{project.icon}</span>
                    <span>{project.categoryName}</span>
                  </div>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${project.color}-400 transition-colors duration-300`}>
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-slate-800 rounded-lg text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.liveLink ? (
                   <div className="px-3 py-1.5 bg-green-600/20 text-green-400 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <span className="animate-pulse">●</span>
                      <span>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Live Demo
                      </a>
                      </span>
                    </div>
                ) : (
                  <span className="text-yellow-500/60 text-xs flex items-center gap-1">
                    ⏳ Live Demo Coming Soon
                  </span>
                )}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:underline flex items-center gap-1"
                >
                  📂 GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass rounded-2xl">
            <p className="text-slate-400">No projects found in this category.</p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-10 text-center text-xs text-slate-500">
          <span>🎯 {projects.filter(p => p.isLive).length} Production Ready</span>
          <span className="mx-2">•</span>
          <span>🤖 {projects.length} AI Projects</span>
          <span className="mx-2">•</span>
          <span>🚀 More coming soon...</span>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-green-600 rounded-full animate-pulse"></span> 
          Professional Experience
        </h2>
        <div className="card-hover glass p-10 rounded-[2.5rem] transition-all duration-500">
          <div className="flex flex-wrap justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Sr. Programmer</h3>
              <p className="text-blue-400 text-lg">IBCS-Primax Software Bangladesh Ltd.</p>
            </div>
            <span className="text-slate-500 px-3 py-1 bg-slate-800 rounded-lg">Aug 2022 – Present</span>
          </div>
          <p className="text-slate-400 mb-4">📍 PPS Software for <strong className="text-white">Ministry of Planning, Bangladesh</strong></p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="text-green-400 mt-1">🚀</span>
              <span>Reduced page load time by <strong className="text-green-400">35-40%</strong> through lazy loading & bundle optimization</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-400 mt-1">🏛️</span>
              <span>Developed enterprise-grade Angular frontend for government stakeholders</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-400 mt-1">📊</span>
              <span>Integrated data visualization dashboards for complex datasets</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-400 mt-1">🗄️</span>
              <span>Designed and optimized PostgreSQL database schemas for government-scale applications</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-yellow-600 rounded-full animate-pulse"></span> 
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🤖", title: "AI Engineering Bootcamp", issuer: "Ostad (2024)", desc: "LLM, RAG, Agent, Model Tuning" },
            { icon: "📊", title: "Google Data Analytics", issuer: "Google / Coursera", desc: "Data Analysis, SQL, Python" },
            { icon: "☁️", title: "AWS Data Analytics", issuer: "Coursera", desc: "Cloud & Analytics" },
          ].map((cert, idx) => (
            <div key={idx} className="card-hover glass p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <div className="text-5xl mb-3">{cert.icon}</div>
              <h3 className="font-bold text-white">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.issuer}</p>
              <p className="text-xs text-slate-500 mt-2">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-pulse-glow">Let's build something intelligent.</h2>
          <p className="text-slate-400 mb-2">📌 Open for AI/ML Engineer, LLM Engineer, or Computer Vision Engineer roles</p>
          <p className="text-slate-500 mb-8 italic">Available for full-time opportunities & AI consultancy</p>
         <div className="flex justify-center gap-8 text-slate-400 flex-wrap">
  <a 
    href="https://github.com/touhid71" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110"
  >
    🐙 GitHub
  </a>
  <a 
    href="https://www.linkedin.com/in/touhid71/" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110"
  >
    🔗 LinkedIn
  </a>
  <a 
    href="mailto:touhidul.swe@gmail.com" 
    className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110"
  >
    📧 touhidul.swe@gmail.com
  </a>
  <button 
    onClick={handleDownloadResume} 
    className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110"
  >
    📄 Download Resume
  </button>
</div>
          <div className="mt-8 flex justify-center gap-4 text-xs text-slate-600 flex-wrap">
            <span className="flex items-center gap-1">🏆 98% Model Precision</span><span>•</span>
            <span className="flex items-center gap-1">🚀 35-40% Performance Gain</span><span>•</span>
            <span className="flex items-center gap-1">🏛️ Govt. Enterprise Project</span>
          </div>
          <p className="mt-12 text-xs text-slate-600">© 2026 Md. Touhidul Islam. Built with Next.js + Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}