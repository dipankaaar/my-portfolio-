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

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">
        Strategic <span className="text-gradient">AI Solutions</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="h-full p-8 border-cyan/20 bg-navy/60 hover:bg-navy/80 hover:border-cyan hover:shadow-[0_0_25px_rgba(100,255,218,0.15)] group transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-cyan group-hover:w-full transition-all duration-500 ease-in-out" />
              <div className="mb-6 p-4 bg-lightest-navy/20 backdrop-blur-sm rounded-xl group-hover:bg-cyan/10 transition-colors inline-block border border-transparent group-hover:border-cyan/30 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-cyan transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
