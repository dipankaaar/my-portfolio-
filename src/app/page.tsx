"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Certificates } from "@/components/sections/certificates";
import { Projects } from "@/components/sections/projects";
import { AIAgents } from "@/components/sections/ai-agents";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SpiralDemo } from "@/components/demo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const entered = sessionStorage.getItem("hasEntered");
    if (entered) {
      setHasEntered(true);
      setShowContent(true);
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["hero", "about", "ai-agents", "experience", "certificates", "projects", "services", "contact"];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    sessionStorage.setItem("hasEntered", "true");
    setTimeout(() => setShowContent(true), 200);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-[var(--accent-red)] selection:text-white bg-[var(--bg-paper)] text-[var(--fg-pencil)]">
      {/* Cinematic Film Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Cinematic Vignette */}
      <div className="pointer-events-none fixed inset-0 z-[99] bg-radial-[at_center,_transparent_40%,_rgba(0,0,0,0.05)_100%]"></div>

      {/* Subtle Lens Flare */}
      <div className="pointer-events-none fixed -top-20 -left-20 w-[40vw] h-[40vw] bg-[var(--accent-gold)]/5 rounded-full blur-[100px] z-[98]"></div>

      {!hasEntered && <SpiralDemo onEnter={handleEnter} />}
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            <ScrollProgress />
            <Navbar activeSection={activeSection} />

            {/* Cinematic Letterbox (Black Bars) Reveal Effect */}
            <motion.div
              initial={{ height: "15vh" }}
              animate={{ height: "0vh" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="fixed top-0 left-0 right-0 bg-black z-40 origin-top pointer-events-none"
            />
            <motion.div
              initial={{ height: "15vh" }}
              animate={{ height: "0vh" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="fixed bottom-0 left-0 right-0 bg-black z-40 origin-bottom pointer-events-none"
            />

            {/* Main Content Cinematic Reveal */}
            <motion.div
              initial={{ scale: 1.02, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative flex flex-col gap-0 md:gap-32 w-full"
            >
              <Hero />
              
              {/* Wrapping each section in a cinematic scroll-reveal container */}
              {[
                { Component: About, id: "about" },
                { Component: AIAgents, id: "ai-agents" },
                { Component: Experience, id: "experience" },
                { Component: Certificates, id: "certificates" },
                { Component: Projects, id: "projects" },
                { Component: Services, id: "services" },
                { Component: Contact, id: "contact" },
              ].map(({ Component, id }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 80, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Component />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Footer />
              </motion.div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
