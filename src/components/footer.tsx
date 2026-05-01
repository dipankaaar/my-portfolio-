"use client";

import React from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { HandButton } from "./ui/hand-button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t-[3px] border-dashed border-[var(--fg-pencil)] bg-[var(--bg-post-it)] mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-[var(--fg-pencil)] font-sans font-bold text-2xl mb-1">Dipankar Gorai</p>
          <p className="font-mono text-lg text-[var(--fg-pencil)] mb-2">Building AI systems that think, plan, and execute.</p>
          <p className="text-[var(--fg-pencil)] text-sm mt-1">© 2026 All Rights Reserved.</p>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, rotate: 2 }}
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-4 rounded-[var(--radius-wobbly)] border-[3px] border-[var(--fg-pencil)] text-[var(--fg-pencil)] bg-white shadow-[2px_2px_0px_0px_var(--fg-pencil)] group-hover:bg-[var(--accent-red)] group-hover:text-white transition-all">
            <ChevronUp strokeWidth={3} />
          </div>
          <span className="text-sm uppercase font-mono font-bold text-[var(--fg-pencil)]">Back to Top</span>
        </motion.button>

        <div className="flex gap-8 text-lg font-sans font-bold text-[var(--fg-pencil)]">
          <a href="#" className="hover:line-through decoration-[var(--accent-red)] transition-all">Privacy Policy</a>
          <a href="#" className="hover:line-through decoration-[var(--accent-red)] transition-all">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
