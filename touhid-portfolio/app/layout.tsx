"use client";

import { useState } from "react";
import './globals.css'

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header background only
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap" rel="stylesheet" />
        <title>Md. Touhidul Islam | AI/ML Engineer | LLM & Agentic AI Specialist</title>
        <meta name="description" content="AI/ML Engineer with 3.5+ years experience specializing in LLM Fine-tuning, RAG, AI Agents, and Computer Vision. Built production-ready AI systems for government projects. Open for AI Engineer roles." />
        <meta name="keywords" content="AI Engineer, Machine Learning Engineer, LLM Engineer, Computer Vision, RAG, LangChain, YOLO, Generative AI, Bangladesh, Dhaka" />
        <meta name="author" content="Md. Touhidul Islam" />
      </head>
      <body className="text-slate-300">
        {/* Header Menu */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 glass" : "py-5 bg-transparent"
        }`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-2 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">MT</span>
              </div>
              <span className="font-bold text-white text-lg hidden sm:inline-block">
                Touhid<span className="gradient-text">.ai</span>
              </span>
            </button>

            {/* Desktop Navigation - Only hover effect, no active */}
            <nav className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 text-slate-400 hover:bg-blue-600/20 hover:text-blue-400"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => {
                  const resumeBtn = document.querySelector('button[onclick*="handleDownloadResume"]');
                  if (resumeBtn) (resumeBtn as HTMLButtonElement).click();
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20 flex items-center gap-2"
              >
                <span>📄</span>
                <span>Resume</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl glass flex flex-col justify-center items-center gap-1.5 transition-all duration-300 hover:bg-white/10"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>

          {/* Mobile Navigation - Only hover effect, no active */}
          <div className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 text-slate-400 hover:bg-blue-600/20 hover:text-blue-400"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  const resumeBtn = document.querySelector('button[onclick*="handleDownloadResume"]');
                  if (resumeBtn) (resumeBtn as HTMLButtonElement).click();
                }}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-sm font-medium text-white transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 md:pt-24">{children}</main>
      </body>
    </html>
  );
}