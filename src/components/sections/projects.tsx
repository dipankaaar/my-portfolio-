"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  "1519389953810-75caa347eec6", "1517433622923-1ce82f16a04a", "1484417142883-115f532ba0b7",
  "1458913958087-3d90610330d0", "1555949963-ff9fe0c870eb", "1504384308090-c894fdcc538d",
  "1457305237443-44c3d5a30b89", "1518932945647-7a3c96d4128e", "1504639725590-34d0984388bd",
  "1551288049-bebda4e38f71", "1544256718-3bcf237f3974", "1503437313881-5010892a061c",
  "1461958508236-9a23cc5141e2", "1488229297570-58e1c6af70ad", "1563206767540-1092e0edc8ef",
  "1510515152771-cd792cd8e530", "1517433367889-f54f7620db4f", "1523961131990-521072f162d4",
  "1535223289827-42f1e9919769", "1525547719571-a2d4ac8945e2", "1498084339585-eaee5dc6eb83"
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

import { SpotlightCard } from "../ui/spotlight-card";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        My Projects
        <span className="h-[1px] bg-lightest-navy flex-1 ml-6" />
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(3);
            }}
            className={cn(
              "px-6 py-2 rounded-full border border-cyan/20 font-mono text-sm transition-all",
              filter === cat ? "bg-cyan text-navy" : "hover:bg-cyan/10 text-cyan"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
              style={{ transformOrigin: "bottom center" }}
            >
              <SpotlightCard className="group overflow-hidden border-cyan/20 bg-navy/40 backdrop-blur-md hover:border-cyan transition-all duration-500 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] relative">
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent translate-y-[-100%] group-hover:translate-y-[250px] transition-transform duration-1000 ease-in-out z-20" />
                
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent group-hover:bg-cyan/10 transition-all duration-500" />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-4 z-10">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-cyan text-navy rounded-full hover:scale-110 hover:shadow-[0_0_15px_#64ffda] transition-all"
                    >
                      <Maximize2 size={20} />
                    </button>
                    <a href={project.github} className="p-3 bg-navy/80 backdrop-blur-sm text-cyan rounded-full hover:scale-110 hover:border-cyan transition-all border border-cyan/30">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-cyan transition-colors">{project.title}</h3>
                  <p className="text-slate text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-cyan uppercase tracking-wider bg-transparent border border-cyan/30 group-hover:border-cyan px-2 py-1 rounded transition-colors shadow-[0_0_10px_rgba(100,255,218,0.05)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-16 relative z-10">
          <button 
            onClick={() => setVisibleCount(filteredProjects.length)}
            className="px-8 py-3 bg-transparent border border-cyan text-cyan font-mono font-bold hover:bg-cyan hover:text-navy hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all rounded-lg"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              className="relative w-full max-w-3xl bg-navy/90 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(100,255,218,0.3)] border border-cyan/40 backdrop-blur-xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-200/50 dark:bg-navy/50 rounded-full text-foreground hover:bg-cyan/20 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="relative aspect-video">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
              
              <div className="p-8">
                <span className="text-cyan font-mono text-sm uppercase tracking-tighter mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>
                <p className="text-slate mb-8 leading-relaxed">
                  {selectedProject.desc} Detailed project overview would go here, discussing challenges, 
                  solutions, and architectural decisions made during development.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                   {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-cyan border border-cyan/20 px-3 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={selectedProject.live} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/80 transition-all">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                  <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-cyan/30 text-foreground font-bold rounded-lg hover:bg-cyan/10 transition-all">
                    <FaGithub size={20} /> Repository
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
