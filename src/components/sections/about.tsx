"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Terminal, Workflow, Brain } from "lucide-react";
import { HandCard } from "../ui/hand-card";

/* Hand-drawn underline SVG */
const Underline = () => (
  <svg className="absolute -bottom-3 left-0 w-full h-4 text-[var(--accent-red)]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="flex flex-col md:flex-row items-start gap-16">
        
        {/* Bio */}
        <div className="flex-1 md:w-1/2">
          <div className="relative inline-block mb-8">
            <motion.h2 
              layoutId="about"
              className="text-4xl md:text-5xl font-mono font-bold text-[var(--fg-pencil)]"
            >
              About Me
            </motion.h2>
            <Underline />
          </div>

          <div className="text-[var(--fg-pencil)] text-xl space-y-6 leading-relaxed font-sans bg-white p-6 border-[3px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly)] shadow-[4px_4px_0px_0px_var(--fg-pencil)] -rotate-1" style={{ borderRadius: "var(--radius-wobbly)" }}>
            <p>
              I am an AI-focused developer passionate about building intelligent systems that solve real-world problems. I specialize in creating autonomous agents, automation tools, and AI-powered applications.
            </p>
            <p>
              I focus on developing scalable, efficient, and practical solutions that can think, plan, and execute tasks with minimal human input—all while keeping the interfaces human, playful, and far from the sterile corporate standard.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 md:w-1/2 w-full">
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                category: "AI & Core Skills", 
                items: [
                  { name: "Python", level: 92 },
                  { name: "OpenAI API", level: 90 },
                  { name: "RAG & Agents", level: 85 }
                ],
                icon: <Brain strokeWidth={2.5} className="w-8 h-8 text-[var(--accent-blue)]" />,
                decoration: "tack" as const
              },
              { 
                category: "Full Stack", 
                items: [
                  { name: "React/Next.js", level: 85 },
                  { name: "Node.js", level: 80 },
                  { name: "Databases (SQL/NoSQL)", level: 80 }
                ],
                icon: <Terminal strokeWidth={2.5} className="w-8 h-8 text-[var(--accent-red)]" />,
                decoration: "tape" as const,
                rotate: "rotate-1"
              }
            ].map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className={cn("w-full", skillGroup.rotate)}
              >
                <HandCard decoration={skillGroup.decoration} variant={i % 2 === 0 ? "post-it" : "default"}>
                  <div className="flex items-center gap-4 mb-6 border-b-[3px] border-dashed border-[var(--fg-pencil)] pb-4">
                    <div className="p-2 border-[3px] border-[var(--fg-pencil)] rounded-full bg-white shadow-[2px_2px_0px_0px_var(--fg-pencil)]">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-[var(--fg-pencil)] font-mono font-bold text-2xl tracking-wider">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {skillGroup.items.map((item, j) => (
                      <div key={j} className="space-y-1">
                        <div className="flex justify-between items-center text-lg font-sans font-bold text-[var(--fg-pencil)]">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>
                        {/* Hand-drawn progress bar */}
                        <div className="w-full h-4 border-2 border-[var(--fg-pencil)] rounded-full p-[2px] bg-white">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-[var(--fg-pencil)] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </HandCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
