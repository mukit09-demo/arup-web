import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/config/routes";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils/cn";

export interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * The SDRS logotype, lifted from the brand badge in `public/sdrs-logo.png` so
 * the letterforms are the real ones rather than a typeset approximation. The
 * mark is red on transparent, which reads on both light and dark bands — `tone`
 * only affects the legal name sitting beneath it.
 *
 * The two parts stack rather than sitting side by side: set as a vertical
 * lockup the legal name costs the header no extra width, which is what keeps
 * the navigation on a single row.
 */
export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "inline-flex flex-col items-start gap-1 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/sdrs-wordmark.png"
        alt={siteConfig.name}
        width={922}
        height={160}
        // Rendered at h-7/h-8, so ~161–184px wide. Without this hint Next would
        // serve a 1080w variant of a logo that is never wider than 184px.
        sizes="(min-width: 640px) 184px, 161px"
        // Always in the header, above the fold.
        loading="eager"
        className="h-7 w-auto sm:h-8"
      />
      {/* At 11px the full name sets to roughly the width of the mark above it,
          so the lockup reads as one block. Hidden on the narrowest screens,
          where the drawer button needs the room. */}
      <span
        className={cn(
          "hidden leading-none whitespace-nowrap text-2xs sm:block",
          tone === "dark" ? "text-white/70" : "text-ink-500",
        )}
      >
        {siteConfig.legalName}
      </span>
      <span className="sr-only">home</span>
    </Link>
  );
}
