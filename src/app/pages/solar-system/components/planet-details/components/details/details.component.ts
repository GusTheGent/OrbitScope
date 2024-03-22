import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BODY } from 'src/app/pages/solar-system/interfaces/BODY.interface';
import { SolarSystemService } from 'src/app/pages/solar-system/services/solar-system.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public planet: BODY | null;
  constructor(private solarSystemService: SolarSystemService) {}

  ngOnInit(): void {
    this.subscription = this.solarSystemService.selectedPlanet$.subscribe(
      (planet) => {
        this.planet = planet;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
