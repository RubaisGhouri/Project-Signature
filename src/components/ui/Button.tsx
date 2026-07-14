import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,.35)]",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:border-cyan-400 hover:text-cyan-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}