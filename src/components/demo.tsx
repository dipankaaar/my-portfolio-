'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'

interface SpiralDemoProps {
  onEnter?: () => void;
}

const SpiralDemo = ({ onEnter }: SpiralDemoProps) => {
  const [startVisible, setStartVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  
  useEffect(() => {
    // Fade in the text after a short delay
    const textTimer = setTimeout(() => {
      setStartVisible(true)
    }, 1000)
    
    // Automatically transition to the main site
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      
      // Wait for premium exit animation before triggering onEnter
      setTimeout(() => {
        if (onEnter) onEnter()
      }, 1500) // Match new cinematic duration
    }, 4500) // Animation shows for 4.5 seconds before exiting
    
    return () => {
      clearTimeout(textTimer)
      clearTimeout(exitTimer)
    }
  }, [onEnter])
  
  return (
    <div className={`
      fixed inset-0 w-full h-full overflow-hidden bg-black z-[100]
      transition-all duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)]
      ${isExiting ? 'opacity-0 scale-[1.5] blur-xl pointer-events-none' : 'opacity-100 scale-100 blur-0'}
    `}>
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      
      {/* Cinematic Text Reveal */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-4">
          <span 
            className={`
              text-white/50 text-xs md:text-sm uppercase font-mono tracking-[0.5em]
              transition-all duration-[2000ms] ease-out
              ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Initializing Portfolio
          </span>
          
          <h1 
            className={`
              text-white text-4xl md:text-6xl uppercase font-extralight text-center tracking-[0.2em]
              transition-all duration-[2000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-500
              ${startVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            `}
          >
            Welcome To My Profile
          </h1>
          
          {/* Subtle cinematic glowing line underneath */}
          <div 
            className={`
              h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent
              transition-all duration-[2500ms] ease-in-out delay-1000
              ${startVisible ? 'w-48 md:w-96 opacity-100' : 'w-0 opacity-0'}
            `}
          />
        </div>
      </div>
    </div>
  )
}

export {SpiralDemo}
