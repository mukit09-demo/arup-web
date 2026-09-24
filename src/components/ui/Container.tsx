import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const widths = {
  /** Editorial body copy — comfortable measure for reading. */
  narrow: "max-w-3xl",
  /** Default page width. */
  default: "max-w-7xl",
  /** Edge-to-edge grids and full-bleed imagery. */
  wide: "max-w-[110rem]",
} as const;

export interface ContainerProps {
  children: ReactNode;
  width?: keyof typeof widths;
  as?: ElementType;
  className?: string;
}

/** Horizontal gutters and max-width, applied consistently across every page. */
export function Container({
  children,
  width = "default",
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-10", widths[width], className)}>
      {children}
    </Tag>
  );
}
