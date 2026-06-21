type AvatarProps = {
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  className?: string;
  showRing?: boolean;
};

const sizeMap = {
  sm: "h-14 w-14",
  md: "h-20 w-20",
  lg: "h-28 w-28",
};

export function Avatar({
  size = "md",
  src,
  alt = "Nassima Mesbah",
  className = "",
  showRing = true,
}: AvatarProps) {
  return (
    <div
      className={`relative shrink-0 ${sizeMap[size]} ${className}`}
    >
      {showRing && (
        <span
          className="absolute -inset-1 rounded-full border border-line bg-paper"
          aria-hidden
        />
      )}
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-ink bg-paper-dark shadow-[0_8px_24px_rgba(17,17,17,0.12)]">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-[center_12%] scale-110"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-display text-2xl text-ink">
            NM
          </span>
        )}
      </div>
    </div>
  );
}
