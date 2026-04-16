"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown, ArrowRight, Download } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { Magnetic } from "../ui/magnetic";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL", "PostgreSQL",
  "AWS", "Docker", "Python", "OpenAI API", "LangChain", "Vector Databases"
];

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.abs(Math.sin(i)) * 4 + 1 + "px",
  left: Math.abs(Math.cos(i)) * 100 + "%",
  top: Math.abs(Math.sin(i * 1.5)) * 100 + "%",
  opacity: Math.abs(Math.sin(i * 2)) * 0.4 + 0.1,
  yDest: Math.sin(i) * -50 - 50,
  xDest: Math.cos(i) * 50,
  duration: Math.abs(Math.sin(i * 3)) * 5 + 5,
  delay: Math.abs(Math.cos(i * 2)) * 5,
}));

export const Hero = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Futuristic Background Mesh & Glows */}
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
      <motion.div 
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 50, mass: 0.5 }}
        className="absolute w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Floating Futuristic Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, p.yDest],
              x: [0, p.xDest],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center z-10 relative">
        <motion.p
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="text-cyan font-mono mb-5 tracking-widest text-sm flex items-center gap-3 animate-glitch"
        >
          <span className="w-8 h-[1px] bg-cyan/50" />
          SYSTEM ONLINE // CREATING DIGITAL IMPACT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(15px)", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.4 }}
          className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter cursor-default group relative"
        >
          <span className="text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan group-hover:to-blue-500 transition-all duration-500 inline-block group-hover:animate-glitch">
            Dipankar Gorai
          </span>
          <span className="text-cyan animate-pulse">_</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-slate mb-8 h-20 md:h-24"
        >
          <Typewriter
            words={[
              "AI & Automation Developer",
              "Agentic Systems Specialist",
              "Full Stack AI Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-slate max-w-2xl mb-12 leading-relaxed"
        >
          Passionate about building intelligent, scalable, and autonomous AI 
          systems. I specialize in developing end-to-end automation solutions 
          and agentic workflows, turning complex ideas into real-world technological products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 1 }}
          className="flex flex-wrap gap-6 relative"
        >
          {/* Decorative Corner Brackets around buttons */}
          <div className="absolute -inset-4 border border-cyan/20 rounded-xl pointer-events-none opacity-0 md:opacity-100 hidden group-hover:block transition-all" 
               style={{ clipPath: 'polygon(0 0, 20px 0, 0 20px, 0 100%, 0 calc(100% - 20px), 20px 100%, 100% 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0, 100% 20px, calc(100% - 20px) 0)' }} />
               
          <Magnetic>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group px-8 py-4 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/90 hover:scale-105 hover:animate-cyber-pulse transition-all flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-cyan/10 dark:bg-white/20 translate-y-full group-hover:-translate-y-full transition-transform duration-500 ease-in-out" />
              View My Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>
          <Magnetic>
            <button
              onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 group px-8 py-4 border border-cyan/30 text-cyan rounded-lg hover:bg-cyan/10 hover:scale-105 hover:border-cyan hover:animate-cyber-pulse transition-all font-mono backdrop-blur-sm"
            >
              View My Certificates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full mt-24 mb-12 z-10"
      >
        <Marquee items={techStack} />
      </motion.div>

      {/* Scroll indicator with futuristic scanning effect */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity z-10 cursor-pointer"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cyan to-transparent mb-2" />
        <ChevronDown className="text-cyan animate-pulse" />
      </motion.div>
    </section>
  );
};
