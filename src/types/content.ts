/**
 * Domain model for every piece of editorial content on the site.
 *
 * These types are the contract between the UI and the content layer
 * (`src/lib/content`). When the Spring Boot API replaces the mock repository,
 * the DTOs it returns must map onto exactly these shapes — nothing in
 * `src/components` or `src/app` needs to change.
 */

/** URL-safe identifier, also used as the route segment. */
export type Slug = string;

/**
 * An image reference. `url` is optional so the UI can render a deterministic
 * gradient placeholder until the backend supplies real asset URLs.
 */
export interface MediaImage {
  /** Absolute or root-relative URL. Omit to use the gradient placeholder. */
  url?: string;
  /** Always required — placeholders still need an accessible description. */
  alt: string;
  /** Stable string used to derive the placeholder gradient. Defaults to `alt`. */
  seed?: string;
}

/** A headline figure, e.g. `{ value: "714", unit: "MW", label: "…" }`. */
export interface Stat {
  value: string;
  unit?: string;
  label: string;
}

export interface Market {
  slug: Slug;
  name: string;
  tagline: string;
  description: string;
  image: MediaImage;
  /** What the practice actually does in this market. */
  capabilities: string[];
  stats: Stat[];
  featuredProjectSlugs: Slug[];
}

export type ServiceCategory =
  | "Design and engineering"
  | "Advisory"
  | "Digital"
  | "Planning";

export interface Service {
  slug: Slug;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  image: MediaImage;
  /** Concrete outputs a client receives. */
  deliverables: string[];
  relatedMarketSlugs: Slug[];
}

export interface DigitalTool {
  slug: Slug;
  name: string;
  summary: string;
  image: MediaImage;
}

export interface ProjectLocation {
  city?: string;
  country: string;
}

export interface Project {
  slug: Slug;
  title: string;
  location: ProjectLocation;
  /** Completion or delivery year. */
  year: number;
  client: string;
  marketSlugs: Slug[];
  serviceSlugs: Slug[];
  summary: string;
  description: string;
  image: MediaImage;
  stats: Stat[];
  highlights: string[];
}

export type ArticleCategory =
  | "Press release"
  | "Insight"
  | "Award"
  | "Report"
  | "Event";

export interface Author {
  name: string;
  role: string;
}

export interface Article {
  slug: Slug;
  title: string;
  excerpt: string;
  /** Paragraphs of body copy, in order. */
  body: string[];
  category: ArticleCategory;
  /** ISO-8601 date (`YYYY-MM-DD`). */
  publishedAt: string;
  readingMinutes: number;
  author: Author;
  image: MediaImage;
  tags: string[];
}

/** A "big question" teaser — SDRS calls these Issues. */
export interface Issue {
  slug: Slug;
  question: string;
  summary: string;
  image: MediaImage;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image: MediaImage;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Initiative {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface AboutContent {
  intro: string;
  stats: Stat[];
  milestones: Milestone[];
  leadership: Person[];
  initiatives: Initiative[];
  values: ValueItem[];
  founderQuote: {
    quote: string;
    attribution: string;
  };
}

export type EmploymentType = "Full time" | "Part time" | "Contract";
export type CareerLevel = "Graduate" | "Experienced" | "Senior" | "Leadership";

export interface JobOpening {
  id: string;
  title: string;
  discipline: string;
  location: string;
  employmentType: EmploymentType;
  level: CareerLevel;
  /** ISO-8601 date (`YYYY-MM-DD`). */
  postedAt: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface CareersContent {
  intro: string;
  stats: Stat[];
  openings: JobOpening[];
  benefits: Benefit[];
  applicationProcess: ProcessStep[];
  profiles: Person[];
}

export type OfficeRegion =
  | "Americas"
  | "Europe"
  | "Middle East and Africa"
  | "East Asia"
  | "Australasia";

export interface Office {
  id: string;
  city: string;
  country: string;
  region: OfficeRegion;
  addressLines: string[];
  phone: string;
  email: string;
  /** Marked as the region's primary contact point. */
  isHeadquarters?: boolean;
}

export interface EnquiryTopic {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactContent {
  intro: string;
  offices: Office[];
  enquiryTopics: EnquiryTopic[];
  faqs: FaqItem[];
}

/**
 * Normalised shape every card in the UI renders from. Entities are mapped to
 * this by `src/lib/content/mappers.ts`, so one `<ContentCard>` and one
 * `<FilterableGrid>` serve markets, services, projects and news alike.
 */
export interface CardItem {
  id: string;
  href: string;
  title: string;
  /** Small label above the title (category, market, date…). */
  eyebrow?: string;
  summary?: string;
  image: MediaImage;
  /** Short facts rendered as a dot-separated row under the summary. */
  meta?: string[];
  /** Values matched against the active filter selection. */
  tags?: string[];
}

/** One group of filter options in `<FilterableGrid>`. */
export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

export interface FilterOption {
  /** Must match a value in `CardItem.tags`. */
  value: string;
  label: string;
}
