import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APOD } from '../interfaces/APOD.interface';
import { ENDPOINTS } from 'src/app/shared/endpoints/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  private http = inject(HttpClient);
  private BASE_URL: string = environment.BASE_URL;

  public getPlanetaryAPOD(date: string): Observable<APOD> {
    const params = new HttpParams()
      .set('api_key', environment.API_KEY)
      .set('date', date);
    return this.http.get<APOD>(`${this.BASE_URL}/${ENDPOINTS.APOD_PLANETARY}`, {
      params: params,
    });
  }
}
