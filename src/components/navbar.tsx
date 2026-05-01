"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", id: "about" },
  { name: "AI Agents", id: "ai-agents" },
  { name: "Experience", id: "experience" },
  { name: "Certificates", id: "certificates" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

interface NavbarProps {
  activeSection?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 15, 
        duration: 0.6, 
        delay: 0.1 
      }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "w-[95%] md:w-[80%] max-w-5xl" : "w-[90%] max-w-4xl top-8"
      }`}
    >
      <div className={`
        relative flex items-center justify-between px-6 py-4 
        transition-all duration-300 ease-out overflow-hidden
        ${scrolled 
          ? "bg-white/80 backdrop-blur-md border-[3px] border-[var(--fg-pencil)] shadow-[4px_4px_0px_0px_var(--fg-pencil)] rounded-[var(--radius-wobbly)]" 
          : "bg-transparent"
        }
      `}
      style={{ borderRadius: scrolled ? "var(--radius-wobbly)" : "24px" }}
      >
        {/* Cinematic Sweep Effect (only when scrolled) */}
        {scrolled && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-red)]/10 to-transparent skew-x-12 -translate-x-full pointer-events-none"
            animate={{
              translateX: ['-100%', '200%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Logo */}
        <div className="flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-2xl font-bold text-[var(--fg-pencil)] cursor-pointer hover:underline decoration-wavy decoration-[var(--accent-red)] underline-offset-4"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            Dipankar<span className="text-[var(--accent-blue)]">.</span>
          </motion.button>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.2 + i * 0.05,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ scale: 1.05, y: -2, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 font-sans font-semibold text-sm transition-colors duration-300
                  ${isActive ? "text-[var(--accent-red)]" : "text-[var(--fg-pencil)]/80 hover:text-[var(--fg-pencil)]"}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-indicator"
                    className="absolute inset-0 border-2 border-dashed border-[var(--accent-red)] rounded-[var(--radius-wobbly)] bg-[var(--accent-red)]/5 pointer-events-none"
                    style={{ borderRadius: "var(--radius-wobbly)" }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile menu toggle (simple sketch lines) */}
        <button aria-label="Toggle mobile menu" className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2">
          <motion.div whileHover={{ x: 2 }} className="w-6 h-[3px] bg-[var(--fg-pencil)] rounded-full" />
          <motion.div whileHover={{ x: -2 }} className="w-4 h-[3px] bg-[var(--fg-pencil)] rounded-full ml-auto" />
          <motion.div whileHover={{ x: 2 }} className="w-6 h-[3px] bg-[var(--fg-pencil)] rounded-full" />
        </button>
      </div>
    </motion.nav>
  );
};
