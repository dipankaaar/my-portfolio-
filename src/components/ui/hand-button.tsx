import React from "react";
import { cn } from "@/lib/utils";

export interface HandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const HandButton = React.forwardRef<HTMLButtonElement, HandButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center px-6 py-3 font-sans text-lg font-medium",
          "border-[3px] border-[var(--fg-pencil)] transition-all duration-100",
          "shadow-[4px_4px_0px_0px_var(--fg-pencil)]",
          "hover:shadow-[2px_2px_0px_0px_var(--fg-pencil)] hover:translate-x-[2px] hover:translate-y-[2px]",
          "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
          // Wobbly border radius
          "rounded-[var(--radius-wobbly)]",
          variant === "primary" &&
            "bg-white text-[var(--fg-pencil)] hover:bg-[var(--accent-red)] hover:text-white",
          variant === "secondary" &&
            "bg-[var(--fg-muted)] text-[var(--fg-pencil)] hover:bg-[var(--accent-blue)] hover:text-white",
          className
        )}
        style={{
          borderRadius: "var(--radius-wobbly)",
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
HandButton.displayName = "HandButton";
