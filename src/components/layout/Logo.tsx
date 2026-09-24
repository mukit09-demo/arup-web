import Link from "next/link";
import { routes } from "@/lib/config/routes";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils/cn";

export interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Wordmark, drawn as text rather than an SVG asset so it inherits the display
 * font and needs no image request. Swap the inner span for an `<Image>` when a
 * real brand asset exists.
 */
export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "font-display inline-flex items-baseline gap-1 text-2xl leading-none font-semibold tracking-tight transition-colors",
        tone === "dark" ? "text-white hover:text-white/80" : "text-ink-900 hover:text-brand-600",
        className,
      )}
    >
      <span>{siteConfig.name}</span>
      <span aria-hidden="true" className="text-brand-500">
        .
      </span>
      <span className="sr-only">home</span>
    </Link>
  );
}
