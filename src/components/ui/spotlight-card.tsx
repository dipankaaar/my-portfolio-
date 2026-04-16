"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className,
  spotlightColor = "rgba(var(--accent-rgb), 0.15)"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const x = useSpring(useTransform(mouseX, [0, 400], [0.5, -0.5]), { stiffness: 100, damping: 20 });
  const y = useSpring(useTransform(mouseY, [0, 400], [-0.5, 0.5]), { stiffness: 100, damping: 20 });

  const rotateX = useTransform(y, [-1, 1], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-1, 1], ["-5deg", "5deg"]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(200);
        mouseY.set(200);
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 transition-all duration-500 perspective-1000",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />
      <div className="relative z-10" style={{ transform: isHovered ? "translateZ(50px)" : "translateZ(0px)", transition: "transform 0.5s" }}>
        {children}
      </div>
    </motion.div>
  );
};
