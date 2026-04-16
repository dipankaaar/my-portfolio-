"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "AI Agents", href: "#ai-agents" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 px-6 md:px-12 py-4",
        scrolled ? "glass-morphism h-16 shadow-lg" : "bg-transparent h-20"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Photo Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-10 h-10 rounded-full border-2 border-cyan/40 overflow-hidden hover:border-cyan hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)] transition-all group"
        >
          <img 
            src="/profile.jpg" 
            alt="Logo" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              className="group relative text-sm font-bold tracking-widest hover:text-cyan hover:animate-glitch transition-all duration-300 py-1"
            >
              {link.name}
              {/* Premium Glow Underline */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan shadow-[0_0_15px_#64ffda] transition-all duration-300 group-hover:w-full" />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan shadow-[0_0_10px_#64ffda] transition-all duration-300 group-hover:w-full delay-75" />
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="/resume.pdf"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="px-6 py-2 border border-cyan/40 text-cyan rounded-full hover:bg-cyan/10 hover:border-cyan hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] shadow-[0_0_5px_rgba(100,255,218,0.1)] transition-all text-sm font-bold tracking-wider relative overflow-hidden group hover:animate-cyber-pulse"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan/20 to-transparent -translate-x-full group-hover:animate-[marquee_1s_ease-in-out_infinite]" />
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[9999] md:hidden glass-morphism pt-24 px-12"
          >
            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold tracking-widest hover:text-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="px-8 py-4 border border-cyan text-cyan rounded hover:bg-cyan/10 transition-colors text-lg font-mono"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
