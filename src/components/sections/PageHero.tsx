import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/sections/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils/cn";
import type { MediaImage } from "@/types/content";

export interface PageHeroProps {
  title: string;
  eyebrow?: string;
  /** Lead paragraph under the heading. */
  intro?: string;
  /** Background image. Omit for the compact text-only treatment. */
  image?: MediaImage;
  crumbs?: Crumb[];
  /** Small labels above the heading, e.g. markets a project belongs to. */
  tags?: string[];
  actions?: { label: string; href: string }[];
  /** `full` for landing pages, `compact` for detail pages. */
  size?: "full" | "compact";
  /** Extra content below the intro — stats, meta lists. */
  children?: ReactNode;
}

/**
 * The hero used by every page. With an `image` it renders light-on-dark over
 * artwork; without one it renders a text-only band. Keeping both cases here
 * means each page declares content, not layout.
 */
export function PageHero({
  title,
  eyebrow,
  intro,
  image,
  crumbs,
  tags,
  actions,
  size = "full",
  children,
}: PageHeroProps) {
  const hasImage = Boolean(image);

  return (
    <header
      className={cn(
        "relative isolate overflow-hidden",
        hasImage ? "bg-ink-950 text-white" : "border-b border-ink-200 bg-white",
      )}
    >
      {image && (
        <>
          <Media image={image} fill priority sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/65 to-ink-950/90"
            aria-hidden="true"
          />
        </>
      )}

      <Container
        className={cn(
          "relative",
          size === "full" ? "pt-32 pb-20 md:pt-44 md:pb-28" : "pt-28 pb-14 md:pt-36 md:pb-20",
        )}
      >
        {crumbs && <Breadcrumbs crumbs={crumbs} tone={hasImage ? "dark" : "light"} />}

        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} tone={hasImage ? "inverse" : "default"}>
                {tag}
              </Tag>
            ))}
          </div>
        )}

        {eyebrow && (
          <p
            className={cn(
              "mt-6 text-xs font-medium tracking-widest uppercase",
              hasImage ? "text-brand-300" : "text-brand-600",
            )}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={cn(
            "mt-4 max-w-4xl font-medium tracking-tight",
            size === "full"
              ? "text-4xl leading-[1.03] md:text-6xl lg:text-7xl"
              : "text-3xl leading-[1.06] md:text-5xl",
          )}
        >
          {title}
        </h1>

        {intro && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-relaxed md:text-xl",
              hasImage ? "text-white/80" : "text-ink-600",
            )}
          >
            {intro}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {actions.map((action, index) => (
              <Button
                key={action.href}
                href={action.href}
                icon="arrow"
                size="lg"
                variant={
                  index === 0 ? "primary" : hasImage ? "inverse" : "secondary"
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}

        {children && <div className="mt-12">{children}</div>}
      </Container>
    </header>
  );
}
