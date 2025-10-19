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
  const baseStyles = "rounded-full font-medium transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-ochre)]",
    secondary: "bg-[var(--color-text-primary)] text-white hover:bg-[var(--color-text-secondary)]",
    outline: "bg-transparent border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-[15px]",
    lg: "px-10 py-4 text-base",
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
