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
 * only affects the legal name sitting beside it.
 */
export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "inline-flex items-center gap-3 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/sdrs-wordmark.png"
        alt={siteConfig.name}
        width={922}
        height={160}
        // Rendered at h-6/h-7, so ~138–161px wide. Without this hint Next would
        // serve a 1080w variant of a logo that is never wider than 161px.
        sizes="(min-width: 640px) 161px, 138px"
        // Always in the header, above the fold.
        loading="eager"
        className="h-6 w-auto sm:h-7"
      />
      <span
        aria-hidden="true"
        className={cn(
          "hidden h-6 w-px xl:block",
          tone === "dark" ? "bg-white/25" : "bg-ink-200",
        )}
      />
      <span
        className={cn(
          "hidden max-w-44 text-[0.6875rem] leading-tight tracking-wide uppercase xl:block",
          tone === "dark" ? "text-white/70" : "text-ink-500",
        )}
      >
        {siteConfig.legalName}
      </span>
      <span className="sr-only">home</span>
    </Link>
  );
}
