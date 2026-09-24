import { isUsingMockContent } from "@/lib/config/env";
import { httpRepository } from "./http.repository";
import { mockRepository } from "./mock.repository";
import type { ContentRepository } from "./repository";

/**
 * The content API for the whole app. Import this — never the data modules or
 * either concrete repository.
 *
 *   const markets = await content.listMarkets();
 *
 * Switching to the Spring Boot backend is `NEXT_PUBLIC_CONTENT_SOURCE=api`.
 */
export const content: ContentRepository = isUsingMockContent
  ? mockRepository
  : httpRepository;

export type {
  ArticleQuery,
  ContentRepository,
  EnquiryInput,
  EnquiryResult,
  ProjectQuery,
} from "./repository";
