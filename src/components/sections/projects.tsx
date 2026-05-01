"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HandCard } from "../ui/hand-card";
import { HandButton } from "../ui/hand-button";

/* Same project data... */
const categories = ["All", "Beginner", "Intermediate", "Advanced"];

const projectList = [
  // Beginner
  { t: "AI Chatbot (FAQ based)", c: "Beginner" }, { t: "Resume Analyzer", c: "Beginner" }, { t: "Text Summarizer", c: "Beginner" }, { t: "Grammar Corrector", c: "Beginner" }, { t: "Email Generator", c: "Beginner" }, { t: "Blog Title Generator", c: "Beginner" }, { t: "To-Do List AI Assistant", c: "Beginner" }, { t: "Simple Voice Assistant", c: "Beginner" }, { t: "Notes Organizer AI", c: "Beginner" }, { t: "AI Password Generator", c: "Beginner" },
  // Intermediate
  { t: "Customer Support Chatbot (with memory)", c: "Intermediate" }, { t: "Multi-language Translator App", c: "Intermediate" }, { t: "AI Code Explainer", c: "Intermediate" }, { t: "YouTube Video Summarizer", c: "Intermediate" }, { t: "PDF Q&A Bot (RAG basic)", c: "Intermediate" }, { t: "AI Fitness Planner", c: "Intermediate" }, { t: "AI Study Planner", c: "Intermediate" }, { t: "AI Cover Letter Generator", c: "Intermediate" }, { t: "AI News Aggregator", c: "Intermediate" }, { t: "AI Social Media Post Generator", c: "Intermediate" },
  // Advanced
  { t: "Multi-Agent Research Assistant", c: "Advanced" }, { t: "Autonomous Task Agent (AutoGPT style)", c: "Advanced" }, { t: "AI SaaS (subscription-based)", c: "Advanced" }, { t: "AI Content Automation System", c: "Advanced" }, { t: "AI Personal Finance Advisor", c: "Advanced" }, { t: "AI Interview Simulator", c: "Advanced" }, { t: "AI Legal Document Analyzer", c: "Advanced" }, { t: "AI Medical Symptom Checker (basic)", c: "Advanced" }, { t: "RAG + Knowledge Graph System", c: "Advanced" }, { t: "AI Workflow Automation (API integrated)", c: "Advanced" }
];

const unsplashIds = [
  "1677442136019-21780ecad995", "1620712943543-bcc4688e7485", "1451187580459-43490279c0fa",
  "1550751827-4bd374c3f58b", "1518770660439-4636190af475", "1581091226825-a6a2a5aee158",
  "1485827404703-89b55fcc595e", "1526374965328-7f61d4dc18c5", "1531297122-e1280928e215",
  "1519389953810-75caa347eec6"
];

const projects = projectList.map((p, i) => ({
  id: i + 1,
  title: p.t,
  category: p.c,
  desc: `A powerful ${p.c.toLowerCase()} AI tool focusing on automated workflows and modern LLM technologies. Designed to solve complex tasks autonomously.`,
  image: `https://images.unsplash.com/photo-${unsplashIds[i % unsplashIds.length]}?auto=format&fit=crop&q=80&w=800`,
  tech: p.c === "Beginner" 
      ? ["OpenAI API", "React", "Node.js"] 
      : p.c === "Intermediate" 
      ? ["LangChain", "Next.js", "Python", "Vector DB"] 
      : ["AutoGPT", "Pinecone", "Knowledge Graphs", "Next.js"],
  github: "#",
  live: "#",
}));

const HighlightUnderline = () => (
  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent-red)]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,5 Q25,8 50,5 T100,5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 4" />
  </svg>
);

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="relative inline-block mb-12">
        <motion.h2 
          layoutId="projects"
          className="text-4xl md:text-5xl font-mono font-bold text-[var(--fg-pencil)]"
        >
          My Sketches (Projects)
        </motion.h2>
        <HighlightUnderline />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(6);
            }}
            className={cn(
              "px-6 py-2 border-[3px] border-[var(--fg-pencil)] font-sans text-lg font-bold transition-all shadow-[2px_2px_0px_0px_var(--fg-pencil)] rounded-[var(--radius-wobbly)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]",
              filter === cat ? "bg-[var(--accent-red)] text-white" : "bg-white text-[var(--fg-pencil)] hover:bg-[var(--fg-muted)]"
            )}
            style={{ borderRadius: "var(--radius-wobbly)" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.slice(0, visibleCount).map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className="w-full"
            >
              <HandCard 
                decoration={i % 3 === 0 ? "tape" : "none"} 
                variant={i % 4 === 1 ? "post-it" : "default"}
                className={cn(
                  "h-full flex flex-col group cursor-pointer hover:shadow-[6px_6px_0px_0px_var(--fg-pencil)] hover:-translate-y-1 transition-all",
                  i % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                )}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Placeholder / Frame (Polaroid style instead of double-wobble) */}
                <div className="relative aspect-video mb-6 border-[3px] border-[var(--fg-pencil)] rounded-sm overflow-hidden bg-white shadow-[2px_2px_0px_0px_var(--fg-pencil)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Overlay Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-[2px]">
                    <div className="p-3 bg-[var(--bg-post-it)] border-[3px] border-[var(--fg-pencil)] rounded-full shadow-[2px_2px_0px_0px_var(--fg-pencil)]">
                      <Maximize2 strokeWidth={3} className="text-[var(--fg-pencil)]" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-mono font-bold border-2 border-[var(--fg-pencil)] text-[var(--fg-pencil)] bg-[var(--bg-post-it)] rounded-full shadow-[1px_1px_0px_0px_var(--fg-pencil)]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--fg-pencil)] leading-tight">{project.title}</h3>
                  <p className="text-[var(--fg-pencil)] text-[1.1rem] mb-6 font-sans line-clamp-3 leading-relaxed">{project.desc}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[var(--fg-muted)]">
                    {project.tech.map((t) => (
                      <span key={t} className="text-sm font-mono text-[var(--fg-pencil)] border-[2px] border-[var(--fg-pencil)] px-3 py-1 bg-white shadow-[1px_1px_0px_0px_var(--fg-pencil)] rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </HandCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-16 relative z-10">
          <HandButton 
            onClick={() => setVisibleCount(filteredProjects.length)}
            variant="secondary"
          >
            Load More Pages...
          </HandButton>
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4">
            {/* Hand-drawn scribble overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[var(--bg-paper)]/80 backdrop-blur-sm"
              style={{ backgroundImage: "radial-gradient(var(--fg-pencil) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.1 }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 50, scale: 0.95, rotate: 2 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-3xl bg-white border-[4px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly-md)] p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--fg-pencil)] overflow-y-auto max-h-[90vh]"
              style={{ borderRadius: "var(--radius-wobbly-md)" }}
            >
              {/* Tack decoration */}
              <div className="absolute -top-3 left-1/2 w-6 h-6 -translate-x-1/2 rounded-full bg-[var(--accent-blue)] border-[3px] border-[var(--fg-pencil)] shadow-[2px_2px_0px_0px_var(--fg-pencil)] z-20" />

              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 p-2 bg-[var(--bg-post-it)] border-2 border-[var(--fg-pencil)] shadow-[2px_2px_0px_0px_var(--fg-pencil)] rounded-full hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <X strokeWidth={3} className="text-[var(--fg-pencil)]" />
              </button>
              
              <div className="relative aspect-video border-[3px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly)] overflow-hidden mb-6" style={{ borderRadius: "var(--radius-wobbly)" }}>
                <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="100vw" className="object-cover" />
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 mb-3 text-sm font-mono border-2 border-dashed border-[var(--fg-pencil)] text-[var(--fg-pencil)] bg-[var(--bg-post-it)] rounded">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl font-mono font-bold mb-4 text-[var(--fg-pencil)] leading-none">{selectedProject.title}</h3>
                
                <p className="text-[var(--fg-pencil)] text-lg font-sans mb-8 leading-relaxed">
                  {selectedProject.desc} Detailed project overview goes here. Focus on the organic process, the messy middle, and how the technical hurdles were overcome without the corporate jargon.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 p-4 bg-[var(--fg-muted)] border-2 border-dashed border-[var(--fg-pencil)] rounded-[var(--radius-wobbly)]" style={{ borderRadius: "var(--radius-wobbly)" }}>
                  <span className="w-full font-mono font-bold text-[var(--fg-pencil)] mb-1">Tools used:</span>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-sm font-mono text-white bg-[var(--fg-pencil)] px-3 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={selectedProject.live} className="flex-1">
                    <HandButton variant="primary" className="w-full flex items-center justify-center gap-2">
                      <ExternalLink strokeWidth={3} size={20} /> Live Demo
                    </HandButton>
                  </a>
                  <a href={selectedProject.github} className="flex-1">
                    <HandButton variant="secondary" className="w-full flex items-center justify-center gap-2">
                      <FaGithub size={20} /> Source Code
                    </HandButton>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
