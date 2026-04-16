"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experienceData = [
  {
    type: "work",
    title: "AI & Automation Developer",
    company: "Independent / Freelance",
    date: "2025 - Present",
    desc: [
      "Designed and developed 10+ AI projects (chatbots, RAG, automation)",
      "Built autonomous and multi-agent systems",
      "Worked with OpenAI, LangChain, and modern AI tools",
      "Created scalable solutions for real-world use cases"
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "Bachelor of Computer Application (BCA)",
    company: "MAKAUT",
    date: "2023 - 2027",
    desc: "Actively pursuing underlying fundamentals of computer sciences, software engineering, and managing databases.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "Higher Secondary (H.S)",
    company: "W.B.C.H.S.E",
    date: "2021 - 2023",
    desc: "",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "education",
    title: "Madhyamik Pariksha (M.P)",
    company: "W.B.B.S.E",
    date: "Completed in 2021",
    desc: "",
    icon: <GraduationCap className="w-5 h-5" />,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center">
        Experience & Education
        <span className="h-[1px] bg-lightest-navy flex-1 ml-6" />
      </h2>

      <div className="relative border-l-2 border-navy ml-4 md:ml-0 md:pl-0">
        {/* Glowing animated line background */}
        <motion.div 
          className="absolute left-[-2px] inset-y-0 w-[4px] bg-gradient-to-b from-cyan via-purple-500 to-transparent blur-[2px] opacity-50"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        {experienceData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: i * 0.15 }}
            className="mb-12 relative pl-8 group/timeline"
          >
            {/* Glowing Dot on line */}
            <div className="absolute left-0 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-navy border-2 border-cyan flex items-center justify-center text-cyan z-10 transition-transform duration-300 group-hover/timeline:scale-125 group-hover/timeline:shadow-[0_0_20px_#64ffda]">
              <div className="absolute inset-0 rounded-full animate-ping bg-cyan/20" />
              {item.icon}
            </div>

            <div className="bg-navy/40 backdrop-blur-md p-6 rounded-lg border border-cyan/10 hover:border-cyan hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] transition-all duration-300 group relative overflow-hidden">
              {/* Inner glowing hover trace */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan group-hover:h-full transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-cyan font-mono text-sm mb-2 block relative z-10">
                {item.date}
              </span>
              <h3 className="text-xl font-bold group-hover:text-cyan text-foreground transition-colors relative z-10">
                {item.title}
              </h3>
              <p className="text-light-slate font-medium mb-4 relative z-10">{item.company}</p>
              {Array.isArray(item.desc) ? (
                <ul className="text-slate text-sm leading-relaxed relative z-10 list-disc ml-5 space-y-2 mt-4">
                  {item.desc.map((bullet, idx) => (
                    <li key={idx} className="pl-1 marker:text-cyan">{bullet}</li>
                  ))}
                </ul>
              ) : item.desc ? (
                <p className="text-slate text-sm leading-relaxed relative z-10">{item.desc}</p>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
