import { cn } from "@/lib/utils";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function H1({
  children,
  className,
  as: Component = "h1",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-text-primary",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function H2({
  children,
  className,
  as: Component = "h2",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight text-text-primary",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function H3({
  children,
  className,
  as: Component = "h3",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-2xl md:text-3xl font-semibold tracking-tight text-text-primary",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function P({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-base md:text-lg leading-relaxed text-text-secondary",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-text-secondary max-w-prose",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Small({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-sm text-text-muted tracking-wide", className)}>
      {children}
    </span>
  );
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "text-xs uppercase tracking-[0.075em] text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Num({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-mono font-bold tracking-tighter text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function NavLink({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "relative text-sm tracking-[0.125em] font-medium text-text-primary hover:text-accent-muted transition-colors duration-300 group",
        className,
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
    </span>
  );
}
