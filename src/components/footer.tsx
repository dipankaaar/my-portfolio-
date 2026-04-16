"use client";

import React from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-lightest-navy/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-foreground font-bold text-lg mb-1">Designed & Built by Dipankar Gorai</p>
          <p className="font-mono text-sm text-cyan mb-2 tracking-wide">Building AI systems that think, plan, and execute.</p>
          <p className="text-slate text-xs mt-1">© 2026 All Rights Reserved.</p>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-3 rounded-full border border-cyan text-cyan group-hover:bg-cyan/10 transition-colors">
            <ChevronUp />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-mono text-cyan">Back to Top</span>
        </motion.button>

        <div className="flex gap-8 text-xs font-mono text-slate">
          <a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
