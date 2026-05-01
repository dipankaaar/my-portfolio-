"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Star } from "lucide-react";


export const AIAgents = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="ai-agents" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden relative">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Floating Dust Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--fg-pencil)]/10 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 0.4, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Film Grain Texture Overlay handled globally in page.tsx */}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Content with Blueprint Decorations */}
        <div className="flex-1 order-2 lg:order-1 relative">
          {/* Decorative Technical Annotation */}
          <div className="absolute -top-12 -left-8 text-[10px] font-mono text-[var(--fg-pencil)]/30 uppercase tracking-[0.2em] -rotate-90 origin-bottom-left">
            Architecture_Module v2.0 // Ref_042
          </div>
          <div className="absolute top-0 -right-4 w-px h-24 bg-gradient-to-b from-[var(--fg-pencil)]/20 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block mb-8"
          >
            <motion.h2 
              layoutId="ai-agents"
              className="text-4xl md:text-7xl font-mono font-bold text-[var(--fg-pencil)] leading-tight"
            >
              Building <br/>
              <span className="relative">
                Intelligent
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[var(--accent-red)]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0,8 Q50,0 100,8" fill="currentColor" />
                </svg>
              </span> <br/>
              <span className="text-[var(--accent-red)] italic underline decoration-wavy decoration-2 underline-offset-8">AI Agents</span>
            </motion.h2>
          </motion.div>
          
          <p className="text-[var(--fg-pencil)] text-2xl font-sans mb-10 leading-relaxed max-w-xl opacity-80">
            I craft <span className="relative inline-block">
              autonomous
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[var(--bg-post-it)]/50 -z-10 -rotate-1" />
            </span> brain modules that navigate complexity with cinematic precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12 relative">
             {/* Decorative measurement lines */}
             <div className="absolute top-0 bottom-0 -left-6 w-px bg-dashed border-l border-dashed border-[var(--fg-pencil)]/10" />
            
            {[
              "Automated Decision Streams",
              "Multi-Agent Orchestration",
              "RAG-Powered Memory",
              "Tool-Driven Execution"
            ].map((bullet, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  className="w-8 h-8 flex items-center justify-center border-2 border-[var(--fg-pencil)]/30 rounded-full group-hover:border-[var(--accent-red)] transition-colors"
                >
                  <Star size={14} className="text-[var(--fg-pencil)]/40 group-hover:text-[var(--accent-red)]" />
                </motion.div>
                <span className="text-[var(--fg-pencil)] font-mono font-bold text-lg tracking-tight group-hover:translate-x-1 transition-transform">{bullet}</span>
              </motion.div>
            ))}
          </div>

          <div className="relative group max-w-md">
            {/* Corner Bracket Decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--fg-pencil)]/20" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--fg-pencil)]/20" />
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-10 border-[3px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly-md)] bg-white shadow-[12px_12px_0px_0px_var(--fg-pencil)] relative overflow-hidden"
            >
              <div className="absolute top-2 right-4 font-mono text-[8px] text-[var(--fg-pencil)]/20 uppercase">Module_Log: 01</div>
              <h4 className="text-xl font-mono font-bold text-[var(--accent-red)] mb-4 flex items-center gap-3">
                <Terminal size={20} /> 
                <span>SYSTEM_OVERVIEW</span>
              </h4>
              <p className="text-[var(--fg-pencil)] font-sans text-lg leading-relaxed">
                Autonomous workflow engines designed for <span className="font-bold border-b-2 border-[var(--fg-pencil)]">extreme efficiency</span> and zero-manual intervention.
              </p>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

