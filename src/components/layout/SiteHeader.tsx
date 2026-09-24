"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/Icon";
import { routes } from "@/lib/config/routes";
import { primaryNav, secondaryNav, type NavLink } from "@/lib/config/site";
import { cn } from "@/lib/utils/cn";

/**
 * Sticky site header with a mobile drawer.
 *
 * A client component only because it needs the current pathname for active
 * state and local state for the drawer — the nav itself comes from
 * `src/lib/config/site.ts`, so adding a section never touches this file.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => (
            <NavItem key={link.href} link={link} pathname={pathname} emphasis />
          ))}
          <span aria-hidden="true" className="h-5 w-px bg-ink-200" />
          {secondaryNav
            .filter((link) => link.href !== routes.contact)
            .map((link) => (
              <NavItem key={link.href} link={link} pathname={pathname} />
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={routes.contact} size="sm" className="hidden sm:inline-flex">
            Contact us
          </Button>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-10 place-items-center border border-ink-300 text-ink-900 transition-colors hover:border-ink-900 lg:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="border-t border-ink-200 bg-white lg:hidden"
      >
        <Container className="py-6">
          <nav aria-label="Mobile" className="flex flex-col">
            {[...primaryNav, ...secondaryNav].map((link) => {
              const isActive = isActiveHref(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  // Navigating away closes the drawer.
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "border-b border-ink-100 py-4 last:border-0",
                    isActive ? "text-brand-600" : "text-ink-900",
                  )}
                >
                  <span className="font-display text-lg font-medium">{link.label}</span>
                  {link.description && (
                    <span className="mt-1 block text-sm text-ink-500">
                      {link.description}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>
    </header>
  );
}

function NavItem({
  link,
  pathname,
  emphasis = false,
}: {
  link: NavLink;
  pathname: string;
  emphasis?: boolean;
}) {
  const isActive = isActiveHref(pathname, link.href);

  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative py-1 transition-colors",
        emphasis ? "text-sm font-medium" : "text-sm",
        isActive ? "text-brand-600" : "text-ink-700 hover:text-ink-950",
      )}
    >
      {link.label}
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-brand-500"
        />
      )}
    </Link>
  );
}

/** Active for the section itself and for anything nested beneath it. */
function isActiveHref(pathname: string, href: string): boolean {
  if (href === routes.home) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}
