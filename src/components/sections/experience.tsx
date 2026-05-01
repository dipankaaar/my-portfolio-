import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Star, ArrowRight } from "lucide-react";
import { HandCard } from "../ui/hand-card";

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
    icon: Briefcase,
    note: "Primary_Growth"
  },
  {
    type: "education",
    title: "Bachelor of Computer Application (BCA)",
    company: "MAKAUT",
    date: "2023 - 2027",
    desc: "Actively pursuing underlying fundamentals of computer sciences, software engineering, and managing databases.",
    icon: GraduationCap,
    note: "Academic_Ref_01"
  },
  {
    type: "education",
    title: "Higher Secondary (H.S)",
    company: "W.B.C.H.S.E",
    date: "2021 - 2023",
    desc: "Focused on Science and Mathematics with an emphasis on logical reasoning and analytical skills.",
    icon: GraduationCap,
    note: "Foundation_Node"
  },
  {
    type: "education",
    title: "Madhyamik Pariksha (M.P)",
    company: "W.B.B.S.E",
    date: "Completed in 2021",
    desc: "Achieved excellence in core subjects with a focus on problem-solving and mathematics.",
    icon: GraduationCap,
    note: "Entry_Point"
  }
];

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Cinematic Decorations */}
      <div className="absolute top-0 right-10 text-[10px] font-mono text-[var(--fg-pencil)]/20 uppercase tracking-widest -rotate-90">
        Timeline_Registry // Seq_88
      </div>

      <div className="relative inline-block mb-24">
        <motion.h2 
          layoutId="experience"
          className="text-4xl md:text-6xl font-mono font-bold text-[var(--fg-pencil)]"
        >
          The Journey
        </motion.h2>
        {/* Sketchy underline */}
        <svg className="absolute -bottom-2 left-0 w-full h-4 text-[var(--accent-red)]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative ml-4 md:ml-0">
        {/* Pro Technical Timeline Line */}
        <div className="absolute left-[1px] md:left-[1px] top-0 bottom-0 w-[3px] bg-[var(--fg-pencil)]/10 rounded-full">
          {/* Animated fill line */}
          <motion.div 
            className="w-full bg-[var(--accent-red)] origin-top h-full shadow-[0_0_10px_var(--accent-red)]"
            style={{ scaleY }}
          />
          
          {/* Pro Tracker / Playhead (Diamond) */}
          <motion.div
            className="absolute left-1/2 w-5 h-5 bg-white border-[3px] border-[var(--accent-red)] z-30 shadow-[0_0_15px_rgba(255,0,0,0.3)]"
            style={{ 
              top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
              x: "-50%",
              y: "-50%",
              rotate: 45
            }}
          >
            {/* Inner pulsing dot */}
            <motion.div 
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[var(--accent-red)] rounded-full"
            />
          </motion.div>
        </div>

        {experienceData.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.1 }}
              className="mb-20 relative pl-12 group/timeline"
            >
              {/* Technical Measurement Bracket */}
              <div className="absolute left-0 top-0 w-12 h-px bg-[var(--fg-pencil)]/20 transition-all duration-500 group-hover/timeline:w-16 group-hover/timeline:bg-[var(--accent-red)]/40" />
              <div className="absolute left-[48px] top-0 h-4 w-px bg-[var(--fg-pencil)]/20 transition-all duration-500 group-hover/timeline:left-[64px] group-hover/timeline:bg-[var(--accent-red)]/40" />
              
              {/* Timeline Node Badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute left-0 -translate-x-1/2 top-0 w-12 h-12 rounded-xl bg-white border-[3px] border-[var(--fg-pencil)] flex items-center justify-center text-[var(--fg-pencil)] z-20 shadow-[4px_4px_0px_0px_var(--fg-pencil)] group-hover/timeline:bg-[var(--bg-post-it)] group-hover/timeline:text-[var(--accent-red)] group-hover/timeline:border-[var(--accent-red)] transition-colors duration-300"
              >
                <Icon size={20} strokeWidth={3} />
              </motion.div>

              <HandCard 
                decoration={i % 2 === 0 ? "tape" : "tack"}
                className="bg-white border-[3px] border-[var(--fg-pencil)] shadow-[8px_8px_0px_0px_var(--fg-pencil)] group-hover/timeline:shadow-[12px_12px_0px_0px_var(--accent-blue)] group-hover/timeline:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                {/* Background Blueprint detail */}
                <div className="absolute top-2 right-4 opacity-[0.05] pointer-events-none group-hover/timeline:opacity-10 group-hover/timeline:scale-110 transition-all duration-700">
                   <Icon size={120} strokeWidth={1} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[var(--accent-red)]/5 text-[var(--accent-red)] font-mono font-bold text-xs rounded-[var(--radius-wobbly)] border-2 border-[var(--accent-red)]/10 mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-mono font-bold text-[var(--fg-pencil)] leading-tight group-hover/timeline:text-[var(--accent-blue)] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--fg-pencil)] opacity-60 font-mono font-bold bg-[var(--bg-post-it)]/30 px-3 py-2 rounded-lg border-2 border-dashed border-[var(--fg-pencil)]/10">
                    <Star size={16} />
                    {item.company}
                  </div>
                </div>

                <div className="relative z-10">
                  {Array.isArray(item.desc) ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.desc.map((bullet, idx) => (
                        <motion.li 
                          key={idx} 
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-2 text-[var(--fg-pencil)] font-sans font-medium text-lg"
                        >
                          <ArrowRight size={18} className="mt-1 text-[var(--accent-blue)] flex-shrink-0" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : item.desc ? (
                    <p className="text-[var(--fg-pencil)] font-sans text-lg leading-relaxed italic border-l-4 border-[var(--bg-post-it)] pl-6 py-2">
                      {item.desc}
                    </p>
                  ) : null}
                </div>
              </HandCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
