import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "gold" | "dark" | "outline" | "olive";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  gold: "bg-tobacco text-vanilla hover:bg-tobacco-dark",
  dark: "bg-mahogany text-vanilla hover:bg-mahogany-light",
  outline: "border border-mahogany text-mahogany hover:bg-mahogany hover:text-vanilla",
  olive: "bg-mountain text-vanilla hover:bg-mountain-light",
};

export function Button({
  children,
  href,
  variant = "gold",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 font-medium text-[11px] tracking-[0.15em] uppercase transition-all duration-400 shimmer-hover";
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function ArrowLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-4 group transition-all duration-400",
        className
      )}
    >
      <span className="w-12 h-12 rounded-full bg-mahogany text-vanilla flex items-center justify-center group-hover:bg-tobacco group-hover:scale-105 transition-all duration-400">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
      <span className="text-sm font-medium text-mahogany group-hover:text-tobacco transition-colors">{children}</span>
    </Link>
  );
}
