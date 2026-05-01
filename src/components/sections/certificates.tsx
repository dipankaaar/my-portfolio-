import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, GraduationCap, Star } from "lucide-react";
import { HandCard } from "../ui/hand-card";

const certificates = [
  {
    title: "ESG Job Simulation",
    issuer: "Forage",
    date: "March 2026",
    type: "Gold"
  },
  {
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    date: "January 2026",
    type: "Silver"
  },
  {
    title: "AI Workflow: Machine Learning, Visual Recognition and NLP",
    issuer: "IBM",
    date: "October 2025",
    type: "Gold"
  },
  {
    title: "AI Workflow: Feature Engineering and Bias Detection",
    issuer: "IBM",
    date: "October 2025",
    type: "Silver"
  },
  {
    title: "AI Workflow: Enterprise Model Deployment",
    issuer: "IBM",
    date: "October 2025",
    type: "Gold"
  },
  {
    title: "AI Workflow: Data Analysis and Hypothesis Testing",
    issuer: "IBM",
    date: "October 2025",
    type: "Silver"
  },
  {
    title: "AI Workflow: Business Priorities and Data Ingestion",
    issuer: "IBM",
    date: "October 2025",
    type: "Gold"
  },
  {
    title: "Diploma in IT Applications (D.I.T.A)",
    issuer: "Computer Certification",
    date: "Completed",
    type: "Silver"
  }
];

const MedalIcon = ({ type }: { type: string }) => {
  const isGold = type === "Gold";
  return (
    <div className={`
      relative p-4 rounded-full border-[3px] border-[var(--fg-pencil)] shadow-[2px_2px_0px_0px_var(--fg-pencil)]
      ${isGold 
        ? "bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#D4AF37]" 
        : "bg-gradient-to-br from-[#E8E8E8] via-[#C0C0C0] to-[#A8A8A8]"}
    `}>
      <Award className="w-8 h-8 text-[var(--fg-pencil)]" strokeWidth={3} />
      {/* Glossy reflection */}
      <div className="absolute top-1 left-1 w-full h-full bg-white/20 rounded-full blur-[2px] opacity-50" />
    </div>
  );
};

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="relative inline-block mb-16">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-[var(--fg-pencil)]">
          My Certifications
        </h2>
        {/* Wobbly underline */}
        <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent-blue)]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,5 Q25,2 50,5 T100,5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {certificates.map((cert, i) => {
          // Randomized rotation for each card to look pinned
          const rotation = (i % 2 === 0 ? 1 : -1) * (1 + Math.random() * 2);
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                y: -10,
                zIndex: 20,
                transition: { type: "spring", stiffness: 300 } 
              }}
              className="relative group cursor-default"
            >
              <HandCard 
                decoration={i % 2 === 0 ? "tape" : "tack"}
                className="h-full flex flex-col items-center text-center pt-10 pb-8 px-6 bg-white shadow-[6px_6px_0px_0px_var(--fg-pencil)] group-hover:shadow-[12px_12px_0px_0px_var(--accent-red)] transition-all duration-300"
              >
                <div className="mb-6 relative">
                  <MedalIcon type={cert.type} />
                  {/* Pinned effect */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[var(--fg-pencil)]/20" />
                </div>
                
                <h3 className="text-lg font-mono font-bold text-[var(--fg-pencil)] mb-4 leading-tight min-h-[3rem] flex items-center justify-center">
                  {cert.title}
                </h3>
                
                <div className="w-full h-[2px] bg-dashed border-t-2 border-dashed border-[var(--fg-pencil)]/30 mb-4" />
                
                <div className="mt-auto">
                  <p className="text-[var(--fg-pencil)] font-sans font-bold text-sm uppercase tracking-wider">{cert.issuer}</p>
                  <p className="text-[var(--accent-blue)] font-mono text-xs font-bold mt-2 bg-[var(--accent-blue)]/5 px-2 py-1 rounded-[var(--radius-wobbly)] inline-block">
                    {cert.date}
                  </p>
                </div>
              </HandCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
