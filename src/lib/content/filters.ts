import { uniqueSorted } from "@/lib/utils/array";
import type {
  Article,
  FilterGroup,
  Market,
  Project,
  Service,
} from "@/types/content";

/**
 * Filter groups for `<FilterableGrid>`. Options are derived from the content
 * itself, so a new market or category never needs a matching UI change.
 */

export function marketFilterGroup(
  markets: Market[],
  label = "Market",
): FilterGroup {
  return {
    id: "market",
    label,
    options: markets.map((market) => ({ value: market.slug, label: market.name })),
  };
}

export function serviceCategoryFilterGroup(services: Service[]): FilterGroup {
  return {
    id: "category",
    label: "Type of service",
    options: uniqueSorted(services.map((service) => service.category)).map(
      (category) => ({ value: category, label: category }),
    ),
  };
}

/** Markets that actually have projects attached — avoids dead filter options. */
export function projectMarketFilterGroup(
  projects: Project[],
  markets: Market[],
): FilterGroup {
  const used = new Set(projects.flatMap((project) => project.marketSlugs));
  return marketFilterGroup(
    markets.filter((market) => used.has(market.slug)),
    "Market",
  );
}

export function articleCategoryFilterGroup(articles: Article[]): FilterGroup {
  return {
    id: "category",
    label: "Category",
    options: uniqueSorted(articles.map((article) => article.category)).map(
      (category) => ({ value: category, label: category }),
    ),
  };
}
