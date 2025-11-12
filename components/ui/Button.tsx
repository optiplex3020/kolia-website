import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, cloneElement, isValidElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth = false,
  loading = false,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border font-medium uppercase tracking-[0.4em] transition-all duration-[var(--transition-base)] ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-rouge-brique)] disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]";

  const variants = {
    primary:
      "border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-[var(--color-ivoire)] hover:bg-transparent hover:text-[var(--color-text-primary)]",
  secondary:
      "border-[var(--color-rouge-brique)] bg-[var(--color-rouge-brique)] text-[var(--color-ivoire)] hover:bg-transparent hover:text-[var(--color-rouge-brique)]",
  outline:
      "border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-ivoire)]",
  ghost:
      "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
  link:
      "border-transparent text-[var(--color-rouge-brique)] underline-offset-4 hover:underline p-0",
  };

  const sizes = {
    sm: "px-5 py-2 text-[10px]",
    md: "px-8 py-3 text-[11px]",
    lg: "px-10 py-4 text-[12px]",
    xl: "px-12 py-5 text-[13px]",
  };

  const width = fullWidth ? "w-full" : "";

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    width,
    className
  );

  if (asChild && isValidElement(children)) {
    const childProps = children.props as any;
    return cloneElement(
      children as React.ReactElement<any>,
      {
        ...childProps,
        className: cn(combinedClassName, childProps?.className),
      }
    );
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </span>
      )}
      <span className={loading ? "opacity-0" : ""}>{children}</span>
    </button>
  );
}
