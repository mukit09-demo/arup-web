import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  /** Optional trailing action, right-aligned on wide screens. */
  action?: { label: string; href: string };
  tone?: "light" | "dark";
  /** Heading level — pick to keep the page outline correct. */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Eyebrow, heading, supporting copy and an optional action, in one block. */
export function SectionHeader({
  title,
  eyebrow,
  description,
  action,
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        {eyebrow && (
          <p
            className={cn(
              "text-xs font-medium tracking-widest uppercase",
              isDark ? "text-brand-300" : "text-brand-600",
            )}
          >
            {eyebrow}
          </p>
        )}
        <Heading
          className={cn(
            "mt-3 text-3xl leading-[1.08] font-medium md:text-4xl lg:text-5xl",
            isDark ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </Heading>
        {description && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              isDark ? "text-white/70" : "text-ink-600",
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Button
          href={action.href}
          variant={isDark ? "inverse" : "secondary"}
          icon="arrow"
          className="shrink-0 self-start md:self-auto"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
