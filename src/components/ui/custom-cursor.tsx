"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 90 : 0
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="w-10 h-10 rounded-full border border-cyan/50 flex items-center justify-center animate-[spin_4s_linear_infinite] shadow-[0_0_15px_rgba(100,255,218,0.2)]">
          <div className="w-[1px] h-3 bg-cyan absolute -top-1 shadow-[0_0_5px_#64ffda]" />
          <div className="w-[1px] h-3 bg-cyan absolute -bottom-1 shadow-[0_0_5px_#64ffda]" />
          <div className="w-3 h-[1px] bg-cyan absolute -left-1 shadow-[0_0_5px_#64ffda]" />
          <div className="w-3 h-[1px] bg-cyan absolute -right-1 shadow-[0_0_5px_#64ffda]" />
        </div>
        <div className="absolute w-14 h-14 rounded-full border border-dashed border-cyan/30 animate-[spin_8s_linear_infinite_reverse]" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_#ffffff]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
