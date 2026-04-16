"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Globe, Terminal, Workflow, Brain } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative group w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-[400px] mx-auto"
          >
            {/* 3D Depth Circular Container */}
            <div className="relative group perspective-1000 animate-cyber-float">
              <motion.div
                whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
                className="relative z-10 rounded-full overflow-hidden border border-cyan/30 bg-navy/50 backdrop-blur-sm p-3 transition-all duration-500 shadow-[0_0_40px_rgba(100,255,218,0.15)] aspect-square"
              >
                {/* Holographic Shimmer Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity bg-gradient-to-tr from-cyan/30 via-transparent to-purple-500/20" />
                
                <div className="relative rounded-full overflow-hidden w-full h-full bg-light-navy border border-black group-hover:border-cyan/50 transition-colors duration-500">
                  <Image
                    src="/profile.jpg"
                    alt="Dipankar Gorai"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Digital Scanning Effect Overlay */}
                  <motion.div
                    animate={{ y: ["-100%", "300%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-x-0 h-[3px] bg-cyan/60 blur-[2px] z-30 pointer-events-none shadow-[0_0_10px_#64ffda]"
                  />
                </div>
              </motion.div>

              {/* Decorative Futuristic Floating Frames (Circular) */}
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute -inset-6 border-[1.5px] border-cyan/20 border-dashed rounded-full -z-10 group-hover:-inset-8 hover:border-cyan/50 transition-all duration-500" />
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute -inset-10 border-2 border-transparent border-t-cyan/40 border-b-cyan/40 rounded-full -z-20 group-hover:-inset-12 hover:border-cyan transition-all duration-700 drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]" />
              <div className="absolute -inset-14 border border-white/5 rounded-full -z-30 group-hover:-inset-16 transition-all duration-1000 delay-100" />
            </div>
          </motion.div>
        </div>

        {/* Bio and Skills */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            About Me
            <span className="h-[1px] bg-lightest-navy flex-1 ml-6" />
          </h2>

          <div className="text-slate space-y-4 mb-8 leading-relaxed">
            <p>
              I am an AI-focused developer passionate about building intelligent systems that solve real-world problems. I specialize in creating autonomous agents, automation tools, and AI-powered applications using modern technologies.
            </p>
            <p>
              I focus on developing scalable, efficient, and practical solutions that can think, plan, and execute tasks with minimal human input.
            </p>
          </div>

          {/* Aesthetic Technical Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pb-12">
            {[
              { 
                category: "AI & Core Skills", 
                items: [
                  { name: "Python", level: 92 },
                  { name: "JavaScript", level: 85 },
                  { name: "OpenAI", level: 90 },
                  { name: "LangChain", level: 82 },
                  { name: "APIs", level: 88 },
                  { name: "RAG", level: 85 },
                  { name: "Automation", level: 95 }
                ],
                icon: <Brain className="w-5 h-5 text-cyan" />,
                span: "col-span-1 sm:col-span-2"
              },
              { 
                category: "Frontend", 
                items: [
                  { name: "HTML & CSS", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "React", level: 80 }
                ],
                icon: <Globe className="w-5 h-5 text-cyan" />,
                span: "col-span-1"
              },
              { 
                category: "Backend & Database", 
                items: [
                  { name: "Node.js", level: 75 },
                  { name: "MongoDB", level: 70 },
                  { name: "SQL", level: 80 }
                ],
                icon: <Terminal className="w-5 h-5 text-cyan" />,
                span: "col-span-1"
              },
              { 
                category: "Tools", 
                items: [
                  { name: "Git", level: 85 },
                  { name: "Tailwind CSS", level: 90 },
                  { name: "Bootstrap", level: 80 }
                ],
                icon: <Workflow className="w-5 h-5 text-cyan" />,
                span: "col-span-1 sm:col-span-2"
              }
            ].map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)", rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotateX: 0 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: i * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className={cn(
                  "relative p-6 rounded-2xl border border-cyan/20 bg-navy/40 backdrop-blur-md overflow-hidden group hover:border-cyan hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] transition-all duration-500",
                  skillGroup.span
                )}
              >
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-20" />
                
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-navy rounded-xl border border-cyan/30 group-hover:border-cyan group-hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-300">
                      {React.cloneElement(skillGroup.icon, { className: "w-5 h-5 text-cyan animate-pulse duration-1000" })}
                    </div>
                    <h3 className="text-foreground font-bold text-sm tracking-widest uppercase group-hover:text-cyan transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    {skillGroup.items.map((item, j) => (
                      <div key={j} className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-cyan uppercase tracking-wider">
                          <span>{item.name}</span>
                          <span className="text-slate">{item.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-black/40 dark:bg-navy/80 rounded-full overflow-hidden border border-cyan/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1.5, delay: 0.2 + (j * 0.1), ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-cyan shadow-[0_0_10px_#64ffda] relative"
                          >
                            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
