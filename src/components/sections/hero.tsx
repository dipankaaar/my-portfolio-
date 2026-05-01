"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { HandButton } from "../ui/hand-button";
import { HandCard } from "../ui/hand-card";

/* Hand-drawn scribble SVG */
const Squiggle = () => (
  <svg className="absolute -bottom-6 -right-6 w-16 h-16 text-[var(--accent-blue)] opacity-80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,50 Q30,10 50,50 T90,50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20,60 Q40,20 60,60 T100,60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Hand-drawn arrow SVG */
const Arrow = () => (
  <svg className="absolute -bottom-16 left-1/2 w-20 h-20 text-[var(--accent-red)] transform -scale-x-100 hidden md:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ rotate: "45deg" }}>
    <path d="M10,90 Q40,80 80,20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6" />
    <path d="M60,20 L80,20 L80,40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-6 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[var(--bg-post-it)] border-[3px] border-[var(--fg-pencil)] px-4 py-1 shadow-[3px_3px_0px_0px_var(--fg-pencil)] rounded-[var(--radius-wobbly)]"
            style={{ borderRadius: "var(--radius-wobbly)" }}
          >
            <span className="font-sans text-xl font-bold text-[var(--fg-pencil)]">Hey there! 👋</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-mono font-bold leading-tight text-[var(--fg-pencil)] relative"
          >
            I'm <motion.span 
              animate={{ y: [0, -4, 0], rotate: [0, 2, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[var(--accent-red)] relative inline-block cursor-pointer"
            >
              Dipankar
              <motion.span 
                animate={{ width: ["80%", "100%", "85%"], x: ["0%", "2%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 h-[4px] bg-[var(--accent-red)] rounded-[var(--radius-wobbly)]" 
                style={{ borderRadius: "var(--radius-wobbly)" }}
              />
            </motion.span>,<br/>
            an AI & Automation Developer
            <span className="inline-block ml-2 text-[var(--accent-blue)] animate-bounce relative top-2">!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[var(--fg-pencil)] font-sans max-w-lg leading-relaxed bg-white/50 p-4 border-2 border-dashed border-[var(--fg-muted)] rounded-[var(--radius-wobbly-md)]"
            style={{ borderRadius: "var(--radius-wobbly-md)" }}
          >
            I build intelligent, scalable, and autonomous systems. 
            Turning complex ideas into real-world technological products 
            without the corporate sterile feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4 relative"
          >
            <a href="#projects">
              <HandButton variant="primary" className="text-xl gap-2 group">
                View My Work
                <ArrowRight strokeWidth={3} className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </HandButton>
            </a>
            <a href="#about">
              <HandButton variant="secondary" className="text-xl">
                About Me
              </HandButton>
            </a>
            <a href="https://wa.me/917601852619" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <HandButton variant="secondary" className="text-xl gap-2 flex items-center">
                <FaWhatsapp size={20} />
              </HandButton>
            </a>
            <Arrow />
          </motion.div>
        </div>

        {/* Right Content - Playful Profile Image / Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center md:justify-end z-10 mt-12 md:mt-0"
        >
          <HandCard decoration="tack" className="w-full max-w-sm rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-square border-[3px] border-[var(--fg-pencil)] rounded-[var(--radius-wobbly)] overflow-hidden shadow-inner relative bg-gray-200" style={{ borderRadius: "var(--radius-wobbly)" }}>
              <Image 
                src="/profile.jpg" 
                alt="Dipankar Gorai"
                fill
                priority
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Corner frame marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-[var(--fg-pencil)] rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-[var(--fg-pencil)] rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-[var(--fg-pencil)] rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-[var(--fg-pencil)] rounded-br-lg" />
            </div>
            
            <div className="mt-4 text-center font-sans text-xl font-bold text-[var(--fg-pencil)] underline decoration-wavy decoration-[var(--accent-red)]">
              "Me pretending to be busy"
            </div>
          </HandCard>

          <Squiggle />
        </motion.div>

      </div>
    </section>
  );
};
