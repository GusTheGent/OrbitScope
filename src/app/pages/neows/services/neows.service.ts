import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/shared/endpoints/endpoints';
import { environment } from 'src/environments/environment';
import { NEO_FEED } from '../interfaces/NEO_FEED.interface';

@Injectable({
  providedIn: 'root',
})
export class NeowsService {
  private http = inject(HttpClient);
  private BASE_URL: string = environment.BASE_URL;

  public getNEO_Feed(): Observable<NEO_FEED> {
    const params = new HttpParams()
      .set('api_key', environment.API_KEY)
      .set('start_date', '')
      .set('end_date', '');
    return this.http.get<NEO_FEED>(`${this.BASE_URL}/${ENDPOINTS.NEO_FEED}`, {
      params: params,
    });
  }
}
