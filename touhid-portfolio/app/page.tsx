"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadResume = () => {
    window.open("/resume-md-touhidul-islam.pdf", "_blank");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

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
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-purple-600 rounded-full animate-pulse"></span> 
          Featured AI Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-7 card-hover glass p-10 rounded-[2.5rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-xl text-sm font-semibold flex items-center gap-2"><span className="text-xl">📚</span> LLM / RAG</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"><span className="text-xs group-hover:text-white transition-colors">→</span></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">RAG-based Document Q&A</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">Chat with your PDFs using LLM + LangChain + Vector DB. 40% better accuracy than vanilla LLM.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">LangChain</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">ChromaDB</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">Llama 2</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-purple-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">🔗 Live Demo →</Link>
              <Link href="#" className="text-slate-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">📂 GitHub →</Link>
            </div>
          </div>

          <div className="md:col-span-5 card-hover glass p-10 rounded-[2.5rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-xl text-sm font-semibold flex items-center gap-2"><span className="text-xl">💵</span> Computer Vision</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"><span className="text-xs group-hover:text-white transition-colors">→</span></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Bangladeshi Currency Detection</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">YOLOv11 model with 98%+ precision. Optimized for mobile deployment.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">YOLOv11</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">OpenCV</span>
            </div>
            <Link href="#" className="text-blue-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">📂 GitHub →</Link>
          </div>

          <div className="md:col-span-6 card-hover glass p-10 rounded-[2.5rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="px-4 py-2 bg-green-600/20 text-green-400 rounded-xl text-sm font-semibold flex items-center gap-2"><span className="text-xl">🔍</span> AI Agent / Automation</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"><span className="text-xs group-hover:text-white transition-colors">→</span></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">AI Research Agent</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">Autonomous agent that searches web, summarizes content, and writes research reports.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">LangChain</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">GPT-4</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">Tavily</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-green-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">🔗 Live Demo →</Link>
              <Link href="#" className="text-slate-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">📂 GitHub →</Link>
            </div>
          </div>

          <div className="md:col-span-6 card-hover glass p-10 rounded-[2.5rem] group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-xl text-sm font-semibold flex items-center gap-2"><span className="text-xl">🇧🇩</span> Model Tuning</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"><span className="text-xs group-hover:text-white transition-colors">→</span></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Bengali LLM Fine-tuning (LoRA)</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">Fine-tuned Gemma-2B on Bengali dataset. 60% less training time vs full fine-tuning.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">LoRA</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">PEFT</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300">Hugging Face</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-orange-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">🤗 Hugging Face →</Link>
              <Link href="#" className="text-slate-400 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">📂 GitHub →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-green-600 rounded-full animate-pulse"></span> 
          Professional Experience
        </h2>
        <div className="card-hover glass p-10 rounded-[2.5rem] transition-all duration-500">
          <div className="flex flex-wrap justify-between items-start mb-6">
            <div><h3 className="text-2xl font-bold text-white">Sr. Programmer</h3><p className="text-blue-400 text-lg">IBCS-Primax Software Bangladesh Ltd.</p></div>
            <span className="text-slate-500 px-3 py-1 bg-slate-800 rounded-lg">Aug 2022 – Present</span>
          </div>
          <p className="text-slate-400 mb-4">📍 PPS Software for <strong className="text-white">Ministry of Planning, Bangladesh</strong></p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3 items-start"><span className="text-green-400 mt-1">🚀</span><span>Reduced page load time by <strong className="text-green-400">35-40%</strong> through lazy loading & bundle optimization</span></li>
            <li className="flex gap-3 items-start"><span className="text-green-400 mt-1">🏛️</span><span>Developed enterprise-grade Angular frontend for government stakeholders</span></li>
            <li className="flex gap-3 items-start"><span className="text-green-400 mt-1">📊</span><span>Integrated data visualization dashboards for complex datasets</span></li>
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

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-pulse-glow">Let's build something intelligent.</h2>
          <p className="text-slate-400 mb-2">📌 Open for AI/ML Engineer, LLM Engineer, or Computer Vision Engineer roles</p>
          <p className="text-slate-500 mb-8 italic">Available for full-time opportunities & AI consultancy</p>
          <div className="flex justify-center gap-8 text-slate-400 flex-wrap">
            <Link href="#" className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110">🐙 GitHub</Link>
            <Link href="#" className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110">🔗 LinkedIn</Link>
            <Link href="mailto:touhid@example.com" className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110">📧 touhid@example.com</Link>
            <button onClick={handleDownloadResume} className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110">📄 Download Resume</button>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-xs text-slate-600 flex-wrap">
            <span className="flex items-center gap-1">🏆 98% Model Precision</span><span>•</span>
            <span className="flex items-center gap-1">🚀 35-40% Performance Gain</span><span>•</span>
            <span className="flex items-center gap-1">🏛️ Govt. Enterprise Project</span>
          </div>
          <p className="mt-12 text-xs text-slate-600">© 2026 Md. Touhidul Islam. Built with Next.js + Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-slide-in-delay-1 { animation: fade-in-up 0.6s ease-out 0.1s forwards; opacity: 0; }
        .animate-slide-in-delay-2 { animation: fade-in-up 0.6s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-in-delay-3 { animation: fade-in-up 0.6s ease-out 0.3s forwards; opacity: 0; }
        .animate-slide-in-delay-4 { animation: fade-in-up 0.6s ease-out 0.4s forwards; opacity: 0; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59,130,246,0.3); }
          50% { box-shadow: 0 0 20px rgba(59,130,246,0.6); }
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { animation: bounce-x 1s ease-in-out infinite; display: inline-block; }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
        }

        .grid-line {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .glow-spot {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: glowPulse 4s ease-in-out infinite;
        }

        .glow-spot-1 {
          background: radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .glow-spot-2 {
          background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%);
          bottom: 20%;
          right: 10%;
          animation-delay: -1.5s;
        }

        .glow-spot-3 {
          background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%);
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          animation-delay: -3s;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease-in-out;
        }

        /* Soft Glow Effect - কম গ্লো */
        .card-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .card-hover:hover {
          transform: scale(1.02);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease-in-out;
        }

        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #60a5fa);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}