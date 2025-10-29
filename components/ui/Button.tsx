import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full border border-transparent text-xs uppercase tracking-[0.32em] transition-colors duration-700 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)]";

  const variants = {
    primary:
      "bg-[var(--color-vert-kolia)] text-[var(--color-ivoire)] hover:bg-[#0a2417]",
    secondary:
      "bg-transparent border-[var(--color-bronze)] text-[var(--color-text-primary)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-background)]",
    outline:
      "bg-transparent border-[var(--color-separator)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]",
  };

  const sizes = {
    sm: "px-6 py-2",
    md: "px-8 py-3",
    lg: "px-10 py-3.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
