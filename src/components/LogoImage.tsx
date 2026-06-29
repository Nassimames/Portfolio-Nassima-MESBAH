import Image from "next/image";

type LogoProps = {
  src: string;
  alt: string;
  size?: number;
  wide?: boolean;
  className?: string;
};

export function LogoImage({ src, alt, size = 48, wide = false, className = "" }: LogoProps) {
  const imgClass = wide
    ? `h-14 w-auto max-w-[240px] object-contain object-left ${className}`
    : `object-contain ${className}`;

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      width={wide ? 240 : size}
      height={wide ? 56 : size}
      className={imgClass}
    />
  );
}
