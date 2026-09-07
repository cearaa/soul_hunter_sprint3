import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "solid" | "outline" | "ghost";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soul-cyan";

const variantClasses: Record<ButtonVariant, string> = {
  solid:
    "bg-gradient-to-r from-soul-cyan to-soul-violet text-soul-950 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(139,92,246,0.5)]",
  outline: "border-2 border-soul-cyan/60 text-soul-cyan hover:bg-soul-cyan/10",
  ghost: "bg-white/5 text-white hover:bg-white/15",
};

export default function ButtonLink({
  to,
  children,
  variant = "solid",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
