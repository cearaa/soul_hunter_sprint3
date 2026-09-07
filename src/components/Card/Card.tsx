import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: string;
}

export default function Card({ children, className = "", glow }: CardProps) {
  return (
    <div
      className={`glass-card p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={glow ? { boxShadow: `0 0 24px ${glow}22` } : undefined}
    >
      {children}
    </div>
  );
}
