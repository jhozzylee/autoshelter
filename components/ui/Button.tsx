import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-[32px] py-2",
        "body-md font-semibold tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",

        variant === "primary" && [
          "bg-[var(--color-primary)]",
          "text-white shadow-md shadow-red-600/20",
          "hover:bg-[var(--color-primary-dark)] hover:shadow-lg hover:shadow-red-600/30",
        ],

        variant === "secondary" && [
          "border border-[var(--color-neutral-light)]",
          "bg-[var(--color-neutral)]/50",
          "text-[var(--color-surface)] shadow-sm",
          "hover:bg-[var(--color-neutral-light)] hover:border-[var(--color-neutral-dark)]",
        ],

        variant === "ghost" && [
          "border border-[var(--color-neutral-light)]/20",
          "text-[var(--color-neutral)]",
          "hover:bg-[var(--color-surface-dark)] hover:text-[var(--color-neutral)]",
        ],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}