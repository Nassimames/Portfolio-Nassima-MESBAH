type LogoMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
};

export function LogoMark({ size = "md", className = "" }: LogoMarkProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-ink bg-paper font-display font-semibold leading-none text-ink ${sizes[size]} ${className}`}
      aria-hidden
    >
      N
    </span>
  );
}
