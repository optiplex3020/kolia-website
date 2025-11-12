import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "bordered";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
}

export default function Card({
  variant = "default",
  padding = "md",
  children,
  className,
  ...props
}: CardProps) {
  const baseStyles = "rounded-[var(--radius-xl)] transition-all duration-[var(--transition-base)]";

  const variants = {
    default:
      "bg-[var(--color-surface-elevated)] border border-[var(--color-separator)]",
    glass:
      "glass-card",
    elevated:
      "bg-[var(--color-surface-elevated)] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]",
    bordered:
      "bg-transparent border-2 border-[var(--color-text-primary)]",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], paddings[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function CardTitle({
  children,
  className,
  as: Component = "h3",
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={cn(
        "font-[family-name:var(--font-display)] text-[var(--font-size-2xl)] font-semibold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] mb-2",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-[var(--font-size-base)] text-[var(--color-text-secondary)] leading-[var(--leading-normal)]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={cn("mt-6 flex items-center gap-4", className)} {...props}>
      {children}
    </div>
  );
}
