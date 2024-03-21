import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ARTICLE_FEED } from '../interfaces/ARTICLE_FEED.interface';
import { ARTICLE } from '../interfaces/ARTICLE.interface';

@Injectable({
  providedIn: 'root',
})
export class SnapiService {
  private http = inject(HttpClient);
  private BASE_SNAPI_URL: string = environment.BASE_SNAPI_URL;

  getArticleFeed(): Observable<ARTICLE_FEED> {
    return this.http.get<ARTICLE_FEED>(`${this.BASE_SNAPI_URL}/articles`);
  }

  getNextArticleFeed(url: string): Observable<ARTICLE_FEED> {
    return this.http.get<ARTICLE_FEED>(url);
  }

  getPreviousArticleFeed(url: string): Observable<ARTICLE_FEED> {
    return this.http.get<ARTICLE_FEED>(url);
  }

  getArticleById(id: string): Observable<ARTICLE> {
    return this.http.get<ARTICLE>(`${this.BASE_SNAPI_URL}/articles/${id}`);
  }
}
