/**
 * Typed, validated access to the environment. Nothing else in the app should
 * read `process.env` directly.
 */

export type ContentSource = "mock" | "api";

function readContentSource(): ContentSource {
  const raw = process.env.NEXT_PUBLIC_CONTENT_SOURCE?.trim().toLowerCase();
  if (raw === "api") return "api";
  if (raw === "mock" || raw === undefined || raw === "") return "mock";

  throw new Error(
    `Invalid NEXT_PUBLIC_CONTENT_SOURCE: "${raw}". Expected "mock" or "api".`,
  );
}

export const env = {
  /**
   * Where editorial content comes from. `mock` uses the bundled dummy data;
   * `api` calls the Spring Boot backend. This is the only switch that needs to
   * flip when the backend goes live.
   */
  contentSource: readContentSource(),

  /**
   * Base URL for the Spring Boot API. Relative values are resolved against
   * `siteUrl` on the server, where `fetch` requires an absolute URL.
   */
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "/api",

  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),

  /** Seconds before cached API responses are revalidated. */
  defaultRevalidateSeconds: Number(process.env.CONTENT_REVALIDATE_SECONDS ?? 300),
} as const;

export const isUsingMockContent = env.contentSource === "mock";
