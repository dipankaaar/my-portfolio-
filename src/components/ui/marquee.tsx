"use client";

import React from "react";

interface MarqueeProps {
  items: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-cyan/10 bg-light-navy/30 py-4">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-sm font-mono text-slate uppercase tracking-[0.3em] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-cyan rounded-full" />
            {item}
          </span>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 items-center ml-12">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-sm font-mono text-slate uppercase tracking-[0.3em] flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-cyan rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
