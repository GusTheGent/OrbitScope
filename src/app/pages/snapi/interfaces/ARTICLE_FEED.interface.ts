import { ARTICLE } from './ARTICLE.interface';

export interface ARTICLE_FEED {
  count: number;
  next: string;
  previous: string;
  results: ARTICLE[];
}
