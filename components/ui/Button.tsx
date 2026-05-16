// components/ui/Button.tsx
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "outline";
    size?: "default" | "lg";
    href?: string;
  };

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const buttonClass = cn(
    "relative overflow-hidden font-bold uppercase tracking-wider transition-all active:scale-[0.985] group cursor-pointer -skew-x-[15deg] inline-block text-center",
    {
      "bg-accent text-text-inverse": variant === "primary",
      "border border-neutral-gray text-white hover:border-white":
        variant === "outline",
    },
    {
      "px-8 py-4 text-sm": size === "default",
      "px-10 py-5 text-base": size === "lg",
    },
    className,
  );

  const innerContent = (
    <>
      <span className="relative z-10 inline-block skew-x-[15deg]">{children}</span>
      {/* Animated background fill */}
      <div
        className={cn(
          "absolute inset-0 z-0 transition-transform duration-300 ease-out",
          variant === "primary"
            ? "bg-accent-hover -translate-x-full group-hover:translate-x-0"
            : "bg-red-900 -translate-x-full group-hover:translate-x-0",
        )}
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {innerContent}
    </button>
  );
}
