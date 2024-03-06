import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/shared/endpoints/endpoints';
import { environment } from 'src/environments/environment';
import { NEO_FEED } from '../interfaces/NEO_FEED.interface';
import { NEO_LOOKUP } from '../interfaces/NEO_LOOKUP.interface';

@Injectable({
  providedIn: 'root',
})
export class NeowsService {
  private http = inject(HttpClient);
  private BASE_URL: string = environment.BASE_URL;

  public getNEO_Feed(): Observable<NEO_FEED> {
    const params = new HttpParams().set('api_key', environment.API_KEY);
    return this.http.get<NEO_FEED>(`${this.BASE_URL}/${ENDPOINTS.NEO_FEED}`, {
      params: params,
    });
  }

  public getNEO_LookUp(neoReferenceId: string): Observable<NEO_LOOKUP> {
    const params = new HttpParams().set('api_key', environment.API_KEY);
    return this.http.get<NEO_LOOKUP>(
      `${this.BASE_URL}/${ENDPOINTS.NEO_LOOKUP}/${neoReferenceId}`,
      {
        params: params,
      }
    );
  }

  public getPreviousFeed(url: string): Observable<NEO_FEED> {
    return this.http.get<NEO_FEED>(url);
  }

  public getNextFeed(url: string): Observable<NEO_FEED> {
    return this.http.get<NEO_FEED>(url);
  }
}
