import Image from "next/image";

type LogoProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function LogoImage({ src, alt, size = 48, className = "" }: LogoProps) {
  if (src.endsWith(".jfif")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
