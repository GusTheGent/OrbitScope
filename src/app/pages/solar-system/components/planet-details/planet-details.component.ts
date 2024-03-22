import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolarSystemService } from '../../services/solar-system.service';
import { Observable, Subscription } from 'rxjs';
import { BODY } from '../../interfaces/BODY.interface';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private solarSystemService = inject(SolarSystemService);
  private subsciption: Subscription;

  public planet: BODY;

  ngOnInit(): void {
    const planetId = this.activatedRoute.snapshot.paramMap.get('id');

    if (planetId) {
      this.subsciption = this.solarSystemService
        .getBodyById(planetId)
        .subscribe((res) => {
          this.planet = res;
          this.solarSystemService.setSelectedPlanet(this.planet);
        });
    }
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
}
