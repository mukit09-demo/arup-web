import { routes } from "@/lib/config/routes";
import { formatLocation, formatShortDate } from "@/lib/utils/format";
import type {
  Article,
  CardItem,
  DigitalTool,
  Issue,
  Market,
  Project,
  Service,
} from "@/types/content";

/**
 * Entity → `CardItem` adapters.
 *
 * These exist so that one `<ContentCard>` and one `<FilterableGrid>` can render
 * every collection on the site. A new entity type needs a mapper here, not a
 * new card component.
 */

export function marketToCard(market: Market): CardItem {
  return {
    id: market.slug,
    href: routes.market(market.slug),
    title: market.name,
    summary: market.tagline,
    image: market.image,
    tags: [market.slug],
  };
}

export function serviceToCard(service: Service): CardItem {
  return {
    id: service.slug,
    href: routes.service(service.slug),
    title: service.name,
    eyebrow: service.category,
    summary: service.tagline,
    image: service.image,
    tags: [service.category, ...service.relatedMarketSlugs],
  };
}

export function projectToCard(project: Project): CardItem {
  return {
    id: project.slug,
    href: routes.project(project.slug),
    title: project.title,
    eyebrow: formatLocation(project.location),
    summary: project.summary,
    image: project.image,
    meta: [String(project.year)],
    tags: [...project.marketSlugs, ...project.serviceSlugs],
  };
}

export function articleToCard(article: Article): CardItem {
  return {
    id: article.slug,
    href: routes.article(article.slug),
    title: article.title,
    eyebrow: article.category,
    summary: article.excerpt,
    image: article.image,
    meta: [formatShortDate(article.publishedAt), `${article.readingMinutes} min read`],
    tags: [article.category, ...article.tags],
  };
}

/**
 * Issues have no detail route in this build, so they link to the news index.
 * Point `href` at `routes.article(...)` once the backend serves issue pages.
 */
export function issueToCard(issue: Issue): CardItem {
  return {
    id: issue.slug,
    href: routes.news,
    title: issue.question,
    eyebrow: "Issue",
    summary: issue.summary,
    image: issue.image,
  };
}

export function digitalToolToCard(tool: DigitalTool): CardItem {
  return {
    id: tool.slug,
    href: routes.services,
    title: tool.name,
    eyebrow: "Digital tool",
    summary: tool.summary,
    image: tool.image,
  };
}
