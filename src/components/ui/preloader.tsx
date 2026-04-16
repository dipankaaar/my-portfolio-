"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] bg-[#020617] flex items-center justify-center flex-col text-white overflow-hidden"
        >
          {/* Abstract Scanline Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(100,255,218,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.3)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent h-screen w-full -z-1" animate={{ y: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="relative font-bold text-3xl md:text-5xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-cyan text-center px-4">
              <span className="block mb-2 text-white/50 text-base md:text-xl font-normal tracking-widest font-mono">Initializing System</span>
              Welcome To My Profile
              
              {/* Glitch Duplicates */}
              <div className="absolute inset-x-0 bottom-0 text-cyan/50 translate-x-[3px] translate-y-[-2px] animate-glitch -z-10 mix-blend-screen opacity-70">
                Welcome To My Profile
              </div>
              <div className="absolute inset-x-0 bottom-0 text-purple-500/50 translate-x-[-3px] translate-y-[2px] animate-glitch -z-10 mix-blend-screen opacity-70" style={{ animationDelay: '0.1s' }}>
                Welcome To My Profile
              </div>
            </div>
            
            {/* Glowing Loading Bar */}
            <div className="w-48 md:w-64 h-[2px] bg-cyan/10 mt-10 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-cyan shadow-[0_0_15px_#64ffda]"
              />
            </div>
            
            <div className="flex gap-1 mt-4">
               {[0, 1, 2].map((i) => (
                  <motion.div
                     key={i}
                     className="w-1.5 h-1.5 rounded-full bg-cyan"
                     animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                     transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  />
               ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
