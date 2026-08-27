import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  children: ReactNode;
}

const BASE_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition-transform duration-150 disabled:cursor-default disabled:opacity-80";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:brightness-105 cursor-pointer",
  ghost: "border border-line bg-card text-ink-soft cursor-pointer",
};

export function Button({
  variant = "primary",
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = `${BASE_CLASS} ${VARIANT_CLASS[variant]} ${className ?? ""}`.trim();

  return (
    <button disabled={disabled || isLoading} className={classes} {...props}>
      {isLoading && (
        <span
          aria-hidden
          className="h-3 w-3 animate-spin rounded-full border-2 border-white/35 border-t-white"
        />
      )}
      {children}
    </button>
  );
}