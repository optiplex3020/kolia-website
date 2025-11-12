import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export default function Badge({
  variant = "default",
  size = "md",
  children,
  className,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[var(--tracking-wider)] whitespace-nowrap";

  const variants = {
    default:
      "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-separator)]",
    primary:
      "bg-[var(--color-vert-kolia)] text-[var(--color-ivoire)]",
    secondary:
      "bg-[var(--color-rouge-brique)] text-[var(--color-ivoire)]",
    outline:
      "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-text-primary)]",
    success:
      "bg-[#0d2f20]/10 text-[var(--color-vert-kolia)] border border-[var(--color-vert-kolia)]",
    warning:
      "bg-[#944e34]/10 text-[var(--color-rouge-brique)] border border-[var(--color-rouge-brique)]",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[9px]",
    md: "px-3 py-1 text-[10px]",
    lg: "px-4 py-1.5 text-[11px]",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
