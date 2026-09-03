import Image from "next/image";
import { site } from "@/lib/site";

export function BrandLogo({
  className = "h-8 w-auto",
  inverted = false,
  priority = false,
}: {
  className?: string;
  inverted?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src="/isovertic-logo.png"
      alt={site.name}
      width={300}
      height={90}
      className={`${className}${inverted ? " brightness-0 invert" : ""}`}
      priority={priority}
    />
  );
}
