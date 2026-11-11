import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** The SK flame mark. Natural size is 533×640; scale it with the className. */
export function Logo({ className, priority, sizes = "96px" }: LogoProps) {
  return (
    <Image
      src="/logo/logo-mark.png"
      alt="Salman Khan logo"
      width={533}
      height={640}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-auto select-none object-contain", className)}
    />
  );
}
