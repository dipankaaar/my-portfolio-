import React from "react";
import { cn } from "@/lib/utils";

export interface HandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  decoration?: "tape" | "tack" | "none";
  variant?: "default" | "post-it";
}

export const HandCard = React.forwardRef<HTMLDivElement, HandCardProps>(
  ({ className, decoration = "none", variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative border-[3px] border-[var(--fg-pencil)] p-6 md:p-8 transition-transform duration-100",
          "shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)]",
          variant === "default" && "bg-white",
          variant === "post-it" && "bg-[var(--bg-post-it)]",
          className
        )}
        style={{
          borderRadius: "var(--radius-wobbly-md)",
        }}
        {...props}
      >
        {/* Tape Decoration (Premium Hand-Torn Masking Tape) */}
        {decoration === "tape" && (
          <div
            className="absolute -top-4 left-1/2 h-8 w-32 bg-[#f0ede6]/80 backdrop-blur-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] z-20 overflow-hidden"
            style={{
              transform: "translateX(-50%) rotate(-2deg)",
              // Jagged torn edges on left and right
              clipPath: "polygon(2% 15%, 5% 0%, 95% 0%, 98% 15%, 100% 50%, 98% 85%, 95% 100%, 5% 100%, 2% 85%, 0% 50%)",
            }}
          >
            {/* Paper Fiber Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 11px),
                  repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(0,0,0,0.05) 15px, rgba(0,0,0,0.05) 16px)
                `
              }}
            />
            {/* Subtle crinkle highlights */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/30 opacity-50" />
            {/* Glue/Sticky residue effect at edges */}
            <div className="absolute inset-y-0 left-0 w-1 bg-black/5 blur-[1px]" />
            <div className="absolute inset-y-0 right-0 w-1 bg-black/5 blur-[1px]" />
          </div>
        )}

        {/* Tack Decoration (Hand-Drawn Push Pin) */}
        {decoration === "tack" && (
          <div
            className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[var(--accent-blue)] border-2 border-[var(--fg-pencil)] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] z-20"
          >
            {/* Simple Pin Highlight */}
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full absolute top-1 left-1" />
          </div>
        )}

        {children}
      </div>
    );
  }
);
HandCard.displayName = "HandCard";
