import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, className, ...props }, ref) => {
    const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn("flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-[var(--font-size-sm)] font-medium uppercase tracking-[var(--tracking-wide)] text-[var(--color-text-primary)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "rounded-[var(--radius-md)] border bg-transparent px-4 py-3",
            "text-[var(--font-size-base)] text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "transition-all duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            error
              ? "border-[var(--color-rouge-brique)] focus:ring-[var(--color-rouge-brique)]"
              : "border-[var(--color-separator)] focus:border-[var(--color-vert-kolia)] focus:ring-[var(--color-vert-kolia)]",
            "disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
            fullWidth && "w-full",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-[var(--font-size-sm)] text-[var(--color-rouge-brique)]"
            role="alert"
          >
            {error}
          </span>
        )}
        {!error && helperText && (
          <span
            id={`${inputId}-helper`}
            className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]"
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
