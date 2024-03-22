import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BODY, SOLAR_SYSTEM_BODIES } from '../interfaces/BODY.interface';
import { ENDPOINTS } from 'src/app/shared/endpoints/endpoints';

@Injectable({
  providedIn: 'root',
})
export class SolarSystemService {
  private http = inject(HttpClient);
  private BASE_SOLAR_SYSTEM_URL = environment.BASE_SOLAR_SYSTEM_URL;

  private selectedPlanetSubject: BehaviorSubject<BODY | null> =
    new BehaviorSubject<BODY | null>(null);
  public selectedPlanet$: Observable<BODY | null> =
    this.selectedPlanetSubject.asObservable();

  public getBodies(): Observable<SOLAR_SYSTEM_BODIES> {
    return this.http.get<SOLAR_SYSTEM_BODIES>(
      `${this.BASE_SOLAR_SYSTEM_URL}/${ENDPOINTS.SOLAR_SYSTEM_BODIES}`
    );
  }

  public getPlanets(): Observable<SOLAR_SYSTEM_BODIES> {
    return this.http
      .get<SOLAR_SYSTEM_BODIES>(
        `${this.BASE_SOLAR_SYSTEM_URL}/${ENDPOINTS.SOLAR_SYSTEM_BODIES}`
      )
      .pipe(
        map((response: SOLAR_SYSTEM_BODIES) => {
          const planets: BODY[] = response.bodies.filter(
            (body) => body.isPlanet
          );
          return { bodies: planets };
        })
      );
  }

  public getBodyById(id: string): Observable<BODY> {
    return this.http.get<BODY>(
      `${this.BASE_SOLAR_SYSTEM_URL}/${ENDPOINTS.SOLAR_SYSTEM_BODIES}/${id}`
    );
  }

  public setSelectedPlanet(planet: BODY): void {
    this.selectedPlanetSubject.next(planet);
  }
}
