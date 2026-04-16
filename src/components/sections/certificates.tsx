"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SpotlightCard } from "../ui/spotlight-card";

const certificates = [
  {
    title: "ESG Job Simulation",
    issuer: "Forage",
    date: "March 2026",
  },
  {
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    date: "January 2026",
  },
  {
    title: "AI Workflow: Machine Learning, Visual Recognition and NLP",
    issuer: "IBM",
    date: "October 2025",
  },
  {
    title: "AI Workflow: Feature Engineering and Bias Detection",
    issuer: "IBM",
    date: "October 2025",
  },
  {
    title: "AI Workflow: Enterprise Model Deployment",
    issuer: "IBM",
    date: "October 2025",
  },
  {
    title: "AI Workflow: Data Analysis and Hypothesis Testing",
    issuer: "IBM",
    date: "October 2025",
  },
  {
    title: "AI Workflow: Business Priorities and Data Ingestion",
    issuer: "IBM",
    date: "October 2025",
  },
  {
    title: "Diploma in IT Applications (D.I.T.A)",
    issuer: "Computer Certification",
    date: "Completed",
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center">
        Certifications
        <span className="h-[1px] bg-lightest-navy flex-1 ml-6" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="h-full p-8 border-cyan/20 bg-navy/60 hover:bg-navy/80 hover:border-cyan hover:shadow-[0_0_25px_rgba(100,255,218,0.15)] group transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="mb-6 p-4 bg-lightest-navy/20 backdrop-blur-sm rounded-xl group-hover:bg-cyan/10 transition-colors inline-block border border-transparent group-hover:border-cyan/30 shadow-lg w-max relative z-10">
                <Award className="w-8 h-8 text-cyan group-hover:scale-110 group-hover:animate-pulse transition-transform" />
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-cyan transition-colors relative z-10 flex-1">
                {cert.title}
              </h3>
              
              <div className="mt-4 pt-4 border-t border-cyan/10 relative z-10">
                <p className="text-slate font-medium text-sm">{cert.issuer}</p>
                <p className="text-cyan/60 font-mono text-xs mt-1">{cert.date}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
