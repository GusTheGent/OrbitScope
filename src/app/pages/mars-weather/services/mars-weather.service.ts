import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/shared/endpoints/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarsWeatherService {
  private http = inject(HttpClient);
  private BASE_URL: string = environment.BASE_URL;

  public getWeather(): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.API_KEY)
      .set('feedtype', 'json')
      .set('ver', '1.0');
    return this.http.get(`${this.BASE_URL}/${ENDPOINTS.INSIGHT}`, {
      params: params,
    });
  }
}
