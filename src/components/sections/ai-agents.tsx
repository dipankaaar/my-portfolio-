"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, MessageSquare, Terminal, Workflow, Globe, Database, Cloud, Code } from "lucide-react";


export const AIAgents = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [20, -20]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const satellites = [
    { label: "Data Pipeline", icon: Database, angle: 0 },
    { label: "API Gateway", icon: Cloud, angle: 72 },
    { label: "Code Agent", icon: Code, angle: 144 },
    { label: "NLP Engine", icon: MessageSquare, angle: 216 },
    { label: "Web Crawler", icon: Globe, angle: 288 },
  ];

  if (!mounted) return null;

  return (
    <section id="ai-agents" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building Intelligent <span className="text-gradient">AI Agents</span>
          </h2>
          <p className="text-slate text-lg mb-8 leading-relaxed">
            I create autonomous AI systems that automate workflows and solve complex problems using modern LLM technologies.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Automates repetitive tasks",
              "Multi-step decision making",
              "API & tool integration",
              "Scalable AI solutions"
            ].map((bullet, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-navy/20 border border-transparent hover:border-cyan/40 hover:bg-navy/40 hover:animate-cyber-pulse transition-all cursor-default group"
              >
                <div className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_#64ffda] group-hover:scale-150 transition-transform" />
                <span className="text-light-slate">{bullet}</span>
              </motion.div>
            ))}
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {["OpenAI", "LangChain", "Python", "Node.js", "Vector DB", "APIs"].map((tech, i) => (
              <span key={i} className="text-xs font-mono text-cyan border border-cyan/30 bg-cyan/5 hover:bg-cyan/10 px-3 py-1.5 rounded-lg transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-lightest-navy/20 backdrop-blur-sm border border-cyan/20 hover:border-cyan shadow-[0_0_20px_rgba(100,255,218,0.05)] hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] animate-cyber-float relative overflow-hidden group transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan" />
            <h4 className="text-foreground font-bold mb-2 flex items-center gap-2 relative z-10">
              <Terminal size={18} className="text-cyan animate-pulse" /> Featured Implementation
            </h4>
            <p className="text-slate text-sm relative z-10">
              Built an AI agent that automates customer support queries and reduces manual workload.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 order-1 lg:order-2 w-full flex justify-center perspective-[1200px]" style={{ perspective: 1200 }}>
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center cursor-crosshair group/canvas"
          >
            {/* Geometric Background Layers */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               {/* Layer 1 - Outer slow octagon */}
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(-40px)" }}>
                 <svg className="w-[100%] h-[100%] opacity-20" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="98" fill="none" stroke="#64ffda" strokeWidth="0.5" strokeDasharray="2 6" />
                    <polygon points="100,5 167,33 195,100 167,167 100,195 33,167 5,100 33,33" fill="none" stroke="#64ffda" strokeWidth="0.5" />
                 </svg>
               </motion.div>

               {/* Layer 2 - Medium counter-spinning star */}
               <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(-20px)" }}>
                 <svg className="w-[80%] h-[80%] opacity-30" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="#64ffda" strokeWidth="0.5" />
                    {/* 8-point star */}
                    <polygon points="100,5 115,85 195,100 115,115 100,195 85,115 5,100 85,85" fill="none" stroke="#64ffda" strokeWidth="1" strokeDasharray="4 4"/>
                 </svg>
               </motion.div>

               {/* Layer 3 - Fast inner hexagon */}
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(0px)" }}>
                 <svg className="w-[55%] h-[55%] opacity-40 drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]" viewBox="0 0 200 200">
                    <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" fill="none" stroke="#64ffda" strokeWidth="1.5" />
                 </svg>
               </motion.div>
            </div>

            {/* Connecting Data Streams */}
            <div className="absolute inset-0 pointer-events-none z-10" style={{ transform: "translateZ(30px)" }}>
              <svg className="w-full h-full" viewBox="0 0 200 200">
                 {satellites.map((node, i) => {
                   const angleRad = (node.angle * Math.PI) / 180;
                   const x2 = 100 + 75 * Math.sin(angleRad);
                   const y2 = 100 - 75 * Math.cos(angleRad);
                   return (
                     <g key={i}>
                        <line x1="100" y1="100" x2={x2} y2={y2} stroke="rgba(100,255,218,0.2)" strokeWidth="1" strokeDasharray="2 4" />
                        <motion.circle r="3" fill="#64ffda" 
                          cx="100" cy="100"
                          initial={{ cx: 100, cy: 100 }}
                          animate={{ cx: [100, x2], cy: [100, y2], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4, ease: "easeInOut" }}
                          style={{ filter: "drop-shadow(0 0 5px #64ffda)" }}
                        />
                     </g>
                   )
                 })}
              </svg>
            </div>

            {/* Central Floating Orb (The Brain) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none" style={{ transform: "translateZ(60px)" }}>
              <motion.div
                className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-cyan/30 bg-navy/80 backdrop-blur-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(100,255,218,0.15)] relative overflow-hidden"
                animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {/* Techy scanning background inside the orb */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(100,255,218,0.2)_1px,transparent_1px)] bg-[size:100%_4px]" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-cyan/20 to-transparent" animate={{ y: ['100%', '-100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />

                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute inset-2 rounded-full border-t-2 border-r-2 border-cyan/50" />
                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute inset-[15px] rounded-full border-b-2 border-l-2 border-dashed border-cyan/40" />
                
                <Brain className="w-12 h-12 text-cyan drop-shadow-[0_0_15px_rgba(100,255,218,0.8)] mb-2 z-10" />
                <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-foreground shadow-black z-10">AI Core</span>
              </motion.div>
            </div>

            {/* Satellites */}
            <div className="absolute inset-0 pointer-events-none z-30" style={{ transform: "translateZ(40px)" }}>
              {satellites.map((node, i) => {
                  const angleRad = (node.angle * Math.PI) / 180;
                  const x = 50 + 38 * Math.sin(angleRad); // percentage
                  const y = 50 - 38 * Math.cos(angleRad); // percentage
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-16 h-16 md:w-20 md:h-20 -ml-8 -mt-8 md:-ml-10 md:-mt-10"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.3, ease: "easeInOut" }}
                    >
                       <div className="w-full h-full rounded-[1.25rem] bg-navy/60 border border-cyan/20 backdrop-blur-xl flex flex-col items-center justify-center hover:border-cyan hover:scale-110 shadow-lg hover:shadow-[0_0_25px_rgba(100,255,218,0.3)] transition-all duration-300 relative overflow-hidden group pointer-events-auto cursor-pointer">
                          <motion.div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <node.icon className="w-6 h-6 md:w-7 md:h-7 text-cyan mb-1 md:mb-2 drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] transition-transform group-hover:scale-110" />
                          <span className="text-[6px] md:text-[7px] font-mono text-cyan/90 uppercase text-center font-bold tracking-wider leading-tight px-1">{node.label}</span>
                       </div>
                    </motion.div>
                  )
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

