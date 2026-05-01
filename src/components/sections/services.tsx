"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Brain, Cpu } from "lucide-react";

const services = [
  {
    title: "AI Agents",
    desc: "Autonomous systems that plan, reason, and execute complex tasks.",
    icon: <Brain className="w-8 h-8 text-cyan animate-pulse duration-[3000ms] group-hover:scale-125 transition-transform" />,
  },
  {
    title: "AI Applications",
    desc: "End-to-end intelligent applications with scalable backend systems.",
    icon: <Code className="w-8 h-8 text-cyan animate-pulse duration-[3000ms] delay-75 group-hover:scale-125 transition-transform" />,
  },
  {
    title: "AI Content Systems",
    desc: "Smart content generation and media optimization using AI.",
    icon: <Globe className="w-8 h-8 text-cyan animate-pulse duration-[3000ms] delay-150 group-hover:scale-125 transition-transform" />,
  },
  {
    title: "Process Automation",
    desc: "Streamlining workflows with API integrations and AI-driven automation.",
    icon: <Cpu className="w-8 h-8 text-cyan animate-pulse duration-[3000ms] delay-300 group-hover:scale-125 transition-transform" />,
  },
];

import { SpotlightCard } from "../ui/spotlight-card";

import { HandCard } from "../ui/hand-card";

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Blueprint Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--fg-pencil)]">
          <path d="M0,0 L100,100 M20,0 L100,80 M0,20 L80,100" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative inline-block mb-16">
        <motion.h2 
          layoutId="services"
          className="text-4xl md:text-5xl font-mono font-bold text-[var(--fg-pencil)]"
        >
          Specialized Services
        </motion.h2>
        <div className="absolute -bottom-4 left-0 w-full h-2 bg-[var(--accent-blue)]/20 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <HandCard 
              variant={i % 2 === 0 ? "default" : "post-it"}
              decoration={i === 0 ? "tack" : "none"}
              className="h-full"
            >
              <div className="mb-6 p-4 border-[3px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly)] bg-white shadow-[3px_3px_0px_0px_var(--fg-pencil)] inline-block">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-mono font-bold mb-4 text-[var(--fg-pencil)] border-b-2 border-dashed border-[var(--fg-pencil)]/30 pb-2">
                {service.title}
              </h3>
              
              <p className="text-[var(--fg-pencil)] font-sans text-lg leading-relaxed opacity-90">
                {service.desc}
              </p>


            </HandCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
